import React from "react";

// PACKAGES
// import { Link } from "react-router-dom";
import HeroSlider, { Slide, MenuNav, Overlay } from "hero-slider";
import "./HeroPage.css";
import SEO from "../../SEO/Seo";

// Images
const one =
  "https://res.cloudinary.com/hapartment/image/upload/v1671205940/Hapartment/14-Beautiful-houses-in-nigeria-1024x640_ik12g2.jpg";

const two =
  "https://res.cloudinary.com/hapartment/image/upload/v1671205940/Hapartment/42c745b7-3fa1-4571-ad1a-91497ba78a23_jcotvl.webp";
const three =
  "https://res.cloudinary.com/hapartment/image/upload/v1671205940/Hapartment/63044074_tb8teb.jpg";
const four =
  "https://res.cloudinary.com/hapartment/image/upload/v1671205941/Hapartment/219983878_lnmjox.jpg";
const five =
  "https://res.cloudinary.com/hapartment/image/upload/v1671205940/Hapartment/6-bedroom-bungalow-hp2-1024x652_mygn0j.webp";
const six =
  "https://res.cloudinary.com/hapartment/image/upload/v1671205940/Hapartment/1170293_jpp_jpg433832b8edeb34839d7445cc275f6ae0_nswkkm.jpg";
const seven =
  "https://res.cloudinary.com/hapartment/image/upload/v1671205941/Hapartment/b15f4b32_z_adgolw.webp";

const HeroPage = () => {
  return (
    <>
      <SEO title="Homepage" />
      <HeroSlider
        slidingAnimation="top_to_bottom"
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) =>
          console.log("onBeforeChange", previousSlide, nextSlide)
        }
        onChange={(nextSlide) => console.log("onChange", nextSlide)}
        onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
        style={{
          backgroundColor: "#000",
        }}
        settings={{
          slidingDuration: 900,
          slidingDelay: 900,
          shouldAutoplay: true,
          shouldDisplayButtons: false,
          autoplayDuration: 3000,
          height: "100vh",
          isSmartSliding: true,
        }}
      >
        <Overlay className="overlay-container">
          <div className="wrapper">
            <div
              className="wrapper-box"
              data-aos="fade-down"
              data-aos-once="true"
            >
              {/* <div className='subtitle'>
              <Typewriter
                options={{
                  strings: [`Welcome to our Church`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div> */}

              <div className="title">
                <h1 data-aos="zoom-in" data-aos-once="true">
                  Easy <span>way</span> to find a perfect <span>home</span>
                </h1>

                <p data-aos="zoom-in" data-aos-once="true">
                  We help users search for apartment easily and provide them
                  with adequate information to help them make well-informed
                  decisions.
                </p>
              </div>
            </div>
          </div>
        </Overlay>

        <Slide
          shouldRenderMask
          label="BRIDGING"
          background={{
            //   backgroundColor: '#000',
            backgroundImageSrc: one,
            backgroundAnimation: "zoom",
          }}
        />

        <Slide
          shouldRenderMask
          label="THE"
          background={{
            //   backgroundColor: '#8A8A8A',
            backgroundImageSrc: two,
            backgroundAnimation: "zoom",
          }}
        />

        <Slide
          shouldRenderMask
          label="GAP"
          background={{
            //   backgroundColor: '#EA2329',
            backgroundImageSrc: three,
            backgroundAnimation: "zoom",
          }}
        />

        <Slide
          shouldRenderMask
          label="BETWEEN"
          background={{
            //   backgroundColor: '#2D7791',
            backgroundImageSrc: four,
            backgroundAnimation: "zoom",
          }}
        />

        <Slide
          shouldRenderMask
          label="LANDLORDS"
          background={{
            //   backgroundColor: '#2D7791',
            backgroundImageSrc: five,
            backgroundAnimation: "zoom",
          }}
        />

        <Slide
          shouldRenderMask
          label="AND"
          background={{
            //   backgroundColor: '#2D7791',
            backgroundImageSrc: six,
            backgroundAnimation: "zoom",
          }}
        />

        <Slide
          shouldRenderMask
          label="TENANTS"
          background={{
            //   backgroundColor: '#2D7791',
            backgroundImageSrc: seven,
            backgroundAnimation: "zoom",
          }}
        />

        <MenuNav style={{ color: "blue" }} />
      </HeroSlider>
    </>
  );
};

export default HeroPage;
