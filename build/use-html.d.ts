/// <reference types="react" />
declare const useHTML: () => {
    htmlFrom: (htmlString: string, options?: {
        bindData?: {
            [key: string]: string;
        } | undefined;
        fallBackBindData?: {
            [key: string]: string;
        } | undefined;
    } | undefined) => string | JSX.Element | JSX.Element[];
    placeHolderHTMLFrom: (htmlString: string, placeHolder: string) => string | JSX.Element | JSX.Element[];
    bindData: (htmlString: string, data: {
        [key: string]: string;
    }, fallbackData: {
        [key: string]: string;
    }) => string;
    parseHTMLString: (htmlString: string) => string | JSX.Element | JSX.Element[];
    JSXToHTML: (Comp: (props: {
        [key: string]: any;
    }) => JSX.Element, props: {
        [key: string]: any;
    }) => string;
};
export default useHTML;
