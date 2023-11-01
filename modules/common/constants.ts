
export const htmlEscapeMap = new Map<string, string> ([
    ['<', '&lt;'],
    ['>', '&gt;'],
    ['"', '&quot;'],
    ["'", '&#39;'],
    ['&', '&amp;'],
    [' ', '&nbsp;'], //invisible character
])


export const sqlEscapeMap = new Map<string, string> ([
    ['\0', '\\0'],
    ['\b', '\\b'],
    ['\t', '\\t'],
    ['\n', '\\n'],
    ['\r', '\\r'],
    ['\x1a', '\\Z'],
    ['"', '\\"'],
    ["'", "\'"],
    ['\\', '\\\\'],
]);