import { useState, useEffect } from 'react';

function getDocumentDimensions() {
    const { scrollWidth: width, scrollHeight: height } = document.documentElement;
    return { width, height };
}

export default function useDocumentDimensions() {
    const [documentDimensions, setDocumentDimensions] = useState(getDocumentDimensions());

    useEffect(() => {
        function handleResize() {
            setDocumentDimensions(getDocumentDimensions());
        }

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleResize);
        };
    }, []);

    return documentDimensions;
}
