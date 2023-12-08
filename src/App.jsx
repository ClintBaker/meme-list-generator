import { useEffect, useState } from "react";
import Form from "./components/Form";
import axios from "axios";
import Meme from "./components/Meme";

function App() {
  const [formData, setFormData] = useState({
    topText: "",
    bottomText: "",
  });

  const [allMemes, setAllMemes] = useState([
    {
      id: "252600902",
      name: "Always Has Been",
      url: "https://i.imgflip.com/46e43q.png",
      width: 960,
      height: 540,
      box_count: 2,
      captions: 166750,
    },
  ]);

  useEffect(() => {
    async function getMemes() {
      const res = await axios.get("https://api.imgflip.com/get_memes");
      console.log(res.data.data.memes);
      setAllMemes(res.data.data.memes);
    }

    getMemes();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    // create new meme
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
      <Meme meme={allMemes[13]} formData={formData} />
    </>
  );
}

export default App;
