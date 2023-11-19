import titleImg from '../assets/images/destiny2_title.png';
import Btn from './Btn';
import { CiBookmark } from "react-icons/ci";
import { IoAddSharp } from "react-icons/io5";

const contentSpan = "px-2.5 py-0 border-r border-[#ffffff99] last-of-type:border-r-0 first-of-type:border-l-0";

function HeroBlockContent() {
    return (
        <>
            <div className='relative invisible opacity-0 duration-1000 z-[900] scale-0 content-active'>
                <img src={titleImg} alt="game_title" className='max-w-[250px] mb-5' />
                <h4 className='text-[#ffffff99] font-normal text-3xl'>
                    <span className={contentSpan}>Year</span>
                    <span className={contentSpan}><i className="text-white py-0 px-2 rounded-sm inline-block bg-[#ff3700]">waiting</i></span>
                    <span className={contentSpan}>genre</span>
                </h4>
                <p className='text-base font-normal text-white mx-0 mt-5 mb-5'>description</p>
                <Btn icon={<CiBookmark className='fill-[#ff3700] group-hover:fill-white' />} name='Book' color='#ff3700' bgColor='#fff' />
                <Btn icon={<IoAddSharp className='fill-white group-hover:fill-[#ff3700]' />} name='My List' />
            </div>
        </>
    );
}

export default HeroBlockContent;
