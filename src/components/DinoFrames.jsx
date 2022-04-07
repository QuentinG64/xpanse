import PropTypes from "prop-types";
import DinoFrame from "./DinoFrame";

const DinoFrames = ({ categories }) => {
  return (
    <>
      {categories.map((categorie, index) => (
        <DinoFrame key={index} {...categorie} />
      ))}
    </>
  );
};

DinoFrames.propTypes = {
  categories: PropTypes.arrayOf([
    PropTypes.shape({
      text: PropTypes.string,
      image: PropTypes.string,
    }),
  ]).isRequired,
};

export default DinoFrames;
