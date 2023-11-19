import Btn from './Btn';
import Menu from './Menu';
import Search from './Search';
import { LiaBombSolid } from "react-icons/lia";
import { PiSignIn } from "react-icons/pi";


function Header() {

    return (
        <header className="py-5 px-7 flex fixed top-0 left-0 w-full justify-between items-center py-30px px-100px duration-500 z-[1000]">
            <a href="/" className="font-['Racing_Sans_One'] text-[35px] text-white tracking-[2px] font-extrabold no-underline uppercase flex">mad<LiaBombSolid className='stroke-0 fill-[#ff3700] self-end' />gamers</a>
            <Menu />
            <Search />
            <Btn icon={<PiSignIn />} name='Sign In' />
        </header>
    );
}

export default Header;
