import ImgDigitalComic from "../assets/img/buy-comics-digital-comics.png";
import ImgDcMerch from "../assets/img/buy-comics-merchandise.png";
import ImgSubscriptions from "../assets/img/buy-comics-subscriptions.png";
import ImgComicShopLocator from "../assets/img/buy-comics-shop-locator.png";
import ImgDcPowerVisa from "../assets/img/buy-dc-power-visa.svg";

function Shop() {
  const ShopMain = [
    {
      id: 1,
      type: "DIGITAL COMICS",
      img: ImgDigitalComic,
    },
    {
      id: 2,
      type: "DC MERCHANDISE",
      img: ImgDcMerch,
    },
    {
      id: 3,
      type: "SUBSCRIPTION",
      img: ImgSubscriptions,
    },
    {
      id: 4,
      type: "COMIC SHOP LOCATOR",
      img: ImgComicShopLocator,
    },
    {
      id: 5,
      type: "DC POWER VISA",
      img: ImgDcPowerVisa,
    },
  ];

  const ShopList = ShopMain.map((ShopLink) => {
    return (
      <li key={ShopLink.id}>
        <a href="#">
          <img src={ShopLink.img} alt={ShopLink.img} />
          <span> {ShopLink.type}</span>
        </a>
      </li>
    );
  });
  return <ul className="shopOnline">{ShopList}</ul>;
}

export default Shop;
