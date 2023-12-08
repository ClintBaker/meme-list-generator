import { useEffect, useState } from "react";

function ListedMeme({
  meme,
  formData,
  handleChangeImage,
  index,
  id,
  handleDelete,
}) {
  // Define height and width
  const [dimensions, setDimensions] = useState({
    height: "400px",
    width: "400px",
  });

  //   create edit state to dynamically render form
  const [edit, setEdit] = useState(false);

  //   Use an effect on meme state change that scales height and width based on maxHeight
  useEffect(() => {
    const maxHeight = 400;
    if (meme.height > maxHeight) {
      let ratio = 1 - (meme.height - maxHeight) / meme.height;
      setDimensions({
        height: meme.height * ratio,
        width: meme.width * ratio,
      });
    } else {
      setDimensions({
        height: meme.height,
        width: meme.width,
      });
    }
  }, [meme]);

  //   Handle delete
  function handleDeleteLocal() {
    // Call handleDelete with the meme's id
    handleDelete(id);
  }

  return (
    <div className="container">
      <div className="listed--head">
        <h3>Meme {index}:</h3>
        <div className="btns">
          <button onClick={handleDeleteLocal} className="listed--btn red">
            DELETE 🙅‍♀️
          </button>
          <button onClick={handleDeleteLocal} className="listed--btn">
            EDIT ✍️
          </button>
        </div>
      </div>
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
      <div
        style={{
          marginTop: "30px",
          justifySelf: "center",
          alignSelf: "center",
        }}
        className="meme-list--break"
      ></div>
    </div>
  );
}

export default ListedMeme;
