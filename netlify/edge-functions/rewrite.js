const { PrismaClient } = require('@prisma/client')

const client = new PrismaClient();
const posts = await client.post.findMany();
console.log(posts);
const rewrite = async (request, context) => {
    const path = context.geo?.country?.code === 'AU' ? '/edge/australia' : '/edge/not-australia';
    return new URL(path, request.url);
};

export const config = {
    path: '/edge'
};

export default rewrite;
