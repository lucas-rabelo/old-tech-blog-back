import { prisma } from "../../lib/prisma";

type AlterBlogRequest = {
    title: string;
    content: string;
    categoryId: string;
    imageUrl: string;
    isActive: boolean;
}

class AlterBlogService {
    async execute(id: string, request: AlterBlogRequest) {
        const { title, content, categoryId, imageUrl, isActive } = request;

        const blog = await prisma.blog.update({
            where: {
                id
            },
            data: {
                title,
                content,
                categoryId,
                imageUrl,
                isActive
            }
        })

        return blog;
    }
}

export { AlterBlogService }