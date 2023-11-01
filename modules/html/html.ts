import { genericEscape, genericUnescape } from "../common/common";
import { htmlEscapeMap } from "../common/constants";



export const escapeHTMLString = (unescapedString : string) => {
    return genericEscape(unescapedString, htmlEscapeMap);
}

export const unescapeHtmlString = (escapedHtmlString: string) => {
    return genericUnescape(escapedHtmlString, htmlEscapeMap);
}
