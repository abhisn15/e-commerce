import { Link } from "react-router-dom";
import "./Data";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productData, productPopular } from "./Data";

const Home = () => {
  // const products = productData.map((item) => (
  //   <div className="relative flex flex-col items-end" key={item.id}>
  //     <Link to={`/product/${item.id}`}>
  //       <img
  //         className="product--image grid gap-12"
  //         src={item.imageurl}
  //         alt="product image"
  //       />
  //     </Link>
  //     <Link to="/" className="">
  //       <div className="icon-favorite relative bottom-[270px] mr-2 mt-3 2xl:bottom-[438px]"></div>
  //     </Link>
  //   </div>
  // ));

  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className="section">
      <div className="content pb-2">
        <div className="two 2xl:w-[1900px] h-[900px] max-[1540px]:hidden">
          <div className="relative flex flex-col items-center top-96 w-1/3">
            <h1 className="intro font-medium text-slate-950 text-2xl">
              This Is Cloufee T
            </h1>
            <p className="mx-8 mt-2 text-center text-md">
              Our House ambassadors make Cloufee T their own in our latest
              campaign.
            </p>
            <div className="shop2 mt-6 mr-12">
              <Link
                to="/desain-perhiasan"
                className="bg-white px-10 pt-3 pb-4 border border-slate-900"
              >
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
        <div className="one md:w-[1350px] h-[653px] 2xl:hidden">
          <div className="relative flex flex-col items-center top-60 w-1/3">
            <h1 className="intro font-medium text-slate-950 text-2xl">
              This Is Cloufee T
            </h1>
            <p className="mx-8 mt-2 text-center text-md">
              Our House ambassadors make Cloufee T their own in our latest
              campaign.
            </p>
            <div className="shop ml-[40px] mt-6 mr-12">
              <Link
                to="/desain-perhiasan"
                className="bg-white px-10 pt-3 pb-4 border border-slate-900"
              >
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="content2 2xl:left-[80px] mt-10">
        {/* <div className="carousel h-0 2xl:h-40 2xl:w-[1756px]">
          <Carousel
            responsive={responsive}
            itemClass="px-2"
            containerClass="carousel-container"
            dotListClass="carousel-dots"
            draggable
          >
            {products}
          </Carousel>
        </div> */}
        <Slider className="mb-10" {...settings}>
          {productData.map((items) => (
            <div key={items.id} className="p-4">
              <Link to="/">
                <img src={items.imageurl}></img>
              </Link>
            </div>
          ))}
        </Slider>
        <div className="relative z-0 grid place-content-center mb-20 2xl:hidden">
          <Link
            to="/desa in-perhiasan"
            className="shopn mr-9 bg-white px-4 py-3 border border-slate-900"
          >
            <span className="font-medium text-black">Shop Now</span>
          </Link>
        </div>
        <div className="relative z-0 grid place-content-center mb-20 max-[1540px]:hidden">
          <Link
            to="/desain-perhiasan"
            className="shopn2 mr-44 bg-white px-4 py-3 border border-slate-900 2xl:ml-[400px]"
          >
            <span className="font-medium text-black">Shop Now</span>
          </Link>
        </div>
        <div className="card-popular relative flex justify-center z-0 md:gap-24">
          {productPopular.map((item) => (
            <>
              <div className="mb-20">
                <Link to="/desain-perhiasan" className="">
                  <img className="md:w-[500px]" src={item.imageurl}></img>
                </Link>
                <span className="flex justify-center mt-4 md:text-2xl text-black font-semibold">
                  {item.title}
                </span>
                <Link
                  to={item.shop}
                  className="shop-now flex justify-center ml-0 mt-2"
                >
                  <span className=" text-black font-normal">{item.text}</span>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
