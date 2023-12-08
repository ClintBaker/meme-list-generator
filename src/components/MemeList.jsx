import ListedMeme from "./ListedMeme";

function MemeList({ memes, handleDelete }) {
  const renderMemes = memes.map((meme, i) => (
    <ListedMeme
      index={i + 1}
      key={meme.id}
      id={meme.id}
      meme={meme.meme}
      formData={{ topText: meme.topText, bottomText: meme.bottomText }}
      handleDelete={handleDelete}
    />
  ));
  return (
    <div className="meme-list--container">
      <div className="meme-list--break"></div>
      <h2>My Memes:</h2>
      <p>Manage memes here.</p>
      <div>{memes.length > 0 && renderMemes}</div>
    </div>
  );
}

export default MemeList;
