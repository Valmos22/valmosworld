
const VideoYoutube = ({ urlVideo }) => {
    console.log(urlVideo)
    return (
        <div className="youtubeVideo">
            <iframe
                width="560"
                height="315"
                src={`${urlVideo}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
            </iframe>
        </div>
    )
}

export default VideoYoutube