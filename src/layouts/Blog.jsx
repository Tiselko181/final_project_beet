import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Blog() {
    const [posts, setPosts] = useState([]);

    const fetchBlogData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching data:', error));
    }

    useEffect(() => {
        fetchBlogData();
    }, []);

    return (
        <main>
            <h1 className="">Mad Blog</h1>
            {
                posts.map(post => {
                    <Link key={post.id} to={`/post/${post.id}`}>
                        <div>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                        </div>
                    </Link>
                })
            }
        </main >
    );
}

export { Blog as Component };

export default Blog;
