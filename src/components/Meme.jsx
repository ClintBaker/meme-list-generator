import { useEffect, useState } from "react";

function Meme({ meme, formData, handleChangeImage }) {
  // Define height and width
  const [dimensions, setDimensions] = useState({
    height: "100px",
    width: "100px",
  });

  //   Use an effect on meme state change that scales height and width based on maxHeight
  useEffect(() => {
    const maxHeight = 400;
    if (meme.height > maxHeight) {
      let ratio = 1 - (meme.height - maxHeight) / meme.height;
      console.log(meme.height);
      setDimensions({
        height: meme.height * ratio,
        width: meme.width * ratio,
      });
    }
  }, [meme]);
  return (
    <div className="container">
      <div
        className="meme"
        style={{
          height: dimensions.height,
          width: dimensions.width,
          backgroundImage: `url(${meme.url})`,
        }}
      >
        <h2>{formData.topText}</h2>
        <h2>{formData.bottomText}</h2>
      </div>
      <button onClick={handleChangeImage}>Change image</button>
    </div>
  );
}

export default Meme;
