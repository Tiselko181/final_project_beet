import PropTypes from "prop-types";
import { useLayoutEffect, useRef } from "react";

Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeIcon: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.node,
    toggleOpenSidebar: PropTypes.func.isRequired,
};

function Sidebar({ isOpen, closeIcon, className, type, children, toggleOpenSidebar }) {
    const element = useRef();
    const defaultClass = 'border-r py-4 px-6 z-50';
    const baseClasses = `fixed top-0 bottom-0 bg-[#201f1f54] backdrop-blur-[20px] transition-transform duration-200 w-full h-screen ${type === 'left' ? 'left-0' : 'right-0'}`;

    const closeClass = (type === 'left' ? 'translate-x-[-100%]' : 'translate-x-[100%]');
    const componentClasses = className ? className : defaultClass;
    const openClass = 'translate-x-0';

    function hiddenElement() {
        if (!isOpen) element.current.classList.add('hidden');
    }

    useLayoutEffect(
        () => {
            if (isOpen) {
                element.current.classList.remove('hidden');
                setTimeout(() => {
                    element.current.classList.remove(closeClass);
                    element.current.classList.add(openClass);
                }, 10);
            } else {
                element.current.classList.remove(openClass);
                element.current.classList.add(closeClass);
            }
        },
        [isOpen, openClass, closeClass]
    );

    return (
        <div
            onTransitionEnd={hiddenElement}
            ref={element}
            className={`${baseClasses} ${componentClasses} ${openClass}`}
        >
            <button
                onClick={() => { toggleOpenSidebar(); }}
                className="p-0 absolute right-3 ">
                {closeIcon}
            </button>

            {children}
        </div>
    );
}

export default Sidebar;
