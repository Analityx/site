import { IntroServices } from "@/components/ourServices/intro";
import Services from "@/components/ourServices/services";
import { VideoPage } from "@/components/video";
import { ImageNavbar } from "@/components/image";

export const metadata = {
    title: "Risk Management - Analityx",
    description: "Site Analityx",
};

export default function RiskManagement() {
    return (
        <section className=" w-full">
            {/* <ImageNavbar /> */}
            <section className="mx-auto container mt-[8vh] md:px-[50px]">
                <IntroServices type="riskManagement" />
                <Services type="riskManagement" />
            </section>
        </section>
    )
};
