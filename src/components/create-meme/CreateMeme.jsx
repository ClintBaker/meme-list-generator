import CreateForm from "./CreateForm";
import Meme from "./Meme";

function CreateMeme({
  formData,
  setFormData,
  handleSubmit,
  handleChangeImage,
  meme,
}) {
  return (
    <div className="create-meme-container">
      <div>
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>
          Create Your Meme:
        </h2>
        <CreateForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          handleChangeImage={handleChangeImage}
        />
        <Meme meme={meme} formData={formData} />
      </div>
    </div>
  );
}

export default CreateMeme;
