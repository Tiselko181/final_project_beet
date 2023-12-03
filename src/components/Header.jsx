import Btn from './btns/Btn';
import Menu from './Menu';
import SearchForm from './SearchForm';
import { LiaBombSolid } from "react-icons/lia";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

Header.propTypes = {
    scroll: PropTypes.number,
};

function Header({ scroll }) {

    return (
        <header className={`header ${scroll > 100 ? 'heroUnderline' : undefined}`}>
            <a href="/" className="font-['Racing_Sans_One'] text-[35px] text-white tracking-[2px] fonot-extrabold no-underline uppercase flex">mad<LiaBombSolid className='stroke-0 fill-[#ff3700] self-end' />gamers</a>
            <Menu />
            <SearchForm />
            <Link to={'../layouts/MyList.jsx'}>
                <Btn icon={<MdOutlineBookmarkAdd className="fill-white group-hover:fill-[#ff3700]" />} name='My List' className="group-hover:!bg-white group-hover:!text-[#ff3700]" />
            </Link>
        </header>
    );
}

export default Header;
