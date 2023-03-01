import React from 'react';
import { ReactDOM } from 'react';
import ReactDOMServer from 'react-dom/server';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

const useHTML = () => {

    //Looks for {{propName}} in html string and replaces it with appropriate data valu
    const bindData = (htmlString: string, data: { [key: string]: string }, fallbackData: { [key: string]: string }) => {
        let bindedHtmlString = htmlString;
        const params = htmlString.match(/{{([^{{}}]+)}}/g)?.map((param) => param.replace(/[{{}}]/g, ''))?.filter((param) => Object.hasOwn(data, param));
        params?.map((param) => {
            const value = (data[param].length > 0) ? data[param] : fallbackData[param];
            const regex = new RegExp(`({{${param}}})`, 'g');
            bindedHtmlString = bindedHtmlString.replace(regex, value);
        });
        return bindedHtmlString;
    }

    //sanitizes and then parses html string
    const parseHTMLString = (htmlString: string) => {
        const cleanHtmlString = DOMPurify.sanitize(htmlString,
            { USE_PROFILES: { html: true } });
        const html = parse(cleanHtmlString);
        return html;
    }

    const placeHolderHTMLFrom = (htmlString: string, placeHolder: string) => {
        let bindedHtmlString = htmlString;
        const regex = new RegExp(`{{([^{{}}]+)}}`, 'g');
        bindedHtmlString = bindedHtmlString.replace(regex, placeHolder);
        return parseHTMLString(bindedHtmlString);

    }

    const htmlFrom = (htmlString: string, options?: { bindData?: { [key: string]: string }, fallBackBindData?: { [key: string]: string } }) => {
        if (options?.bindData) {
            const bindedString = bindData(htmlString, options?.bindData, (options?.fallBackBindData) ? options?.fallBackBindData : options?.bindData);
            return parseHTMLString(bindedString);
        } else {
            return parseHTMLString(htmlString);
        }

    }

    const JSXToHTML = (Comp: (props: { [key: string]: any }) => JSX.Element, props: { [key: string]: any }) => {
        if (Comp && props !== undefined) {
            return (ReactDOMServer.renderToStaticMarkup(Comp(props)))
        }
        return '';
    }

    return {
        htmlFrom,
        placeHolderHTMLFrom,
        bindData,
        parseHTMLString,
        JSXToHTML
    }
};

export default useHTML;