import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [formData, setFormData] = useState({
    topText: "",
    bottomText: "",
  });

  const [memeImage, setMemeImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(formData.topText);
  }

  return (
    <>
      <nav className="nav">
        <h1>Meme List Generator</h1>
      </nav>
      <Form
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
