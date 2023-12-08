import { useEffect, useState } from "react";
import Form from "./components/Form";
import axios from "axios";
import Meme from "./components/Meme";

function App() {
  // formData state
  const [formData, setFormData] = useState({
    topText: "",
    bottomText: "",
  });

  // allMemes state
  const [allMemes, setAllMemes] = useState([]);

  // meme state
  const [meme, setMeme] = useState({
    id: "252600902",
    name: "Always Has Been",
    url: "https://i.imgflip.com/46e43q.png",
    width: 960,
    height: 540,
    box_count: 2,
    captions: 166750,
  });

  // on mount async get Memes which sets our allMemes state with data from API
  useEffect(() => {
    async function getMemes() {
      const res = await axios.get("https://api.imgflip.com/get_memes");
      setAllMemes(res.data.data.memes);
    }

    getMemes();
  }, []);

  // handle form submit
  function handleSubmit(e) {
    e.preventDefault();
    // create new meme
    alert(formData.topText);
  }

  // handle click on change image button
  function handleChangeImage() {
    const random = Math.floor(Math.random() * 100);
    setMeme(allMemes[random]);
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
      <Meme
        meme={meme}
        formData={formData}
        handleChangeImage={handleChangeImage}
      />
    </>
  );
}

export default App;
