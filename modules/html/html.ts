const htmlEscapeMap = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    ' ': '&nbsp;', //invisible character
}


export const escapeHTMLString = (unescapedString : string) => {
    let escapedString = '';
    for(let i = 0; i < unescapedString.length; i++) {
        const character = unescapedString[i] as keyof typeof htmlEscapeMap;
        const escapeChar = htmlEscapeMap[character];

        if(escapeChar) {
            escapedString += escapeChar;
        }
        else {
            escapedString += character;
        }
    }
    return escapedString;
}

export const unescapeHtmlString = (escapedHtmlString: string) => {
    const keys = Object.keys(htmlEscapeMap);
    

    keys.forEach((key)=> {
        const value = htmlEscapeMap[key as keyof typeof htmlEscapeMap];
        escapedHtmlString = escapedHtmlString.replaceAll(value, key);
    })

    return escapedHtmlString;
}
