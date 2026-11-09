import React from "react";
import Layout from "@/components/layout";
import CallToActionOne from "@/components/call-to-action-one";
import Footer from "@/components/footer";
import BlogHome from "@/components/blog-home";
import ParallaxOne from "@/components/parallax-1";
import PortfolioHome from "@/components/portfolio-home";
import SubscribeForm from "@/components/subscribe-form";
import ServiceTwo from "@/components/service-two";
import VideoTwo from "@/components/video-two";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import SliderOne from "@/components/slider-one";
import FeatureTabOne from "@/components/feature-tab-1";
import HealthGuide from "@/components/healthguide";


import FeatureTwo from "@/components/feature-two";
import ClientCarouselOne from "@/components/client-carousel-one";
import TeamCarousel from "@/components/team-carousel";
import FunfactOne from "@/components/funfact-one";
import TrustedClient from "@/components/trusted-client";
import AboutTwo from "@/components/about-two";

const HomeOne = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Startseite">
          <HeaderOne />
          <SliderOne />
          <ServiceTwo />
      
          <HealthGuide />
          <VideoTwo />
          <ParallaxOne />
          <BlogHome />
          <FeatureTabOne />

          {/*<PortfolioHome />*/}
          {/*<AboutTwo />*/}
          {/*<FunfactOne />*/}
          {/*<TrustedClient />*/}
          {/*<TeamCarousel />*/}
          {/* <ClientCarouselOne /> */}
          {/*<FeatureTwo/> */}
          <SubscribeForm />
          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default HomeOne;
