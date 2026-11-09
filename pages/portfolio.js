import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import PortfolioOne from "@/components/portfolio-one";
import MenuContextProvider from "context/menu-context";
import SearchContextProvider from "context/search-context";
import HeaderOne from "@/components/header-one";
import VideoTwo from "@/components/video-two";
import CallToActionThree from "@/components/call-to-action-three";

const PortfolioPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Portfolio 01 Page">
          <HeaderOne />
          <PageBanner title="Unsere Gastro" name="Portfolio" />
          <VideoTwo />
          <PortfolioOne />
          <CallToActionThree extraClassName="ready_download" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default PortfolioPage;
