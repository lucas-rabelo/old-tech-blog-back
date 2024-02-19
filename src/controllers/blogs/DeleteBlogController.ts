import { FastifyRequest } from "fastify";
import { z } from "zod";

import { DeleteBlogService } from "../../services/blogs/DeleteBlogService";

class DeleteBlogController {
    async handle(request: FastifyRequest) {
        const paramsSchema = z.object({
            id: z.string().uuid()
        })

        const { id } = paramsSchema.parse(request.params)

        new DeleteBlogService().execute(id);

        return;
    }
}

export { DeleteBlogController }