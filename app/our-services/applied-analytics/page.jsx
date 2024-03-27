import { IntroServices } from "@/components/ourServices/intro";
import Services from "@/components/ourServices/services";
import { VideoPage } from "@/components/video";
import { ImageNavbar } from "@/components/image";

export const metadata = {
    title: "Applied Analitycs - Analityx",
    description: "Site Analityx",
};

export default function AppliedAnalytics() {
    return (
        <section className=" w-full">
            <ImageNavbar />
            <section className="mx-auto container">
                <IntroServices />
                <Services type="appliedAnalytics" />
            </section>
        </section>
    )
};
