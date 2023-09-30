const Button = ({ title }) => {
  return (
    <>
      <div>
        <button className="bg-[#FFA27C] p-5 rounded-md text-white font-medium text-base">
          {title}
        </button>
      </div>
    </>
  );
};
export default Button;
