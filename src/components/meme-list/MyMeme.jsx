import { useEffect, useState } from "react";
import EditForm from "./EditForm";

function MyMeme({
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
  const [editFormData, setEditFormData] = useState({
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
      handleEditMeme(id, editFormData, index);

      // toggle edit
      setEdit((prevEdit) => !prevEdit);
    } else {
      setEdit((prevEdit) => !prevEdit);
    }
  }

  return (
    <div className="my-meme--container container">
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
          <EditForm formData={editFormData} setFormData={setEditFormData} />
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
        <h2>{editFormData.topText}</h2>
        <h2>{editFormData.bottomText}</h2>
      </div>
    </div>
  );
}

export default MyMeme;
