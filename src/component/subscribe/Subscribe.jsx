import background from "../../assets/img/image-49.png";
import background_1 from "../../assets/img/image-50.png";
const Subscribe = () => {
  return (
    <>
      <div className="py-[75px]">
        <div
          style={{
            height: "675px",
            width: "100%",
            backgroundImage: `url(${background}`,
          }}
          className=""
        >
          <div
            style={{
              height: "675px",
              width: "100%",
              backgroundImage: `url(${background_1}`,
            }}
          >
            <div className="container mx-auto w-full h-full">
              <div className="flex flex-col items-center justify-center w-full h-full ">
                <h1 className="text-[46px] font-[700] text-white text-center">
                  Subscribe to our Newsletter
                </h1>
                <p className="text-[16px] font-[400] leading-7 pt-4 py-12 text-white text-center">
                  Dui ut ornare lectus sit amet. Urna nunc id cursus metus
                  aliquam
                  <br></br>
                  eleifend mi in.
                </p>

                <div className="relative w-[35%] ">
                  <input
                    type="email"
                    placeholder="Type your email address"
                    className=" py-[18px] px-[16px] bg-[#F9F9F9] w-full outline-none rounded-md"
                  />
                  <div className="absolute top-0 right-0 h-full p-2">
                    <div className="bg-secondary h-full flex  rounded-md px-4">
                      <button className="uppercase font-[700] text-base text-white ">
                        subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Subscribe;
