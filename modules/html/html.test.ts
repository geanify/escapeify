import { expect, test } from "bun:test";
import { escapeHTMLString, unescapeHtmlString } from "./html";


const textFile = Bun.file('./modules/html/htmlStrings.txt');
const escapedTextFile = Bun.file('./modules/html/escapedHTML.txt');

const text = await textFile.text();
const escapedText = await escapedTextFile.text();

const strings = text.split('\n');
const escapedStringsText = escapedText.split('\n');

test("escapeHTMLString test suite", () => {
    strings.forEach((str, index : keyof typeof escapedStringsText)=>{
        const escapedString = escapeHTMLString(str);

        const checkEscapedString = <string>escapedStringsText[index];

        expect(escapedString).toBe(checkEscapedString);
    });
});

test("unescapeHtmlString test suite", () => {
    escapedStringsText.forEach((str, index : keyof typeof escapedStringsText)=>{
        const escapedString = unescapeHtmlString(str);

        const checkEscapedString = <string>strings[index];

        expect(escapedString).toBe(checkEscapedString);
    });
});