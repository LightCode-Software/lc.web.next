import { useRef, useLayoutEffect, useState, useCallback } from 'react';

function useDimensions() {
    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const updateDimensions = useCallback(() => {
        const node = targetRef.current;
        if (node) {
            const { width, height } = node.getBoundingClientRect();
            setDimensions({ width, height });
        }
    }, [targetRef.current]);

    useLayoutEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, [updateDimensions]);

    return [targetRef, dimensions];
}

export default useDimensions;