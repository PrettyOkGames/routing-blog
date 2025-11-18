import { Link } from "react-router-dom"

interface BlogPageProps {
    blogs: []
}

function BlogPage({blogs}: BlogPageProps) {
    return (
        <main>
            <h1>Blog Page</h1>
            <ul>
                {blogs && blogs.map(blog => (
                    <li key={blog.id}>
                        <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                        {/* <p>{blog.content.subtring(0, 100)}...</p> */}
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default BlogPage