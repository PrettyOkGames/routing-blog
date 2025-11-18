import { Link, useParams } from "react-router-dom"

interface BlogDetialsPageProps {
    blogs: []
}

function BlogDetailsPage({ blogs }) {
    const { slug } = useParams()

    const blog = blogs.find((blog) => blog.slug === slug)

    if (!blog) {
        return (
            <>
                <h1>Blog not Found!: {slug}</h1>
                <button><Link to='/blog'>Back to Blogs</Link></button>
            </>
        )
    }

    return (
        <div className="text-white">
            <div className="mb-[40px]">
                <h1 className="text-[50px] font-medium">{blog.title}</h1>
            </div>
            <div className="text-left px-[100px] mb-[40px]">
                <p><b>Author: {blog.author}</b></p>
                <p>{blog.datePosted}</p>
            </div>
            <div className="text-left px-[100px]">
                <p>{blog.content}</p>
            </div>
        </div>
    )
}

export default BlogDetailsPage