// Another File
import { QuestDistributer } from "@sudoo/quest";

export const questDistributer = QuestDistributer.create();
quest.requires('user has permission', (req) => {
    return req.token.hasPermission(something);
});

// API File
import { questDistributer } from "./other";

export const handleRequest = async (req) => {

    const quest = questDistributer.distribute();
    quest.execute(req);

    if (quest.isCompleted) {
        return await getAllResult();
    }
    return await getPartialResult();
};