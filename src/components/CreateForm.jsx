function CreateForm({
  formData,
  setFormData,
  handleSubmit,
  handleChangeImage,
}) {
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div className="inputs">
          <input
            className="input"
            placeholder="Top Text"
            name="topText"
            value={formData.topText}
            onChange={handleChange}
          />
          <input
            className="input"
            placeholder="Bottom Text"
            name="bottomText"
            value={formData.bottomText}
            onChange={handleChange}
          />
        </div>
        <div className="inputs">
          <button
            type="button"
            className="form--btn"
            onClick={handleChangeImage}
          >
            Change image 🖼️
          </button>
          <button className="form--btn">Submit ✅</button>
        </div>
      </form>
    </div>
  );
}

export default CreateForm;
