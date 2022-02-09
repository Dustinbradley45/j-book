import React, { useEffect, useRef } from 'react';
import { IFrameWrapper, PreviewFrame } from './Preview.styles';

interface PreviewPropTypes {
    code: string,
}

const html = `
    <html>
      <head></head>
      <body>
        <div id="root"></div>
        <script>
          window.addEventListener('message', (event) => {
            try {
              eval(event.data);
            } catch (err) {
              const root = document.querySelector('#root');
              root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
              console.error(err);
            }
          }, false);
        </script>
      </body>
    </html>
  `;

const Preview: React.FC<PreviewPropTypes> = ({ code }) => {
    const iframe = useRef<any>();

    useEffect(() => {
        iframe.current.srcDoc = html;
        iframe.current.contentWindow.postMessage(code, '*');

    }, [code]);

    return (
        <IFrameWrapper>
            <PreviewFrame
                sandbox="allow-scripts"
                title="Preview"
                srcDoc={html}
                ref={iframe}
            />
        </IFrameWrapper>
    )
};

export default Preview;