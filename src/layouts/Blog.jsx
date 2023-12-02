import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Blog() {
    const [posts, setPosts] = useState([]);

    const fetchBlogData = () => {
<<<<<<< HEAD
        fetch('https://jsonplaceholder.typicode.com/todos/1')
=======
        fetch('https://jsonplaceholder.typicode.com/posts')
>>>>>>> eae3fb0 (roll back and fixed genres, search, gameList)
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching data:', error));
    }

    useEffect(() => {
        fetchBlogData();
    }, []);

    return (
<<<<<<< HEAD
        <main>
            <h1 className="">Mad Blog</h1>
            {
                posts.map(post => {
                    <Link key={post.id} to={`/post/${post.id}`}>
                        <div>
=======
        <main className="related z-[1000]">
            <h1 > Mad Blog</h1 >
            {
                posts.map(post => {
                    <Link key={post.id} to={`/post/${post.id}`}>
                        <div >
>>>>>>> eae3fb0 (roll back and fixed genres, search, gameList)
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                        </div>
                    </Link>
                })
            }
<<<<<<< HEAD
        </main >
=======
        </main>
>>>>>>> eae3fb0 (roll back and fixed genres, search, gameList)
    );
}

export { Blog as Component };

export default Blog;
