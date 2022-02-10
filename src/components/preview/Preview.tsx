import React, { useEffect, useRef } from 'react';
import { IFrameWrapper, PreviewFrame, PreviewError } from './Preview.styles';

interface PreviewPropTypes {
  code: string,
  bundlingStatus: string;
}

const html = `
    <html>
      <head></head>
      <body>
        <div id="root"></div>
        <script>
          const handleError = (err) => {
              const root = document.querySelector('#root');
              root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
              console.error(err);
          };

          window.addEventListener('error', (event) => {
            event.preventDefault();
            handleError(event.error);
          });

          window.addEventListener('message', (event) => {
            try {
              eval(event.data);
            } catch (err) {
              handleError(err);
            }
          }, false);
        </script>
      </body>
    </html>
  `;

const Preview: React.FC<PreviewPropTypes> = ({ code, bundlingStatus }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcDoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, '*');
    }, 50)
  }, [code]);

  console.log(bundlingStatus, "here");

  return (
    <IFrameWrapper>
      <PreviewFrame
        sandbox="allow-scripts"
        title="Preview"
        srcDoc={html}
        ref={iframe}
      />
      {bundlingStatus && <PreviewError>{bundlingStatus}</PreviewError>}
    </IFrameWrapper>
  )
};

export default Preview;