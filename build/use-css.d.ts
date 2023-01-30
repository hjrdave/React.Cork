export type TRawCSSImport = {
    readonly [key: string]: string;
};
declare const useCSS: () => {
    nameSpaceClassNames: (rawCssString: string, namespaces: TRawCSSImport) => string;
};
export default useCSS;
