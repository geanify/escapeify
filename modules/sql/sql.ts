import { genericEscape, genericUnescape } from "../common/common";
import { sqlEscapeMap } from "../common/constants";

export const escapeSQL = 
    (unescapedStr: string) => genericEscape(unescapedStr, sqlEscapeMap);
export const unescapeSQL = 
    (escapedHtmlString: string) => genericUnescape(escapedHtmlString, sqlEscapeMap);
