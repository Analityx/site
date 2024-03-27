import { VideoPage } from "@/components/video";
import { FormContact } from "@/components/contact/form";
import { ImageNavbar } from "@/components/image";

export const metadata = {
    title: "Contacto - Analityx",
    description: "Site Analityx",
  };

export default function Contact() {
    return (
        <section className=" w-full">
            <ImageNavbar />
            <section className="mx-auto container">
                <FormContact />
            </section>
        </section>
    )
};
