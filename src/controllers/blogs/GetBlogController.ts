import { FastifyRequest } from "fastify";
import { z } from "zod";
import { GetBlogService } from "../../services/blogs/GetBlogService";

class GetBlogController {
    async handle(request: FastifyRequest) {
        const paramsSchema = z.object({
            id: z.string().uuid()
        })

        const { id } = paramsSchema.parse(request.params)

        const blogService = new GetBlogService();
        const blogSelected = blogService.execute(id);

        return blogSelected;
    }
}

export { GetBlogController }