import ract_3 from "../../assets/Rectangle 457.png";
import ract_2 from "../../assets/Rectangle 458.png";
import ract_1 from "../../assets/ract-1.png";
const Product = () => {
  return (
    <>
      <div className="py-75px">
        <div className="bg-[#F9F9F9] w-full h-[471px]  ">
          <div className="container mx-auto">
            <div className=" flex items-end justify-between ">
              <div className="flex flex-col gap-9 items-center justify-center">
                <p className="p-6  rounded-full border-secondary border-2">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-player-play-filled  stroke-[#fff] text-secondary"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                        strokeWidth="0"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </p>
                <img src={ract_2} alt="image 1" />
              </div>
              <div>
                <img src={ract_3} alt="image 1" />
              </div>
              <div>
                <img src={ract_1} alt="image 1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
