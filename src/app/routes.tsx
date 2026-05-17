import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout.tsx";
import Home from "../pages/Home/Home.tsx";
import AboutUs from "../pages/AboutUs/AboutUS.tsx";
import FirstVisit from "../pages/FirstVisit/FirstVisit.tsx";
import OurServices from "../pages/OurServices/OurServices.tsx";
import ForProfessionals from "../pages/ForProfessionals/ForProfessionals.tsx";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/first-visit" element={<FirstVisit />} />
                <Route path="/services" element={<OurServices />} />
                <Route path="/professionals" element={<ForProfessionals />} />
            </Route>
        </Routes>
    );
};