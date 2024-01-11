import { VideoPage } from "@/components/video";
import { FormContact } from "@/components/contact/form";

export default function Contact() {
    return (
        <section className=" w-full">
            <VideoPage src="/assets/img/recursos/fondo-about-us.mp4" />
            <section className="mx-auto container">
                <FormContact />
            </section>
        </section>
    )
};
