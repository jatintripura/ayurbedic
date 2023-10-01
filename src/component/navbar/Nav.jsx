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
        <div>
          <h1 className="text-[#121212] text-[70px] font-bold py-7 ">
            World Best
            <span className="bg-[#376058] text-white px-2 text-center">
              Ayurvedic
            </span>
            <br></br>
            Product You Ever Think For!
          </h1>
          <p className="text-[20px] font-medium leading-7 text-[#6F7975]">
            We build best ayurvedic product in the world. Our Product is 100%
            made of natural ingradients.<br></br> All of the product made with
            great reserch and experiments.
          </p>
        </div>
      </div>
      {/* <div className=" relative  bg-[#F9F9F9] h-[471px] w-full py-[75px]">
        <div className=" container mx-auto relative">
          <div className=" absolute bottom-0 flex  items-end ">
            <div>
              <span className="bg-black">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-arrow-narrow-right "
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#56yeff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />

                    <path d="M15 16l4 -4" />
                    <path d="M15 8l4 4" />
                  </svg>
                </a>
              </span>
              <img src={photo_1} alt="" />
            </div>
            <div>
              <img src={photo_2} alt="" />
            </div>
            <div>
              <img src={photo_3} alt="" />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Nav;
