import Button from "../button/Button";
import Rat from "../rat/Rat";
const Nav = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-[50px]">
          <Rat></Rat>
          <div>
            <ul className="flex items-center gap-10 text-[18px] text-[#909896]">
              <li className="text-[#376058]">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <Button title={"Get in touch"}></Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Nav;
