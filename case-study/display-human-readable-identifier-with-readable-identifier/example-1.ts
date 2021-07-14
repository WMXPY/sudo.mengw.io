import { ReadableIdentifierGenerator } from "@sudoo/readable-identifier";
import { englishWords } from "@sudoo/words-english";

export const readableIdentifierGenerator = ReadableIdentifierGenerator.from(englishWords);

// With Config
export const capitalReadableIdentifierGenerator = ReadableIdentifierGenerator.from(englishWords, {
    join: " ",
    capital: true,
});