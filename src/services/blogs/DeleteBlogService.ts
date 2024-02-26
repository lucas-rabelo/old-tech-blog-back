import { prisma } from "../../lib/prisma"

class DeleteBlogService {
    async execute(id: string) {
        await prisma.blog.delete({
            where: {
                id
            }
        })

        return;
    }
}

export { DeleteBlogService }