import { UUID, UUIDVersion1 } from "@sudoo/uuid";

const stringUUID: string = UUIDVersion1.generateString(); // xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
const stringUUID: string = UUIDVersion1.generateString(new Date()); // Override time stamp

const uuid: UUID = UUIDVersion1.generate(); // Instance
const uuid: UUID = UUIDVersion1.generate(new Date()); // Override time stamp
uuid.toString(); // xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
uuid.toBraceString(): // {xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}
uuid.toUnifiedResourceString(): // urn:uuid:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx