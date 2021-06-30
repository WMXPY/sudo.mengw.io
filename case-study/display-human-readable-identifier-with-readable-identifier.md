# Display Human Readable Identifier with `@sudoo/readable-identifier`

View document of `@sudoo/readable-identifier` at <https://readable-identifier.sudo.dog>

## No one likes garbled stuff

It is a common way to store data in a database with almost meaningless strings like UUID and ObjectID.

However, it is unfriendly to display meaningless strings to end-users. For non-developers, we can display the main fields of data in other ways that are readable and hard to repeat. Introducing `@sudoo/readable-identifier`.

## Generate Identifier

Install `@sudoo/readable-identifier` is easy. Simply run the following command in your project folder.

```sh
yarn add @sudoo/readable-identifier
# Or
npm install @sudoo/readable-identifier --save
```

Also, if no `@sudoo/words` dictionary instance is created or planned to be created. We also provide `@sudoo/words-english` as the default dictionary for identifier generation. Install it with the following commands.

```sh
yarn add @sudoo/words-english
# Or
npm install @sudoo/words-english --save
```

A generate instance can create any `@sudoo/words` dictionary instance.

```ts
import { ReadableIdentifierGenerator } from "@sudoo/readable-identifier";
import { englishWords } from "@sudoo/words-english";

export const readableIdentifierGenerator = ReadableIdentifierGenerator.from(englishWords);

// With Config
export const capitalReadableIdentifierGenerator = ReadableIdentifierGenerator.from(englishWords, {
    join: " ",
    capital: true,
});
```

That's it. All setup is completed. We not can use the generator everywhere else.

```ts
import { readableIdentifierGenerator, capitalReadableIdentifierGenerator } from "./your-generator-path";

const identifier: string = "Your Awesome Identifier";

readableIdentifierGenerator.generatePair(identifier); // worthless-lamb
readableIdentifierGenerator.generateTuple(identifier); // oceanic-consist-france

capitalReadableIdentifierGenerator.generatePair(identifier);  // Worthless Lamb
capitalReadableIdentifierGenerator.generateTuple(identifier); // Oceanic Consist France
```

For the same dictionary and identifier, the generation result will always be identical, so it's safe to use the readable identifier to represent your data resource.
