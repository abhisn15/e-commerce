import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Learnmore, productData, productPopular, shopCategory } from "./Data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import cloufee from "../../assets/cloufee.png";

let slidesToShow = 4;
const PreviousBtn = (props) => {
    const { className, onClick, currentSlide } = props; //eslint-disable-line
    return ( <
        >
        {
            currentSlide !== 0 && ( <
                div className = { className }
                onClick = { onClick } >
                <
                div >
                <
                ArrowBackIosIcon className = "ml-[40px] text-black" / >
                <
                /div> < /
                div >
            )
        } <
        />
    );
};

const NextBtn = (props) => {
    const { className, onClick, slideCount, currentSlide } = props; //eslint-disable-line
    return ( <
        >
        {
            currentSlide !== slideCount - slidesToShow && ( <
                div className = { className }
                onClick = { onClick } >
                <
                ArrowForwardIosIcon className = "!ml-20 text-black" / >
                <
                /div>
            )
        } <
        />
    );
};

const carouselProperties = {
    nextArrow: < NextBtn / > ,
    prevArrow: < PreviousBtn / > ,
    slidesToShow: slidesToShow,
    slidesToScroll: 4,
    infinite: false,
    // slidesToScroll={3}
    responsive: [{
            breakpoint: 426,
            settings: {
                slidesToShow: 2,
                centerMode: false,
            },
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                centerMode: false,
            },
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,
                centerMode: false,
                slidesToScroll: 4,
            },
        },
    ],
};

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
    const [width, setWidth] = useState(window.innerWidth);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (width <= 426) {
        slidesToShow = 2;
    } else if (width > 426 && width <= 769) {
        slidesToShow = 3;
    } else if (width > 769 && width <= 1025) {
        slidesToShow = 4;
    } else {
        slidesToShow = 4;
    }

    // useEffect(() => {
    //   const hdr = gsap.timeline({ defaults: { duration: 2 } });
    //   const ptxt = gsap.timeline({ defaults: { duration: 2 } });
    //   const btn = gsap.timeline({ defaults: { duration: 2 } });

    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".slick-slider",
    //       markers: false,
    //       start: "top 100%",
    //       end: "top 30%",
    //       scrub: 1,
    //     },
    //   });

    //   const shpn = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".shopn,.shopn2",
    //       markers: false,
    //       start: "top 80%",
    //       end: "top 30%",
    //       scrub: 1,
    //     },
    //   });

    //   const ts = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".card-popular",
    //       markers: false,
    //       start: "top 100%",
    //       end: "top 30%",
    //       scrub: 1,
    //     },
    //   });

    //   const category = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".shop-category",
    //       markers: false,
    //       start: "top 100%",
    //       end: "top 30%",
    //       scrub: 1,
    //     },
    //   });

    //   const shp = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".rawr",
    //       markers: false,
    //       start: "top 100%",
    //       end: "top 30%",
    //       scrub: 1,
    //     },
    //   });

    //   const img = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".cloufee",
    //       markers: false,
    //       start: "top 80%",
    //       end: "top 30%",
    //       scrub: 1,
    //     },
    //   });

    //   const dsc = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".cloufee",
    //       markers: false,
    //       start: "top 80%",
    //       end: "top 30%",
    //       scrub: 1,
    //     },
    //   });

    //   hdr.from(".intro", { opacity: 0, x: -40 });
    //   ptxt.from("p", { opacity: 0, x: 40 });

    //   btn.from(".shop,.shop2", { opacity: 0 });

    //   shpn.from(".shopn,.shopn2", { opacity: 0, duration: 4 });

    //   tl.from(".slick-slider", { opacity: 0, y: 60, duration: 4 }).to(
    //     ".slick-slider",
    //     { y: 0, duration: 4 }
    //   );

    //   ts.from(".card-popular", { opacity: 0, y: 80, duration: 4 }).to(
    //     ".card-popular",
    //     { y: 0, duration: 4 }
    //   );

    //   shp.from(".rawr,.rawr2", { opacity: 0, duration: 2 });

    //   category
    //     .from(".shop-category", { opacity: 0, y: 80, duration: 4 })
    //     .to(".shop-category", { y: 0, duration: 4 });

    //   img.from(".cloufee", { opacity: 0, x: -100, duration: 30  }).to(".cloufee", {
    //     x: 0,
    //     duration: 20,
    //   });

    //   dsc
    //     .from(".open-landmark", { opacity: 0, x: 100, duration: 30 })
    //     .to(".open-landmark", { x: 0, duration: 20 });
    // }, []);

    return ( <
        div className = "section" >
        <
        div className = "content pb-2" >
        <
        div className = "two 2xl:w-[1900px] h-[900px] max-[1900px]:hidden" >
        <
        div className = "relative flex flex-col items-center top-96 w-1/3" >
        <
        h1 className = "intro font-medium text-slate-950 text-2xl" >
        This Is Cloufee <
        /h1> <
        p className = "p mx-8 mt-2 text-center text-md" >
        Our House ambassadors make Cloufeeheir own in our latest campaign. <
        /p> <
        div className = "shop2 ml-[40px] mt-6 mr-12" >
        <
        Link to = "/desain-perhiasan"
        className = "bg-white px-10 pt-3 pb-4 border border-slate-900" >
        Shop the Collection <
        /Link> < /
        div > <
        /div> < /
        div > <
        div className = "one min-[1400px]:w-[1460px] min-[1400px]:h-[690px] lg:h-[640px] md:w-[1350px] h-[653px] min-[1900px]:hidden" >
        <
        div className = "relative flex flex-col items-center top-60 w-1/3" >
        <
        h1 className = "intro font-medium text-slate-950 text-2xl" >
        This Is Cloufee <
        /h1> <
        p className = "mx-8 mt-2 text-center text-md" >
        Our House ambassadors make Cloufee their own in our latest campaign. <
        /p> <
        div className = "flex ml-[40px] mt-6 mr-12" >
        <
        Link to = "/desain-perhiasan"
        className = "shop bg-white px-10 pt-3 pb-4 border border-slate-900" >
        Shop the Collection <
        /Link> < /
        div > <
        /div> < /
        div > <
        /div> <
        div className = "content2 2xl:left-[80px] mt-10" > {
            /* <div className="carousel h-0 2xl:h-40 2xl:w-[1756px]">
                      <Carousel
                        responsive={responsive}
                        itemClass="px-2"
                        containerClass="carousel-container"
                        dotListClass="carousel-dots"
                        draggable
                      >
                        {products}
                      </Carousel>
                    </div> */
        } <
        Slider className = "md:ml-16 md:mr-10 2xl:ml-24" {...carouselProperties } > {
            productData.map((items) => ( <
                div key = { items.id }
                className = "" >
                <
                Link to = "/" >
                <
                img className = "w-auto md:h-[370px] 2xl:h-[432px] object-contain mb-10"
                src = { items.imageurl }
                alt = "Jawelry" >
                <
                /img> < /
                Link > <
                div className = "icon-favorite absolute md:top-11 md:ml-[272px] min-[1400px]:top-8 min-[140px]:ml-[298px] 2xl:mt-8 2xl:ml-[390px]" > < /div> < /
                div >
            ))
        } <
        /Slider> <
        div className = "relative z-0 grid place-content-center mb-20 2xl:hidden" >
        <
        Link to = "/desa in-perhiasan"
        className = "shopn bg-white px-4 py-3 border border-slate-900" >
        <
        span className = "font-medium text-black" > Shop Now < /span> < /
        Link > <
        /div> <
        div className = "relative z-0 grid place-content-center mb-8 max-[1540px]:hidden" >
        <
        Link to = "/desain-perhiasan"
        className = "shopn2 bg-white px-7 py-3 border border-slate-900" >
        <
        span className = "font-medium text-black" > Shop Now < /span> < /
        Link > <
        /div> <
        div className = "card-popular relative flex justify-center z-0 md:gap-24" > {
            productPopular.map((item) => ( <
                div className = "flex flex-col items-center mb-20"
                key = { item.id } >
                <
                Link to = "/desain-perhiasan"
                className = "" >
                <
                img className = "md:w-[500px]"
                src = { item.imageurl }
                alt = { item.title }
                /> < /
                Link > <
                span className = "flex justify-center mt-4 md:text-2xl text-black font-semibold" > { item.title } <
                /span> <
                Link to = { item.shop }
                className = "shop-now flex mt-2" >
                <
                span className = "text-black font-normal" > { item.text1 } < /span> <
                span className = "text-black font-normal" > { item.text2 } < /span> < /
                Link > <
                /div>
            ))
        } <
        /div> < /
        div > <
        div className = "content3" >
        <
        h1 className = "rawr text-black text-center font-medium text-2xl" >
        Shop by Category <
        /h1> <
        h3 className = "rawr2 text-black text-center mb-8" >
        Brilliant design and unparalleled craftsmanship. <
        /h3> <
        div className = "shop-category relative flex max-[420px]:grid max-[420px]:grid-cols-2 max-[420px]:mx-4 gap-4 justify-center mb-20" > {
            shopCategory.map((items) => ( <
                div className = "flex flex-col items-center"
                key = { items.id } >
                <
                Link to = "/desain-perhiasan" >
                <
                img className = "md:w-48 2xl:w-64"
                src = { items.imageurl }
                alt = { items.alt } >
                <
                /img> < /
                Link > <
                Link className = "" >
                <
                span className = "category-shop" > { items.text1 } < /span> <
                span className = "category-shop2" > { items.text2 } < /span> <
                span className = "category-shop3" > { items.text3 } < /span> <
                span className = "category-shop4" > { items.text4 } < /span> <
                span className = "category-shop5" > { items.text5 } < /span> <
                span className = "category-shop6" > { items.text6 } < /span> < /
                Link > <
                /div>
            ))
        } <
        /div> < /
        div > <
        div className = "content4" >
        <
        div className = "flex justify-center items-center" >
        <
        img src = { cloufee }
        className = "cloufee md:w-[800px]"
        alt = "cloufee" / >
        <
        div className = "open-landmark flex flex-col" >
        <
        div className = "" >
        <
        h1 className = "font-sans text-3xl text-black" >
        Now Open: The Landmark <
        /h1> < /
        div > <
        div className = "font-serif pt-[10px]" >
        <
        span className = "" >
        A legacy of brilliance continues with The Landmark.Discover a new Cloufee.for a new era at 727 Fifth Avenue, New York. <
        /span> < /
        div > <
        div className = "learn-more flex pt-[10px]" > {
            Learnmore.map((data) => ( <
                Link key = { data.id }
                to = "/"
                className = "" >
                <
                span className = "" > { data.txt } < /span> < /
                Link >
            ))
        } <
        /div> < /
        div > <
        /div> < /
        div > <
        div className = "content5 mt-20" >
        <
        div className = "flex justify-center" >
        <
        span className = "md:text-2xl font-bold font-sans" > Stories < /span> < /
        div > <
        div className = "container-cards flex justify-center gap-20 mt-10" >
        <
        div className = "box-cards" >
        <
        span className = "title-cards" > GLASS EFFECT < /span> <
        div >
        <
        strong > JOE WATSON SBF < /strong> <
        p > 0000 000 000 0000 < /p> <
        span > VALID < /span> <span>01/
        28 < /span> < /
        div > <
        /div> <
        div className = "box-cards" >
        <
        span className = "title-cards" > GLASS EFFECT < /span> <
        div >
        <
        strong > JOE WATSON SBF < /strong> <
        p > 0000 000 000 0000 < /p> <
        span > VALID < /span> <span>01/
        28 < /span> < /
        div > <
        /div> < /
        div > <
        /div> < /
        div >
    );
};

export default Home;