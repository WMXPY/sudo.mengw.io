# Generate UUID with `@sudoo/uuid`

View document of `@sudoo/uuid` at <https://uuid.sudo.dog>

## Why UUID

UUID is an Identifier system that can be generated locally and is almost impossible to duplicate.  
Compared with other ID generation methods, UUID does not need to rely on other parts, and there are a variety of flexible generation methods.

`@sudoo/uuid` provides a variety of lightweight, standard-compliant UUID generation functions.

## Use `@sudoo/uuid`

`@sudoo/uuid` has not extra dependencies. Use the following code in your project to install.

```sh
yarn add @sudoo/uuid
# Or
npm install @sudoo/uuid --save
```

Use the package is also simple.

The following example shows how to create V1 uuid with `@sudoo/uuid`. V1 uuid generate by current timestamp, sequence, and random node number. Also, all uuid has technic to preset its uuid version number. 

```ts
import { UUID, UUIDVersion1 } from "@sudoo/uuid";

const stringUUID: string = UUIDVersion1.generateString(); // xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
const stringUUID: string = UUIDVersion1.generateString(new Date()); // Override time stamp

const uuid: UUID = UUIDVersion1.generate(); // Instance
const uuid: UUID = UUIDVersion1.generate(new Date()); // Override time stamp
uuid.toString(); // xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
uuid.toBraceString(): // {xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}
uuid.toUnifiedResourceString(): // urn:uuid:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

V4 uuid is generated entirely with random numbers. Use the following code to generate V4 uuid with `@sudoo/uuid`.

```ts
import { UUID, UUIDVersion4 } from "@sudoo/uuid";

const stringUUID: string = UUIDVersion4.generateString(); // xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

const uuid: UUID = UUIDVersion4.generate(); // Instance
uuid.toString(); // xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
uuid.toBraceString(): // {xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}
uuid.toUnifiedResourceString(): // urn:uuid:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```
