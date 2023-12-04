import { GiUnlitBomb } from "react-icons/gi";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { MdPhone } from "react-icons/md";
import { LiaFaxSolid } from "react-icons/lia";

function Footer() {
    return (
        <footer id='footer' className="text-center text-white lg:text-left bg-[#12121299] border-t-2 border-[#ff3700] borderImgGrad backdrop-blur-xl px-[100px] sm:py-2.5">
            <div className="mx-auto py-10 text-center sm:text-left sm:w-full place-content-center">
                <div className="grid-1 grid gap-8 sm:grid-cols-3 lg:grid-cols-3">
                    <div className="s:flex s:flex-col s:justify-start grow-0">
                        <h2 className='sm:place-content-start relative text-xl uppercase tracking-wide flex place-content-center sm:pb-5 sm:mb-5'>
                            Mad
                            <span className="self-center">
                                <GiUnlitBomb size={20} className="rotate-90 fill-[#ff3700]" />
                            </span>
                            Gamers
                        </h2>
                        <p className="sm:w-52 w-50">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    <div className="sm:mx-auto">
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase sm:justify-start">
                            Useful links
                        </h6>
                        <p className="mb-2 sm:mb-4">
                            <a className="text-neutral-600 dark:text-neutral-200"
                            >Store</a>
                        </p>
                        <p className="mb-2 sm:mb-4">
                            <a className="text-neutral-600 dark:text-neutral-200"
                            >Settings</a>
                        </p>
                        <p className="mb-2 sm:mb-4">
                            <a className="text-neutral-600 dark:text-neutral-200"
                            >Orders</a>
                        </p>
                        <p>
                            <a className="text-neutral-600 dark:text-neutral-200"
                            >Help</a>
                        </p>
                    </div>
                    <div className="sm:mx-auto">
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase sm:justify-start">
                            Contact
                        </h6>
                        <p className="mb-2 sm:mb-4 flex items-center justify-center sm:justify-start">
                            <AiOutlineHome className="mr-3 h-5 w-5 fill-white" />
                            New York, NY 10012, US
                        </p>
                        <p className="mb-2 sm:mb-4 flex items-center justify-center sm:justify-start">
                            <AiOutlineMail className="mr-3 h-5 w-5 fill-white" />
                            info@example.com
                        </p>
                        <p className="mb-2 sm:mb-4 flex items-center justify-center sm:justify-start">
                            <MdPhone className="mr-3 h-5 w-5 fill-white" />
                            + 01 234 567 88
                        </p>
                        <p className="flex items-center justify-center sm:justify-start">
                            <LiaFaxSolid className="mr-3 h-5 w-5 fill-white" />
                            + 01 234 567 89
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-6 pt-2.5 pb-6 sm:py-6 sm:flex sm:justify-center">
                <span className="font-s font-extralight tracking-wider text-center sm:px-2">&copy; 2023 Copyright:</span>
                <p className="font-sm uppercase text-center">i.t</p>
            </div>
        </footer>
    );
}


export default Footer;
