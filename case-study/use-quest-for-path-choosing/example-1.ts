import { Quest } from "@sudoo/quest";

export const handleRequest = async (req) => {

    const quest = questDistributer.distribute();
    quest.requires('user has permission', (req) => {
        return req.token.hasPermission(something);
    });

    if (quest.isCompleted) {
        return await getAllResult();
    }
    return await getPartialResult();
};