import { FastifyRequest } from "fastify";
import { z } from "zod";

import { AlterBlogService } from "../../services/blogs/AlterBlogService";

class AlterBlogController {
    async handle(request: FastifyRequest) {
        const paramsSchema = z.object({
            id: z.string().uuid()
        })

        const { id } = paramsSchema.parse(request.params)

        const bodySchema = z.object({
            title: z.string(),
            content: z.string(),
            categoryId: z.string(),
            imageUrl: z.string(),
            isActive: z.boolean(),
        })

        const blogData = bodySchema.parse(request.body);

        const blogService = new AlterBlogService();
        const blog = await blogService.execute(id, blogData);

        return blog;
    }
}

export { AlterBlogController }