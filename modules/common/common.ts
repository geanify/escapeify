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