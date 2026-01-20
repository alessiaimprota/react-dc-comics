const footerLinksSections = [
  {
    id: 1,
    title: "DC COMICS",
    links: [
      { id: 1, section: "Characters", url: "#" },
      { id: 2, section: "Comics", url: "#" },
      { id: 3, section: "Movies", url: "#" },
      { id: 4, section: "TV", url: "#" },
      { id: 5, section: "Games", url: "#" },
      { id: 6, section: "Videos", url: "#" },
      { id: 7, section: "News", url: "#" },
    ],
  },

  {
    id: 2,
    title: "SHOP",
    links: [
      { id: 1, section: "Shop DC", url: "#" },
      { id: 2, section: "Shop DC Collectibles", url: "#" },
    ],
  },

  {
    id: 3,
    title: "DC",
    links: [
      { id: 1, section: "Terms of Use", url: "#" },
      { id: 2, section: "Privacy policy (New)", url: "#" },
      { id: 3, section: "Ad Choices", url: "#" },
      { id: 4, section: "Advertising", url: "#" },
      { id: 5, section: "Jobs", url: "#" },
      { id: 6, section: "Subscription", url: "#" },
      { id: 7, section: "Talent Workshops", url: "#" },
      { id: 8, section: "CPSC Certificates", url: "#" },
      { id: 9, section: "Ratings", url: "#" },
      { id: 10, section: "Shop Help", url: "#" },
      { id: 11, section: "Contact US", url: "#" },
    ],
  },

  {
    id: 4,
    title: "Sites",
    links: [
      { id: 1, section: "DC", url: "#" },
      { id: 2, section: "MAD Magazines", url: "#" },
      { id: 3, section: "DC Kids", url: "#" },
      { id: 4, section: "DC Universe", url: "#" },
      { id: 5, section: "DC Power Visa", url: "#" },
    ],
  },
];

function renderLinks(array) {
  return array.map((link, index) => {
    <li key={index}>
      <a href={link.url}>{link.section}</a>
    </li>;
  });
}

function FooterLinks() {
  return (
    <ul className="footer-links">
      <li> {footerLinksSections.title} </li>
      {footerLinksSections.map((FooterLink) => {
        return renderLinks(FooterLink.links);
      })}
    </ul>
  );
}

export default FooterLinks;
