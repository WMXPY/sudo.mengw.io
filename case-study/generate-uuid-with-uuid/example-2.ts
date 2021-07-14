import { UUID, UUIDVersion4 } from "@sudoo/uuid";

const stringUUID: string = UUIDVersion4.generateString(); // xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

const uuid: UUID = UUIDVersion4.generate(); // Instance
uuid.toString(); // xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
uuid.toBraceString(): // {xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}
uuid.toUnifiedResourceString(): // urn:uuid:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx