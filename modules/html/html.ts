import { genericEscape } from "../common/common";

const htmlEscapeMap = new Map<string, string> ([
    ['<', '&lt;'],
    ['>', '&gt;'],
    ['"', '&quot;'],
    ["'", '&#39;'],
    ['&', '&amp;'],
    [' ', '&nbsp;'], //invisible character
])


export const escapeHTMLString = (unescapedString : string) => {
    return genericEscape(unescapedString, htmlEscapeMap as Map<string, string>);
}

export const unescapeHtmlString = (escapedHtmlString: string) => {
    const keys = Object.keys(htmlEscapeMap);
    
    htmlEscapeMap.forEach((value, key)=> {
        escapedHtmlString = escapedHtmlString.replaceAll(value, key);
    })

    return escapedHtmlString;
}
