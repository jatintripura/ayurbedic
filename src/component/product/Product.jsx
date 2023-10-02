import ract_3 from "../../assets/Rectangle 457.png";
import ract_2 from "../../assets/Rectangle 458.png";
import ract_1 from "../../assets/ract-1.png";
const Product = () => {
  return (
    <div className="pt-[100px]">
      <div className="bg-[#f9f9f9]  ">
        <div className="container mx-auto grid  grid-cols-[3fr_4fr_4fr] grid-rows-[500px] gap-10 pb-20">
          <div className="pt-20 relative ">
            <div className="absolute top-0 left-1/2 p-6 -translate-x-1/2 -translate-y-1/2   rounded-full border-secondary border-2">
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
            </div>
            <img
              src={ract_2}
              className="w-full h-full rounded-md overflow-hidden object-cover"
              alt="image 1"
            />
          </div>
          <div className="-mt-10 rounded-md overflow-hidden">
            <img
              src={ract_3}
              className="w-full h-full object-cover"
              alt="image 1"
            />
          </div>
          <div className="-mt-32 rounded-md overflow-hidden ">
            <img
              src={ract_1}
              alt="image 1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
