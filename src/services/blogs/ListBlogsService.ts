import { prisma } from "../../lib/prisma"


class ListBlogService {
    async execute() {
        const blogs = await prisma.blog.findMany({
            orderBy: {
                createdAt: 'asc'
            },
            include: {
                category: true,
                author: true
            }
        })

        return blogs;
    }
}

export { ListBlogService }