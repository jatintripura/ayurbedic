import svg from "../../assets/img/kk.png";
import svg_1 from "../../assets/img/mm.png";
import star from "../../assets/img/Star 1.png";
const Customer = () => {
  return (
    <>
      <div className="container mx-auto py-[75px]">
        <div>
          <div>
            <h1 className="text-[64px] text-[#121212] font-[700] leading-[74px]">
              Customers Feedbacks
            </h1>
            <div className="flex items-end justify-between pt-[18px] pb-[70px]">
              <p className="text-base text-[#6F7975] font-[400] leading-7">
                We build best ayurvedic product in the world. Our Product is
                100% made of natural ingradients.<br></br> All of the product
                made with great reserch and experiments.
              </p>
              <p className="text-[18px] text-[#FFA27C] font-[700] leading-[30px]">
                <a href="#">View All Products</a>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-20">
            <div className="w-[50%] h-[350px] bg-[#376058] py-[52px] px-10 rounded-md">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-[34px] font-[700] leading-[31px] text-white">
                      Callum Bolton
                    </h1>
                    <p className="text-[16px] font-[400] pt-2 leading-[28px] text-[#7BA59D]">
                      UI/UX Designer{" "}
                    </p>
                  </div>
                  <div>
                    <img src={svg} alt="svg" />
                  </div>
                </div>
                <div>
                  <p className=" text-[18px] font-[500] leading-[28px] text-white pt-9 pb-5">
                    Nulla pulvinar felis ipsum. Nulla facilisi. Duis placerat
                    erd
                    <br></br>
                    urna Lorem ipsum dolor sit amet con adipiscing elit. Proin
                    <br></br> gravida orc pulvinar aliquet.
                  </p>
                </div>
                <div className="flex gap-2">
                  <img src={star} alt="svg" />
                  <img src={star} alt="svg" />
                  <img src={star} alt="svg" />
                  <img src={star} alt="svg" />
                  <img src={star} alt="svg" />
                </div>
              </div>
            </div>
            <div className="w-[50%] h-[350px] bg-[#503760] py-[52px] px-10 rounded-md ">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-[34px] font-[700] leading-[31px] text-white">
                      Callum Bolton
                    </h1>
                    <p className="text-[16px] font-[400] pt-2 leading-[28px] text-[#9882A7]">
                      UI/UX Designer
                    </p>
                  </div>
                  <div>
                    <img src={svg_1} alt="svg" />
                  </div>
                </div>
                <div>
                  <p className=" text-[18px] font-[500] leading-[28px] text-[#fff] pt-9 pb-5">
                    Nulla pulvinar felis ipsum. Nulla facilisi. Duis placerat
                    erd
                    <br></br>
                    urna Lorem ipsum dolor sit amet con adipiscing elit. Proin
                    <br></br> gravida orc pulvinar aliquet.
                  </p>
                </div>
                <div className="flex gap-2">
                  <img src={star} alt="svg" />
                  <img src={star} alt="svg" />
                  <img src={star} alt="svg" />
                  <img src={star} alt="svg" />
                  <img src={star} alt="svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Customer;
