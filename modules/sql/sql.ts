import { genericEscape, genericUnescape } from "../common/common";
import { sqlEscapeMap } from "../common/constants";

export const escapeSQL = (unescapedStr: string) => {
    return genericEscape(unescapedStr, sqlEscapeMap);
}

export const unescapeSQL = (escapedHtmlString: string) => {
    return genericUnescape(escapedHtmlString, sqlEscapeMap);
}
