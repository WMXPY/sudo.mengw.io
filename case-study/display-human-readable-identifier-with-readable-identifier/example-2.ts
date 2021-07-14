import { readableIdentifierGenerator, capitalReadableIdentifierGenerator } from "./your-generator-path";

const identifier: string = "Your Awesome Identifier";

readableIdentifierGenerator.generatePair(identifier); // worthless-lamb
readableIdentifierGenerator.generateTuple(identifier); // oceanic-consist-france

capitalReadableIdentifierGenerator.generatePair(identifier);  // Worthless Lamb
capitalReadableIdentifierGenerator.generateTuple(identifier); // Oceanic Consist France