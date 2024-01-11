import { IntroServices } from "@/components/ourServices/intro";
import Services from "@/components/ourServices/services";
import { VideoPage } from "@/components/video";

export default function RiskManagement() {
    return (
        <section className=" w-full">
            <VideoPage src="/assets/img/recursos/fondo-risk-management.mp4" />
            <section className="mx-auto container">
                <IntroServices />
                <Services type="riskManagement" />
            </section>
        </section>
    )
};
