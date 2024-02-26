import { prisma } from "../../lib/prisma"

class GetBlogService {
    async execute(id: string) {
        const blog = await prisma.blog.findUniqueOrThrow({
            where: {
                id
            }
        })

        return blog;
    }
}

export { GetBlogService }