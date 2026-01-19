function Shop() {
  const ShopMain = [
    {
      id: 1,
      type: "DIGITAL COMICS",
      img: "../assets/img/buy-comics-digital-comics.png",
    },
    {
      id: 2,
      type: "DC MERCHANDISE",
      img: "../assets/img/buy-comics-merchandise.png",
    },
    {
      id: 3,
      type: "SUBSCRIPTION",
      img: "../assetsimg/buy-comics-subscriptions.png",
    },
    {
      id: 4,
      type: "COMIC SHOP LOCATOR",
      img: "../assets/img/buy-comics-subscriptions.png",
    },
    {
      id: 5,
      type: "DC POWER VISA",
      img: "../assets/img/buy-dc-power-visa.svg",
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
