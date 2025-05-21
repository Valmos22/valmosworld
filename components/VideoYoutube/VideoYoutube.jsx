
const VideoYoutube = ({ urlVideo }) => {
    console.log(urlVideo)
    return (
        <div className="youtubeVideo">
            <iframe
                width="100%"
                height="400"
                src={`${urlVideo}`}
                title={""}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default VideoYoutube