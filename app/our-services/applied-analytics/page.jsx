import { IntroServices } from "@/components/ourServices/intro";
import Services from "@/components/ourServices/services";
import { VideoPage } from "@/components/video";

export default function AppliedAnalytics() {
    return (
        <section className=" w-full">
            <VideoPage src="/assets/img/recursos/fondo-applied-analytics.mp4" />
            <section className="mx-auto container">
                <IntroServices />
                <Services type="appliedAnalytics" />
            </section>
        </section>
    )
};
