import { ReactNode, useEffect, useState } from "react";
import { ResizableBoxProps } from 'react-resizable';
import { StyledResizableBox } from './Resizable.styles';
interface ResizableProps {
    direction: "x" | "y";
    children: ReactNode,
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
    let resizableProps: ResizableBoxProps;
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);
    const [resizerWidth, setResizerWidth] = useState<number>(window.innerWidth * 0.75);

    if (direction === 'y') {
        resizableProps = {
            className: 'resize-horizontal',
            axis: 'y',
            width: Infinity,
            height: 300,
            resizeHandles: ['s'],
            maxConstraints: [Infinity, windowHeight * 0.9],
            minConstraints: [Infinity, windowHeight * 0.1],
        }
    } else {
        resizableProps = {
            className: 'resize-vertical',
            axis: 'x',
            width: resizerWidth,
            height: Infinity,
            resizeHandles: ['e'],
            maxConstraints: [windowWidth * 0.75, Infinity],
            minConstraints: [windowWidth * 0.2, Infinity],
            onResizeStop: (event, data) => {
                setResizerWidth(data.size.width);
            }
        }
    }

    useEffect(() => {
        // debouncing, personally hate it check out useMemo?
        let timer: any;

        const resizeListener = () => {
            if (timer) {
                clearTimeout(timer);
            };

            timer = setTimeout(() => {
                setWindowWidth(window.innerWidth);
                setWindowHeight(window.innerHeight);
                if (window.innerWidth * 0.75 < resizerWidth) {
                    setResizerWidth(window.innerWidth * 0.75);
                }
            }, 10);
        };
        window.addEventListener('resize', resizeListener);
        return () => {
            window.removeEventListener('resize', resizeListener);
        }


    }, [resizerWidth]);

    return (
        <StyledResizableBox
            {...resizableProps}
        >
            {children}
        </StyledResizableBox>
    )
};

export default Resizable;