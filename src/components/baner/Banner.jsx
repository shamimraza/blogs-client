import nav1 from "../../assets/holiday-1569608_640.jpg";
import nav2 from "../../assets/black-forest-3164919_640.jpg";
import nav3 from "../../assets/lake-3178889_640.jpg";
import nav4 from "../../assets/nature-2032666_1280.jpg";

const Banner = () => {
  return (
    <div className="">
      <div className="carousel w-full h-[600px]">
        <div id="item1" className="carousel-item w-full">
          <img src={nav1} className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={nav2} className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={nav3} className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={nav4} className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
