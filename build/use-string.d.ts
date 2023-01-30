declare const useString: () => {
    removeLeadingZero: (value: string) => string;
    isEqual: (string1: string, string2: string) => boolean;
    convertToSrcString: (param?: string | File) => string;
    removeSpecialChars: (value: string, options?: {
        allow?: string | undefined;
    } | undefined) => string;
    hasSpecialChars: (value: string, options?: {
        ignore?: string | undefined;
    } | undefined) => boolean;
    trunicate: (value: string, maxLength?: number) => string;
    trimFloat: (value: string, float: number) => string;
};
export default useString;
