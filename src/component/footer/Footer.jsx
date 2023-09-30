import Button from "../button/Button";
import Footer_Heading from "../footer-heading/Footer_heading";
import Rat from "../rat/Rat";
const Footer = () => {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 py-12 border-b-2 border-[#E6E8EC]">
            <div className="col-star-1 col-span-3">
              <Rat></Rat>
            </div>
            <div className="col-star-4 col-span-3">
              <Footer_Heading footer_heading={"company"}></Footer_Heading>
              <ul className="text-[#6F7975] grid gap-4">
                <li>
                  <a href="#">Lotions</a>
                </li>
                <li>
                  <a href="#">Facewash</a>
                </li>
                <li>
                  <a href="#">Bodygels</a>
                </li>
                <li>
                  <a href="#">Cosmetics</a>
                </li>
                <li>
                  <a href="#">Nesti Products</a>
                </li>
              </ul>
            </div>
            <div className="   col-star-7 col-span-3 ">
              <Footer_Heading footer_heading={"contact"}></Footer_Heading>
              <ul className="text-[#6F7975] grid gap-4">
                <li>103/2 Seddon Park,</li>
                <li>Auckland, New Zealand</li>
                <li>(000) 123 456 789</li>
              </ul>
            </div>
            <div className="col-star-10 col-span-3">
              <Footer_Heading footer_heading={"newsletter"}></Footer_Heading>
              <p className="text-[#6F7975] pb-4 leading-7">
                Subscribe our newsletter to get more free,<br></br> design
                course and resource.
              </p>
              <div>
                <div>
                  <div>
                    <input
                      className="py-[18px] px-[16px] bg-[#F9F9F9]"
                      type="email"
                      placeholder="Enter your mail."
                    />
                    <div className="absolute top-0 right-0">
                      <Button></Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between py-[30px]">
            <p className=" text-[14px] text-[#6F7975]">
              Copyright © 2022 webdesign.gdn All rights reserved
            </p>
            <div>
              <div>
                <ul>
                  <li>
                    <a href="#"></a>
                  </li>
                  <li>
                    <a href="#"></a>
                  </li>
                  <li>
                    <a href="#"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
