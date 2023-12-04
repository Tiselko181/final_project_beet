import Menu from './Menu';
import SearchForm from './SearchForm';
import { LiaBombSolid } from "react-icons/lia";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { useMediaQuery } from "@mui/material";
import { FiMenu, FiX } from "react-icons/fi";
import useSidebar from "../hooks/useSideBar";
import Sidebar from './SideBar';

Header.propTypes = {
    scroll: PropTypes.number,
};

function Header({ scroll }) {

    const matches = useMediaQuery('(min-width:1280px)');
    const [isOpenSidebar, toggleOpenSidebar] = useSidebar();


    return (
        <header className={`header ${scroll > 100 ? 'heroUnderline' : undefined}`}>
            <a href="/" className="font-['Racing_Sans_One'] sm:text-[35px] text-white text-2xl tracking-[2px] sm:fonot-extrabold no-underline uppercase flex">mad<LiaBombSolid className='stroke-0 fill-[#ff3700] self-end' />gamers</a>
            {
                matches ?
                    null :
                    <button
                        onClick={toggleOpenSidebar}
                        className='absolute right-[5%] pt-1'
                    >
                        <FiMenu size={26} />
                    </button>
            }
            {
                matches ?
                    <Menu /> :
                    <Sidebar isOpen={isOpenSidebar}
                        closeIcon={< FiX size={26} />}
                        className={'border-r py-4 px-6 bg-[#201f1f54] z-50 w-[175px]'}
                        type='left'
                        toggleOpenSidebar={toggleOpenSidebar}
                    >
                        <Menu />
                        <Link to={'/favourites'}>
                            <button className="flex p-[2px] mt-10 lg:mt-0 group-hover:!bg-white rounded py-2 px-5 place-content-center uppercase bg-[#ff3700] group-hover:!text-[#ff3700] text-white">
                                {<MdOutlineBookmarkAdd size={20} className="fill-white group-hover:fill-[#ff3700]" />}
                                <span className="hidden lg:inline-block">
                                    My List
                                </span>
                            </button>
                        </Link>
                    </Sidebar>
            }
            <SearchForm />
            <Link to={'/favourites'}>
                <button className="hidden lg:flex gap-2 p-[2px] mt-10 lg:mt-0 lg:ml-0 ml-[42%] lmd:ml-[50%] group-hover:!bg-white rounded py-2 px-5 place-content-center uppercase bg-[#ff3700] group-hover:!text-[#ff3700] text-white">
                    {<MdOutlineBookmarkAdd size={20} className="fill-white group-hover:fill-[#ff3700]" />}
                    <span className="hidden lg:inline-block">
                        My List
                    </span>
                </button>
            </Link>
        </header>
    );
}

export default Header;
