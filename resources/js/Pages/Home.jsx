import MainLayout from "@/Layouts/MainLayout";
import { Head } from '@inertiajs/react';
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TargetSection from "@/components/sections/TargetSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PackagesSection from "@/components/sections/PackagesSection";
import MonthlyPackagesSection from "@/components/sections/MonthlyPackagesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import AboutSection from "@/components/sections/AboutSection";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/sections/ScrollToTop";

export default function Home() {
    return (

        <MainLayout>
            <Head title="Egyedi megoldások" />
            <Navbar />
            <HeroSection />
            <TargetSection />
            <ServicesSection />
            <PackagesSection />
            <MonthlyPackagesSection />
            <ProjectsSection />
            <TechStackSection />
            <AboutSection />
            <Footer />
            <ScrollToTop />
        </MainLayout>
    );
}
