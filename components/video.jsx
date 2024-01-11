
export function VideoPage({ src }) {
    return (
        <div className="max-h-[25vh] overflow-hidden blur-[2px] ">
            <video className="object-cover w-full h-[25vh] " autoPlay loop playsInline muted>
                <source type="video/mp4" src={src} />
            </video>
        </div>
    )
};
