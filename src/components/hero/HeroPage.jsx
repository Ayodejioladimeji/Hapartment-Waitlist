import React from 'react';

// PACKAGES
// import { Link } from "react-router-dom";
import HeroSlider, { Slide, MenuNav, Overlay } from 'hero-slider';
import './HeroPage.css';
import SEO from '../../SEO/Seo';

// Images
const one =
  'https://res.cloudinary.com/dxftt00aj/image/upload/v1670422564/Hapartment/219983878_itbheu.jpg';
const two =
  'https://res.cloudinary.com/dxftt00aj/image/upload/v1670422585/Hapartment/4-bedroom-bungalow-hp1-1-1024x652_bfhco4.webp';
const three =
  'https://res.cloudinary.com/dxftt00aj/image/upload/v1670423496/Hapartment/11480194_engenp_jpeg11814bf23e46cb133b2f99d798862dc4_efzgmz.jpg';
const four =
  'https://res.cloudinary.com/dxftt00aj/image/upload/v1670423487/Hapartment/Lekki_ce0r2m.jpg';
const five =
  'https://res.cloudinary.com/dxftt00aj/image/upload/v1670423481/Hapartment/vllkyt5cpcmh3k7jq_gigzxc.jpg';
const six =
  'https://res.cloudinary.com/dxftt00aj/image/upload/v1670423479/Hapartment/fa1b6508-3cf1-47cc-9be5-68121306ece9_images_65_kjrnw4.avif';
const seven =
  'https://res.cloudinary.com/dxftt00aj/image/upload/v1670423506/Hapartment/6-bedroom-bungalow-hp2-1024x652_qzlwvq.webp';

const HeroPage = () => {
  return (
    <>
      <SEO title='Homepage' />
      <HeroSlider
        slidingAnimation='top_to_bottom'
        orientation='horizontal'
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) =>
          console.log('onBeforeChange', previousSlide, nextSlide)
        }
        onChange={(nextSlide) => console.log('onChange', nextSlide)}
        onAfterChange={(nextSlide) => console.log('onAfterChange', nextSlide)}
        style={{
          backgroundColor: '#000',
        }}
        settings={{
          slidingDuration: 900,
          slidingDelay: 900,
          shouldAutoplay: true,
          shouldDisplayButtons: false,
          autoplayDuration: 3000,
          height: '100vh',
          isSmartSliding: true,
        }}
      >
        <Overlay className='overlay-container'>
          <div className='wrapper'>
            <div className='wrapper-box'>
              {/* <div className='subtitle'>
              <Typewriter
                options={{
                  strings: [`Welcome to our Church`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div> */}

              <div className='title'>
                <h1>
                  Easy <span>way</span> to find a perfect <span>home</span>
                </h1>

                <p>
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
          label='BRIDGING'
          background={{
            //   backgroundColor: '#000',
            backgroundImageSrc: one,
            backgroundAnimation: 'zoom',
          }}
        />

        <Slide
          shouldRenderMask
          label='THE'
          background={{
            //   backgroundColor: '#8A8A8A',
            backgroundImageSrc: two,
            backgroundAnimation: 'zoom',
          }}
        />

        <Slide
          shouldRenderMask
          label='GAP'
          background={{
            //   backgroundColor: '#EA2329',
            backgroundImageSrc: three,
            backgroundAnimation: 'zoom',
          }}
        />

        <Slide
          shouldRenderMask
          label='BETWEEN'
          background={{
            //   backgroundColor: '#2D7791',
            backgroundImageSrc: four,
            backgroundAnimation: 'zoom',
          }}
        />

        <Slide
          shouldRenderMask
          label='LANDLORDS'
          background={{
            //   backgroundColor: '#2D7791',
            backgroundImageSrc: five,
            backgroundAnimation: 'zoom',
          }}
        />

        <Slide
          shouldRenderMask
          label='AND'
          background={{
            //   backgroundColor: '#2D7791',
            backgroundImageSrc: six,
            backgroundAnimation: 'zoom',
          }}
        />

        <Slide
          shouldRenderMask
          label='TENANTS'
          background={{
            //   backgroundColor: '#2D7791',
            backgroundImageSrc: seven,
            backgroundAnimation: 'zoom',
          }}
        />

        <MenuNav style={{ color: 'blue' }} />
      </HeroSlider>
    </>
  );
};

export default HeroPage;
