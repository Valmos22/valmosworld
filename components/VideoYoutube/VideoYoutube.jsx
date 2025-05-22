
const VideoYoutube = ({ urlVideo }) => {
    return (
        <div className="youtubeVideo">
            <iframe
                width="80%"
                height="400"
                src={`${urlVideo}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default VideoYoutube