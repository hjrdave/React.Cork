/// <reference types="react" />
import useFetch from "./use-fetch";
import useCleanupEffect from "./use-cleanup-effect";
import useClipboard from "./use-clipboard";
import useCSS from "./use-css";
import useDataAttributes from "./use-data-attributes";
import useDateTime from "./use-date-time";
import useDebounce from "./use-debounce";
import useExports from "./use-exports";
import useHTML from "./use-html";
import useInput from "./use-input";
import useJSON from "./use-json";
import useNonInitialEffect from "./use-non-initial-effect";
import useNumber from "./use-number";
import useObject from "./use-object";
import useQuerySelector from "./use-query-selector";
import useRegex from "./use-regex";
import useString from "./use-string";
declare const Cork: {
    useFetch: typeof useFetch;
    useCleanupEffect: (effect: import("react").EffectCallback) => void;
    useClipboard: () => {
        copyToClipboard: (value?: string | undefined) => void;
        copyState: string;
        contentRef: import("react").RefObject<HTMLElement>;
    };
    useCSS: () => {
        nameSpaceClassNames: (rawCssString: string, namespaces: import("./use-css").TRawCSSImport) => string;
    };
    useDataAttributes: (dataAttribute: string) => {
        data: never[];
    };
    useDateTime: () => {
        formatDate: (date: Date | null | undefined) => string | undefined;
        today: Date;
        month: number;
        day: number;
        year: number;
    };
    useDebounce: (fn: any, delay: number) => (...args: any) => void;
    useExports: () => {
        exportToExcel: (data: any[], columnFields: {
            field: string;
            label?: string | undefined;
            title?: string | undefined;
        }[]) => Promise<unknown>;
        exportToPDF: (data: any[], columnFields: {
            field: string;
            label?: string | undefined;
            title?: string | undefined;
        }[]) => Promise<unknown>;
    };
    useHTML: () => {
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
    useInput: (initialValue: any) => {
        value: any;
        setValue: import("react").Dispatch<any>;
        reset: () => void;
        bind: {
            value: any;
            onChange: (event: any) => void;
        };
    };
    useJSON: () => {
        convertFromXML: (xmlString: string) => string;
    };
    useNonInitialEffect: (effect: import("react").EffectCallback, deps?: import("react").DependencyList | undefined) => void;
    useNumber: () => {
        isInRange: (value: number, range: [min: number | undefined, max: number | undefined]) => boolean;
        trimFloat: (value: string | number, float: number) => number;
        convertToNum: (value?: any) => number;
        countDigits: (value: number) => number;
    };
    useObject: () => {
        isObjectLiteral: (param: any) => boolean;
        chunkArray: (arr: any[], count: number) => any[][];
        windowArray: (chunkedArr: any[][], activeIndex: number) => any[];
        areEqualShallow: (obj1: {
            [key: string]: any;
        }, obj2: {
            [key: string]: any;
        }) => boolean;
        isEmpty: (obj: object | any[] | null) => boolean;
        isFile: (param: any) => boolean;
        isBlob: (param: any) => boolean;
    };
    useQuerySelector: (selector: string) => {
        element: Element | null;
    };
    useRegex: (options?: import("./use-regex").IOptions | undefined) => {
        noSpecialChars: RegExp;
        noLeadingZero: RegExp;
        escapeRegExp: (stringToGoIntoTheRegex: string) => string;
    };
    useString: () => {
        removeLeadingZero: (value: string) => string;
        isEqual: (string1: string, string2: string) => boolean;
        convertToSrcString: (param?: string | File | undefined) => string;
        removeSpecialChars: (value: string, options?: {
            allow?: string | undefined;
        } | undefined) => string;
        hasSpecialChars: (value: string, options?: {
            ignore?: string | undefined;
        } | undefined) => boolean;
        trunicate: (value: string, maxLength?: number | undefined) => string;
        trimFloat: (value: string, float: number) => string;
    };
};
export { useFetch, useCleanupEffect, useClipboard, useCSS, useDataAttributes, useDateTime, useDebounce, useExports, useHTML, useInput, useJSON, useNonInitialEffect, useNumber, useObject, useQuerySelector, useRegex, useString };
export default Cork;
