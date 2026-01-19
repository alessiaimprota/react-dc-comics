import Jumbo from "./Jumbo";
import Shop from "./Shop";
import WrapperCards from "./WrapperCards";

function MainContent() {
  return (
    <>
      <div className="show-current-series"></div>
      <Jumbo />
      <WrapperCards />
      <Shop />
      <button>Load More</button>
    </>
  );
}

export default MainContent;
