import { ListBlogService } from "../../services/blogs/ListBlogsService"

class ListBlogsController {
    async handle() {
        const blogs = new ListBlogService().execute();

        return (await blogs).map(blog => {
            if(blog.content.length > 115) {
                return {
                    id: blog.id,
                    title: blog.title,
                    content: blog.content.substring(0, 115).concat("..."),
                    imageUrl: blog.imageUrl,
                    category: blog.category.title,
                    author: blog.author.name
                }
            } else {
                return {
                    id: blog.id,
                    title: blog.title,
                    content: blog.content,
                    imageUrl: blog.imageUrl,
                    category: blog.category.title,
                    author: blog.author.name
                }
            }
        })
    }
}

export { ListBlogsController }