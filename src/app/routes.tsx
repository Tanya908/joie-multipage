import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import ScrollToTop from "../components/ScrollToTop.tsx";

import Layout from "../components/layout/Layout.tsx";

const Home = lazy(() => import("../pages/Home/Home.tsx"));
const AboutUs = lazy(() => import("../pages/AboutUs/AboutUS.tsx"));
const FirstVisit = lazy(() => import("../pages/FirstVisit/FirstVisit.tsx"));
const OurServices = lazy(() => import("../pages/OurServices/OurServices.tsx"));
const ForProfessionals = lazy(() => import("../pages/ForProfessionals/ForProfessionals.tsx"));
const ContactUs = lazy(() => import("../pages/ContactUs/ContactUs.tsx"));


export const AppRoutes = () => {
    return (
        <>
            <ScrollToTop/>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/first-visit" element={<FirstVisit />} />
                    <Route path="/services" element={<OurServices />} />
                    <Route path="/professionals" element={<ForProfessionals />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Route>
            </Routes>
        </>
    );
};