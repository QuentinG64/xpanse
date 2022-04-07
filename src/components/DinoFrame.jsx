import PropTypes from "prop-types";

const DinoFrame = ({ text, image }) => {
  return (
    <div className="relative w-full">
      <img
        src={image}
        alt={text}
        className="object-cover object-top w-full h-screen cursor-pointer sm-"
      />
      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
        <p className="px-10 font-mono text-3xl font-bold border-4 border-solid py-36 border-slate-200 text-slate-200">
          {text}
        </p>
      </div>
    </div>
  );
};

DinoFrame.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default DinoFrame;
