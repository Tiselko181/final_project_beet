import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { GiUnlitBomb } from "react-icons/gi";

function Blog() {
    const [posts, setPosts] = useState([]);
    const [showMore, setShowMore] = useState(false);

    const fetchBlogData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching data:', error));
    }

    useEffect(() => {
        fetchBlogData();
    }, []);

    const truncatedPosts = posts.map(post => ({
        ...post,
    }));

    const displayedPosts = showMore ? truncatedPosts : truncatedPosts.slice(0, 20);

    return (
        <main className="related px-10 pt-20 lg:py-36 lg:px-40 z-[1000]">
            <h1 className='md:px-20 px-6 relative md:text-3xl uppercase tracking-wide titleEffect flex pb-11 mb-5 pt-2.5 z-50'>Mad<GiUnlitBomb size={15} className="rotate-90 self-center fill-[#ff3700]" />Blog</h1>
            <div className="lg:grid lg:grid-rows-5 lg:grid-cols-4 lg:gap-5">
                {
                    posts.map(post => {
                        return (
                            <Link key={post.id} to={`blog/${post.userId}`}>
                                <div className="p-5">
                                    <img src="../../public/assets/games/theDayBefore_bg.jpg" alt="blog_image" />
                                    <h4 className="text-white capitalize bg-[#12121299] border-t-2 border-[#ff3700] borderImgGrad backdrop-blur-xl sm:pt-2.5  flex flex-col">{post.title}</h4>
                                    <p className="text-zinc-600 text-xs s:text-base">{post.body}</p>
                                </div>
                            </Link >
                        )
                    })
                }
                {posts.length > displayedPosts && (
                    <button
                        className="sm:w-[138px] sm:mx-[15px] py-[5px] px-4 no-underline md:text-lg text-sm font-normal uppercase bg-[#ff3700] text-white duration-300 !cursor-pointer border-0 rounded hover:!text-[#ff3700] hover:!bg-white self-center"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? "Show Less" : "Show More"}
                    </button>
                )}
            </div>
        </main >
    );
}

export { Blog as Component };

export default Blog;
