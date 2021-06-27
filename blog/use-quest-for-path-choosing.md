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
