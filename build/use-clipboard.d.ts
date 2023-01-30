import React from 'react';
declare const useClipboard: () => {
    copyToClipboard: (value?: string) => void;
    copyState: string;
    contentRef: React.RefObject<HTMLElement>;
};
export default useClipboard;
