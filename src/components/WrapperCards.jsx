import comics from "../data/comics.js";
import Card from "./Card";

function WrapperCards() {
  const ComicsList = comics.map((comic) => {
    return (
      <Card
        id={comic.id}
        key={comic.id}
        thumb={comic.thumb}
        title={comic.title}
        titlefun={comic.title}
      />
    );
  });
  return <div className="cards-container">{ComicsList}</div>;
}

export default WrapperCards;
