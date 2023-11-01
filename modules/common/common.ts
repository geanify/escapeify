export const genericEscape = (unescapedString : string, escapeMap : Map<string, string>) => {
    let escapedString = '';
    for(let i = 0; i < unescapedString.length; i++) {
        const character = unescapedString[i] as string;
        const escapeChar = escapeMap.get(character);

        if(escapeChar) {
            escapedString += escapeChar;
        }
        else {
            escapedString += <string>character;
        }
    }
    return escapedString;
}


export const genericUnescape = (escapedHtmlString: string, escapeMap : Map<string, string>) => {
    const keys = Object.keys(escapeMap);
    
    escapeMap.forEach((value, key)=> {
        escapedHtmlString = escapedHtmlString.replaceAll(value, key);
    })

    return escapedHtmlString;
}
