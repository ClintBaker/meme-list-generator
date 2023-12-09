import { useEffect, useState } from "react";
import ListedForm from "./ListedForm";

function ListedMeme({
  meme,
  formData,
  handleChangeImage,
  index,
  id,
  handleDelete,
  handleEditMeme,
}) {
  // Define height and width
  const [dimensions, setDimensions] = useState({
    height: "400px",
    width: "400px",
  });

  //   create edit state to dynamically render form
  const [edit, setEdit] = useState(false);

  //   create form data state
  const [listedFormData, setListedFormData] = useState({
    topText: formData.topText,
    bottomText: formData.bottomText,
  });

  //   Use an effect on meme state change that scales height and width based on maxHeight
  useEffect(() => {
    const maxHeight = 350;
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

  //   Toggle edit
  function toggleEdit() {
    if (edit) {
      // save the meme
      handleEditMeme(id, listedFormData, index);

      // toggle edit
      setEdit((prevEdit) => !prevEdit);
    } else {
      setEdit((prevEdit) => !prevEdit);
    }
  }

  return (
    <div className="container">
      <div className="listed--head">
        <h3>Meme {index + 1}:</h3>
        <div className="btns">
          <button onClick={handleDeleteLocal} className="listed--btn red">
            DELETE 🙅‍♀️
          </button>
          <button onClick={toggleEdit} className="listed--btn">
            {edit ? "Save ✅" : "EDIT ✍️"}
          </button>
        </div>
        {edit && (
          <ListedForm
            formData={listedFormData}
            setFormData={setListedFormData}
          />
        )}
      </div>
      <div
        className="meme"
        style={{
          height: dimensions.height,
          width: dimensions.width,
          backgroundImage: `url(${meme.url})`,
        }}
      >
        <h2>{listedFormData.topText}</h2>
        <h2>{listedFormData.bottomText}</h2>
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
