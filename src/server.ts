import fastify from "fastify";
import cors from '@fastify/cors';

import { blogRoutes } from "./routes/blogs/blog";

const app = fastify();

app.register(blogRoutes)

app.register(cors, {
    origin: true
})

app.listen({
    port: 3333
}).then(() => {
    console.log('🎉 HTTP server is runing on http://localhost:3333');
})