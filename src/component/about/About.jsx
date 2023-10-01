import about from "../../assets/img/Rectangle 29.png";
import vector from "../../assets/img/Vector 2.png";
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
                <div className="bg-secondary  w-[60px] h-[60px] flex items-center justify-center text-center rounded-full cursor-pointer">
                  <img src={vector} alt="" />
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
