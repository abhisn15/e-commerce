import { Link } from "react-router-dom";
import "./Data";
import "./Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./Data";

const Home = () => {
  const products = productData.map((item) => (
    <div key={item.id}>
      <Link to={`/product/${item.id}`}>
        <Product
          name={item.name}
          url={item.imageurl}
          price={item.price}
          description={item.description}
        />
      </Link>
      <Link to="/">
        <div className="icon-favorite relative bottom-[324px] left-[282px] 2xl:bottom-[500px] 2xl:left-[450px]"></div>
      </Link>
    </div>
  ));

  return (
    <div className="md:container">
      <div className="content pb-2">
          <div className="two 2xl:w-[2050px] h-[963px] max-[1540px]:hidden">
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
              <div className="shop mt-6 mr-12">
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
      <div className="content2 relative left-10">
        <div className="corousel h-0 2xl:h-40 2xl:w-[2000px]">
          <Carousel
            responsive={responsive}
            itemClass="px-1"
            containerClass="carousel-container"
            dotListClass="carousel-dots"
            draggable
          >
            {products}
          </Carousel>
        </div>
      </div>
      <div className="h-96"></div>
    </div>
  );
};

export default Home;
