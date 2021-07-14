export const handleRequest = async (req: any) => {

    if (req.token.hasPermission(req.headers)) {
        return await getAllResult();
    }
    return await getPartialResult();
};