import {
  storyblokEditable,
  RichTextSchema,
  renderRichText,
} from "@storyblok/react";


const Content = ({ blok }) => {
  const renderedRichText = renderRichText(blok.richtext, {
    schema: RichTextSchema,
    resolver: (component, blok) => {
      debugger;
      switch (component) {
        
        case "VideoEmbed":
          
        const convertToEmbedUrl = (url) => {
          return url.replace("watch?v=", "embed/");
        }
      
        const { url } = blok;
        const embedUrl = convertToEmbedUrl(url);

          return `<div style={{ textAlign: "center" }}>
          <iframe
            width="560"
            height="315"
            src=${embedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>`;
        default:
          return `Component ${component} not found`;
      }
    },
  });

  return (
    <div style={{ textAlign: "center" }} {...storyblokEditable(blok)}>
      <div dangerouslySetInnerHTML={{ __html: renderedRichText }} />
    </div>
  );
};

export default Content;
