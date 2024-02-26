import { FastifyRequest } from "fastify";
import { z } from "zod";
import { CreateBlogService } from "../../services/blogs/CreateBlogService";

class CreateBlogController {
    async handle(request: FastifyRequest) {
        const bodySchema = z.object({
            title: z.string(),
            content: z.string(),
            categoryId: z.string(),
            imageUrl: z.string(),
            isActive: z.boolean(),
        })

        const blogData = bodySchema.parse(request.body);

        const blogService = new CreateBlogService();
        const blog = await blogService.execute(blogData);

        return blog;
    }
}

export { CreateBlogController };