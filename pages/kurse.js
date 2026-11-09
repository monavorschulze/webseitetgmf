import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ServiceThree from "@/components/service-three";
import ServiceFive from "@/components/service-five";
import FunfactOne from "@/components/funfact-one";
import TrustedClient from "@/components/trusted-client";
import ClientCarouselOne from "@/components/client-carousel-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";

const KursePage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Services Page">
          <HeaderOne />
          <PageBanner title="Unsere Kurse" name="Services" />
          <ServiceFive />    
          <FunfactOne />
          <TrustedClient extraClassName="pb_120" />
          <ClientCarouselOne />
          <ServiceThree />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default KursePage;
