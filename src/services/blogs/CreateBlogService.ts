import { prisma } from "../../lib/prisma";

type CreateBlogRequest = {
    title: string;
    content: string;
    categoryId: string;
    imageUrl: string;
    isActive: boolean;
}

class CreateBlogService {
    async execute(request: CreateBlogRequest) {
        const { title, content, categoryId, imageUrl, isActive } = request;
        const authorId = "ebc0ca3b-1468-43f3-b5a1-9fd5ed235880";

        const blog = await prisma.blog.create({
            data: {
                title,
                content, 
                categoryId, 
                imageUrl, 
                isActive,
                authorId
            }
        })

        return blog;
    }
}

export { CreateBlogService }