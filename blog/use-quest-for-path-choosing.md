# Use `@sudoo/quest` for Path Choosing

View document of `@sudoo/quest` at <https://quest.sudo.dog>

## The Old Way

In web back-end applications, there are many behaviors that change according to the permissions and requests passed in by users.

For example, in NodeJS, we can use the following code to do that.

```ts
export const handleRequest = async (req) => {

    if(req.token.hasPermission(something)) {
        return await getAllResult();
    }
    return await getPartialResult();
};
```

This way is very effective until the request becomes complicated, and more importantly, these conditions cannot be reused gracefully in different APIs.

## The `@sudoo/quest` Way

```ts
import { Quest } from "@sudoo/quest";

export const handleRequest = async (req) => {

    const quest = questDistributer.distribute();
    quest.requires('user has permission', (req) => {
        return req.token.hasPermission(something);
    });

    if(quest.isCompleted) {
        return await getAllResult();
    }
    return await getPartialResult();
};
```

Implementing same feature, we use more code, but in fact, in different APIs, we can use quest distributer to extract the reused part.

```ts
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

    if(quest.isCompleted) {
        return await getAllResult();
    }
    return await getPartialResult();
};
```
