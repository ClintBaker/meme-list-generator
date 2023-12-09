function Nav({ myMemes }) {
  function handleScroll() {
    const memesDiv = document.querySelector("#memes");
    memesDiv.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <nav className="nav">
      <h1>👾 Meme List Generator</h1>
      <span onClick={handleScroll} className="my-memes--span">
        My Memes: {myMemes}
      </span>
    </nav>
  );
}

export default Nav;
