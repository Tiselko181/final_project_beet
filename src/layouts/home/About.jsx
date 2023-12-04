import { useState } from "react";
import { GiUnlitBomb } from "react-icons/gi";

function About() {
    const [showMore, setShowMore] = useState(false);
    const text = `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque voluptas odio quaerat est tenetur molestiae nam accusantium cupiditate ad quasi? Quos aperiam incidunt reprehenderit dolor voluptate autem minima odit voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laboriosam omnis quo id, perspiciatis delectus quia ut aperiam, voluptate totam ab placeat. Asperiores saepe tempore, eum corporis veniam incidunt officia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iure voluptate dolore autem officiis illum eos, magnam fugiat, beatae distinctio nisi cumque vel at, id rerum ex earum natus eum.
       Exercitationem velit ipsa harum sunt explicabo maxime ea, labore quidem incidunt omnis veritatis iusto eum provident? Nam ipsam ullam optio dolores aspernatur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit aspernatur ducimus neque iste, quasi recusandae vitae quia expedita omnis at corporis laudantium et eius sapiente. Laborum dolorum exercitationem esse fugiat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem dolores officiis eaque ex rerum quisquam recusandae magnam odio tempora ipsum. Delectus aliquam ad vel eum, facere ut. Expedita, magnam nostrum?`;


    return (
        <section className='lmd:py-16 sm:py-10 py-5 px-10 w-full'>
            <h2 className='md:px-20 px-6 relative md:text-2xl uppercase tracking-wide titleEffect flex pb-11 mb-5 pt-2.5 z-50'>About Mad<GiUnlitBomb size={15} className="rotate-90 self-center fill-[#ff3700]" />Gamers</h2>
            <div className="sm:px-20 xs:px-10 flex flex-col gap-5">
                <p className="text-sm sm:text-base">{showMore ? text : `${text.substring(0, 400)}`}</p>
                <button className="sm:w-[138px] sm:mx-[15px] py-[5px] px-4 no-underline md:text-lg text-sm font-normal uppercase bg-[#ff3700] text-white duration-300 !cursor-pointer border-0 rounded hover:!text-[#ff3700] hover:!bg-white self-center" onClick={() => setShowMore(!showMore)}>
                    {showMore ? "Show less" : "Show More"}
                </button>
            </div>
        </section>
    );
}

export default About;
