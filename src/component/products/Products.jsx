import svg from "../../assets/img/Rectangle 462.png";
const Products = () => {
  return (
    <>
      <div>
        <div className="container mx-auto">
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
              <ul className="flex gap-12 text-[#5A5850] text-[18px] py-12">
                <li className="uppercase">
                  <a href="#">
                    best seller{" "}
                    <span>
                      <img src={svg} alt="" />
                    </span>
                  </a>
                </li>
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
          <div></div>
        </div>
      </div>
    </>
  );
};
export default Products;
