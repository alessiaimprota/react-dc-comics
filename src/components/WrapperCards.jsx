import comics from "../data/comics";

function WrapperCards() {
  const ComicsList = comics.map((comic) => {
    return (
      <div className="card" key={comic.id}>
        <a href="">
          <img src={comic.thumb} alt="" />
          <span>{comic.title}</span>
        </a>
      </div>
    );
  });

  return <div className="Wrappercards">{ComicsList}</div>;
}

export default WrapperCards;
