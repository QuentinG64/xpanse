import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <div className="bg-primary-1 h-10 w-52 rounded-md text-center flex justify-center items-center text-lg font-title cursor-pointer hover:text-main-1 transition-all duration-450">
      <h3 className="font-main-2">{text}</h3>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
