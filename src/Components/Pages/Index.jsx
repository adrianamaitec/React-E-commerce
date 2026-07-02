import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Products from "/src/Product.json";

function Index() {
  return (
    <>
      {/*Hero*/}
      <div className="hero">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          modules={[Autoplay, EffectFade]}
          autoplay={{
            delay: 3000,
          }}
          effect="fade"
          loop={true}
        >
          <SwiperSlide>
            <div className="hero-wrap hero-wrap1">
              <div className="hero-content">
                <h5>-NEW COLLECTION-</h5>
                <h1>Discover the latest trends in beauty </h1>
                <p className="my-3">
                  Our new collection have essentials designed to highlight your
                  natural glow. Shop now and redefine your beauty routine.
                </p>
                <a href="#" className="btn hero-btn mt-3">
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-wrap hero-wrap2">
              <div className="hero-content">
                <h5>-LIMITED EDITION-</h5>
                <h1>Beauty that won’t last forever</h1>
                <p className="my-3">
                  Elevate your style with limited‑edition items that make every
                  look unforgettable.
                </p>
                <a href="#" className="btn hero-btn mt-3">
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-wrap hero-wrap3">
              <div className="hero-content">
                <h5>-ESSENTIAL ITEMS-</h5>
                <h1>
                  Beauty Inspired <br />
                  Collection
                </h1>
                <p className="my-3">
                  Discover our curated selection of beauty products designed to
                  enhance your natural glow.
                </p>
                <a href="#" className="btn hero-btn mt-3">
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/*Products*/}
      <div className="product-container py-5 my-5">
        <div className="container position-relative">
          <div className="row">
            <div className="section-title mb-5 product-title text-center">
              <h2 className="fw-semibold fs-1">Our Products</h2>
              <p className="text-muted">
                Get your dream skin with our premium products
              </p>
            </div>
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            modules={[Navigation]}
            navigation={{
              nextEl: ".product-swiper-next",
              prevEl: ".product-swiper-prev",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
              1399: {
                slidesPerView: 4,
              },
            }}
            className="mt-4 swiper position-relative"
          >
            {Products.filter(
              (product) => product.id >= 5 && product.id <= 10,
            ).map((product) => (
              <SwiperSlide key={product.id}>
                <div className="product-item text-center position-relative">
                  <div className="product-image position-relative w-100 overflow-hidden">
                    <img src={product.image} className="img-fluid" alt="" />
                    <img
                      src={product.secondImage}
                      className="img-fluid"
                      alt=""
                    />
                    <div className="product-icons gap-3">
                      <div className="product-icon" title="Add to Wishlist">
                        <i className="bi bi-heart fs-5"></i>
                      </div>
                      <div
                        className="product-icon"
                        title="Add to 
                      car"
                      >
                        <i className="bi bi-cart3 fs-5"></i>
                      </div>
                    </div>
                    <span
                      className={`tag badge text-white ${product.tag === 'New' ? 'bg-danger' : 'bg-success'}`}
                    >
                      {product.tag}
                    </span>
                  </div>
                  <a href="#" className='text-decoration-none text-black'>
                    <div className="product-content pt-3">
                      <span className="price text-decoration-none">
                        {product.price}
                      </span>
                      <h3 className="title pt-1">{product.productName}</h3>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Index;
