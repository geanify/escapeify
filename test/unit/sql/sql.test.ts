import { expect, test } from "bun:test";
import { escapeSQL, unescapeSQL } from "../../../modules/sql/sql";

const textFile = Bun.file('./test/unit/sql/sqlStrings.txt');
const escapedTextFile = Bun.file('./test/unit/sql/escapedSQL.txt');

const text = await textFile.text();
const escapedText = await escapedTextFile.text();

const strings = text.split('\n');
const escapedStringsText = escapedText.split('\n');

test("escapeSQL test suite", () => {
    strings.forEach((str, index : keyof typeof escapedStringsText)=>{
        const escapedString = escapeSQL(str);

        const checkEscapedString = <string>escapedStringsText[index];

        expect(escapedString).toBe(checkEscapedString);
    });
});

test("escapeSQL test suite", () => {
    escapedStringsText.forEach((str, index : keyof typeof escapedStringsText)=>{
        const escapedString = unescapeSQL(str);

        const checkEscapedString = <string>strings[index];

        expect(escapedString).toBe(checkEscapedString);
    });
});