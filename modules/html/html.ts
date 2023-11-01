import { genericEscape, genericUnescape } from "../common/common";
import { htmlEscapeMap } from "../common/constants";



export const escapeHTMLString = 
    (unescapedString : string) => genericEscape(unescapedString, htmlEscapeMap);

export const unescapeHtmlString = 
    (escapedHtmlString: string) => genericUnescape(escapedHtmlString, htmlEscapeMap);
