import about from "../../assets/img/Rectangle 29.png";
const About = () => {
  return (
    <>
      <div className="py-[75px]">
        <div className="container mx-auto ">
          <div className="relative ">
            <img className="w-full" src={about} alt="about sectiion image" />
            <div className="absolute top-1/2 left-0 -translate-y-1/2 ">
              <div className="flex items-center justify-between w-[720px] h-[250px] p-12 bg-white rounded-[12px]">
                <div>
                  <h1 className="text-[64px] font-bold test-[#121212]">
                    About Us
                  </h1>
                  <p className="text-[#6F7975] leading-[28px]">
                    Dui ut ornare lectus sit amet. Urna nunc id cursus<br></br>{" "}
                    metus aliquam eleifend mi in.
                  </p>
                </div>
                <div className="p-2 border-2 border-secondary rounded-full">
                  <p className="p-6  rounded-full border-secondary border-2 bg-secondary">
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-player-play-filled  stroke-[#fff] text-white"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
