import { useEffect, useState } from "react";
import Form from "./components/Form";
import axios from "axios";
import Meme from "./components/Meme";
import MemeList from "./components/MemeList";
// Import UUID for creating unique IDs
import { v4 as uuidv4 } from "uuid";

function App() {
  // formData state
  const [formData, setFormData] = useState({
    topText: "",
    bottomText: "",
  });

  // allMemes state
  const [allMemes, setAllMemes] = useState([]);

  // meme state
  const [meme, setMeme] = useState({});

  // meme list state
  const [memeList, setMemeList] = useState([]);

  // on mount get Memes which sets our allMemes state with data from API and setMeme for
  //   random starter meme.
  useEffect(() => {
    async function getMemes() {
      const res = await axios.get("https://api.imgflip.com/get_memes");
      setAllMemes(res.data.data.memes);
      setMeme(res.data.data.memes[Math.floor(Math.random() * 100)]);
    }

    getMemes();
  }, []);

  // handle form submit
  function handleSubmit(e) {
    e.preventDefault();
    // create new meme
    const newMeme = {
      id: uuidv4(),
      meme,
      topText: formData.topText,
      bottomText: formData.bottomText,
    };
    // update meme list state
    setMemeList((prevMemeList) => [...prevMemeList, newMeme]);
    // clear inputs
    setFormData({
      topText: "",
      bottomText: "",
    });
  }

  // handle click on change image button
  function handleChangeImage() {
    const random = Math.floor(Math.random() * 100);
    setMeme(allMemes[random]);
  }

  // handle delete meme from meme list
  function handleDelete(id) {
    // Update memeList state and remove the id
    setMemeList((prevMemeList) => {
      const newMemeList = prevMemeList.filter((meme) => meme.id !== id);
      return newMemeList;
    });
  }

  return (
    <>
      <nav className="nav">
        <h1>👾 Meme List Generator</h1>
      </nav>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        Create Your Meme:
      </h2>
      <Form
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        handleChangeImage={handleChangeImage}
      />
      <Meme meme={meme} formData={formData} />
      <MemeList memes={memeList} handleDelete={handleDelete} />
    </>
  );
}

export default App;
