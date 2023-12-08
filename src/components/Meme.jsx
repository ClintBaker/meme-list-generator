function Meme({ meme, formData }) {
  return (
    <div className="container">
      <div
        className="meme"
        style={{
          height: meme.height,
          width: meme.width,
          backgroundImage: `url(${meme.url})`,
        }}
      >
        <h2>{formData.topText}</h2>
        <h2>{formData.bottomText}</h2>
      </div>
    </div>
  );
}

export default Meme;
