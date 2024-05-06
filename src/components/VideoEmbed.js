import { storyblokEditable } from "@storyblok/react";

const VideoEmbed = ({ blok }) => {
  const convertToEmbedUrl = (url) => {
    return url.replace("watch?v=", "embed/");
  }

  const { url } = blok;
  const embedUrl = convertToEmbedUrl(url);
  
  return (
    <div style={{ textAlign: "center" }} {...storyblokEditable(blok)}>
      <iframe
        width="560"
        height="315"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
