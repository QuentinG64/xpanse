const Button = ({ text }) => {
  return (
    <div className="bg-primary-1 h-10 w-52 rounded-md text-center flex justify-center items-center text-lg font-title mt-10 ml-6">
      <h3 className="font-main-2">{text}</h3>
    </div>
  );
};

export default Button;
