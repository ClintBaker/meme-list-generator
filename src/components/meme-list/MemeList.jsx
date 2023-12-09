import MyMeme from "./MyMeme";

function MemeList({ memes, handleDelete, handleEditMeme }) {
  // map over memes to create JSX to render the array of memes
  const renderMemes = memes.map((meme, i) => (
    <MyMeme
      index={i}
      key={meme.id}
      id={meme.id}
      meme={meme.meme}
      formData={{ topText: meme.topText, bottomText: meme.bottomText }}
      handleDelete={handleDelete}
      handleEditMeme={handleEditMeme}
    />
  ));
  return (
    <>
      <div id="memes" className="meme-list--container">
        <div className="meme-list--break"></div>
        <h2 className="my-memes">My Memes:</h2>
        <p>Manage memes here.</p>
        <div>{memes.length > 0 && renderMemes}</div>
        <div>
          {memes.length <= 0 && (
            <div className="no-memes">
              "You don't currently have any memes. Create a meme to get
              started!"
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MemeList;
