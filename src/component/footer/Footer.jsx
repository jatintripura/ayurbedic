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
                  <div className=" relative w-[70%]">
                    <input
                      className="py-[18px] px-[16px] bg-[#F9F9F9] w-full"
                      type="email"
                      placeholder="Enter your mail."
                    />
                    <div className="absolute top-0 right-0 h-full p-2 grid place-items-center">
                      <div className="bg-secondary h-full flex  rounded-md">
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-arrow-narrow-right "
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="#fff"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                            <path d="M15 16l4 -4" />
                            <path d="M15 8l4 4" />
                          </svg>
                        </button>
                      </div>
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
                <ul className="flex gap-6">
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-facebook"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#6F7975"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-twitter"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#6F7975"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-instagram"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#6F7975"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M16.5 7.5l0 .01" />
                      </svg>
                    </a>
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
