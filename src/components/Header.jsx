import Btn from './Btn';
import Menu from './Menu';
import Search from './Search';
import { LiaBombSolid } from "react-icons/lia";
import { PiSignIn } from "react-icons/pi";
import PropTypes from "prop-types";

Header.propTypes = {
    scroll: PropTypes.number,
};

function Header({ scroll }) {

    return (
        <header className={`header ${scroll > 100 ? 'bgScrolled' : undefined}`}>
            <a href="/" className="font-['Racing_Sans_One'] text-[35px] text-white tracking-[2px] font-extrabold no-underline uppercase flex">mad<LiaBombSolid className='stroke-0 fill-[#ff3700] self-end' />gamers</a>
            <Menu />
            <Search />
            <Btn icon={<PiSignIn className="fill-white group-hover:fill-[#ff3700]" />} name='Sign In' className="group-hover:!bg-white group-hover:!text-[#ff3700]" />
        </header>
    );
}

export default Header;
