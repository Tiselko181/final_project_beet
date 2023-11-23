import PropTypes from "prop-types";

Btn.propTypes = {
    icon: PropTypes.object,
    name: PropTypes.string,
    color: PropTypes.string,
    bgColor: PropTypes.string,
};

function Btn({ icon, name, color = '#fff', bgColor = '#ff3700' }) {
    return (
        <a href="#" style={{ color: color, background: bgColor }} className="group relative inline-flex items-center gap-2.5 mr-[15px] py-[5px] px-4 no-underline text-lg font-normal tracking-[1px] uppercase duration-300 !cursor-pointer border-0 hover:!text-[#ff3700] hover:!bg-white">
            {icon} {name}
        </a>
    );
}

export default Btn;
