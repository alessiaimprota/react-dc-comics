function Navbar() {
  const links = [
    { id: 1, category: "CHARACTERS", url: "#" },
    { id: 2, category: "COMICS", url: "#" },
    { id: 3, category: "MOVIES", url: "#" },
    { id: 4, category: "TV", url: "#" },
    { id: 5, category: "GAMES", url: "#" },
    { id: 6, category: "COLLECTIBLES", url: "#" },
    { id: 7, category: "VIDEOS", url: "#" },
    { id: 8, category: "FANS", url: "#" },
    { id: 9, category: "NEWS", url: "#" },
    { id: 10, category: "SHOP", url: "#" },
  ];

  const linkList = links.map((link) => {
    return (
      <li key={link.id}>
        <a href={link.url}>{link.category}</a>
      </li>
    );
  });
  return (
    <nav>
      <ul>{linkList}</ul>
    </nav>
  );
}

export default Navbar;
