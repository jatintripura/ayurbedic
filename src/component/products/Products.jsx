import svg from "../../assets/Rectangle 462.png";
import star from "../../assets/img/Star 1.png";
import image_3 from "../../assets/img/image 42 (1).png";
import image_4 from "../../assets/img/image 42 (2).png";
import image_5 from "../../assets/img/image 42 (3).png";
import image_6 from "../../assets/img/image 42 (4).png";
import image_1 from "../../assets/img/image 42.png";
import image_2 from "../../assets/img/image 43.png";
const Products = () => {
  return (
    <>
      <div>
        <div className="container mx-auto py-[75px]">
          <div>
            <h1 className="text-[64px] font-bold text-[#2A2A2A]">
              Our Products
            </h1>
            <div className="flex items-center justify-between">
              <p className="text-base text-[#5A5850] leading-7">
                We build best ayurvedic product in the world. Our Product is
                100% made of natural<br></br> ingradients. All of the product
                made with great reserch and experiments.
              </p>
              <div className="text-[18px] font-bold text-[#5A5850] border-b-2 border-[#5A5850] tracking-widest	 uppercase">
                <a href="#">View All Collections</a>
              </div>
            </div>
            <div>
              <ul className=" flex gap-12 text-[#5A5850] text-[18px] py-12">
                <div className="relative">
                  <span className="w-[170px] h-[12px] absolute z-10 bottom-0  -left-1/3 ">
                    {<img src={svg} alt="svg" />}
                  </span>
                  <p className="relative top-0 left-0 uppercase z-20">
                    <a href="#">best seller</a>
                  </p>
                </div>
                <li>
                  <a href="#">New Arrival</a>
                </li>
                <li>
                  <a href="#">Seasons</a>
                </li>
                <li>
                  <a href="#">Winter</a>
                </li>
                <li>
                  <a href="#">Popular</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
            {/* <div className="flex items-center justify-between gap-[30px]"> */}
            <div className="flex items-center justify-center">
              <div className="bg-[#f9f9f9] p-[22px] ">
                <img
                  src={image_1}
                  alt="image 1"
                  className="w-full h-full object-cover"
                />
                <h1 className="font-bold text-[24px] pt-[22px] pb-[12px] text-[#2A2A2A]">
                  Nesti Ayurvedic Facewash
                </h1>
                <p className="text-[14px] text-[#5A5850] leading-7 pb-[22px]">
                  Dui ut ornare lectus sit amet. Urna nunc id cursus<br></br>
                  metus eleifend mi in.
                </p>
                <div className="flex items-center  justify-between">
                  <div>
                    <h1 className="text-[30px] font-bold text-[#2A2A2A]">
                      $29.00
                    </h1>
                  </div>
                  <div className="flex gap-1 items-center justify-center ">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <p>(19)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-[#F9F9F9] p-[22px]">
                <img src={image_2} alt="image 1" />
                <h1 className="font-bold text-[24px] pt-[22px] pb-[12px] text-[#2A2A2A]">
                  Tanda Ayurvedic Bodygel
                </h1>
                <p className="text-[14px] text-[#5A5850] leading-7 pb-[22px]">
                  Dui ut ornare lectus sit amet. Urna nunc id cursus<br></br>
                  metus eleifend mi in.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-[30px] font-bold text-[#2A2A2A]">
                      $29.00
                    </h1>
                  </div>
                  <div className="flex gap-1 items-center justify-center ">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <p>(19)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-[#F9F9F9] p-[22px]">
                <img src={image_3} alt="image 1" />
                <h1 className="font-bold text-[24px] pt-[22px] pb-[12px] text-[#2A2A2A]">
                  Pata Ayurvedic Foundation
                </h1>
                <p className="text-[14px] text-[#5A5850] leading-7 pb-[22px]">
                  Dui ut ornare lectus sit amet. Urna nunc id cursus<br></br>
                  metus eleifend mi in.
                </p>
                <div className="flex items-center justify-between ">
                  <div>
                    <h1 className="text-[30px] font-bold text-[#2A2A2A]">
                      $29.00
                    </h1>
                  </div>
                  <div className="flex gap-1 items-center justify-center ">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <p>(19)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-[#F9F9F9] p-[22px]">
                <img src={image_4} alt="image 1" />
                <h1 className="font-bold text-[24px] pt-[22px] pb-[12px] text-[#2A2A2A]">
                  Jakas Ayurvedic Lotion
                </h1>
                <p className="text-[14px] text-[#5A5850] leading-7 pb-[22px]">
                  Dui ut ornare lectus sit amet. Urna nunc id cursus<br></br>
                  metus eleifend mi in.
                </p>
                <div className="flex items-center  justify-between">
                  <div>
                    <h1 className="text-[30px] font-bold text-[#2A2A2A]">
                      $29.00
                    </h1>
                  </div>
                  <div className="flex gap-1 items-center justify-center ">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <p>(19)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="bg-[#F9F9F9] p-[22px]">
                <img src={image_5} alt="image 1" />
                <h1 className="font-bold text-[24px] pt-[22px] pb-[12px] text-[#2A2A2A]">
                  Tanda Ayurvedic Bodygel
                </h1>
                <p className="text-[14px] text-[#5A5850] leading-7 pb-[22px]">
                  Dui ut ornare lectus sit amet. Urna nunc id cursus<br></br>
                  metus eleifend mi in.
                </p>
                <div className="flex items-center  justify-between">
                  <div>
                    <h1 className="text-[30px] font-bold text-[#2A2A2A]">
                      $29.00
                    </h1>
                  </div>
                  <div className="flex gap-1 items-center justify-center ">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <p>(19)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-[#F9F9F9] p-[22px]">
                <img src={image_6} alt="image 1" />
                <h1 className="font-bold text-[24px] pt-[22px] pb-[12px] text-[#2A2A2A]">
                  Pata Ayurvedic Foundation
                </h1>
                <p className="text-[14px] text-[#5A5850] leading-7 pb-[22px]">
                  Dui ut ornare lectus sit amet. Urna nunc id cursus<br></br>
                  metus eleifend mi in.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-[30px] font-bold text-[#2A2A2A]">
                      $29.00
                    </h1>
                  </div>
                  <div className="flex gap-1 items-center justify-center ">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <p>(19)</p>
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
export default Products;
