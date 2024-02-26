import { FastifyInstance } from "fastify";

import { ListBlogsController } from "../../controllers/blogs/ListBlogsController";
import { CreateBlogController } from "../../controllers/blogs/CreateBlogController";
import { GetBlogController } from "../../controllers/blogs/GetBlogController";
import { AlterBlogController } from "../../controllers/blogs/AlterBlogController";
import { DeleteBlogController } from "../../controllers/blogs/DeleteBlogController";

export async function blogRoutes(app: FastifyInstance) {
    app.get('/blogs', new ListBlogsController().handle);
    app.get('/blog/:id', new GetBlogController().handle);
    app.post('/blog/create', new CreateBlogController().handle);
    app.put('/blog/:id', new AlterBlogController().handle);
    app.delete('/blog/:id', new DeleteBlogController().handle);
}