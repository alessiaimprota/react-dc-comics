function Card(props) {
  return (
    <div className="card">
      <a href="#">
        <img src={props.thumb} alt={props.title} />
        <span>{props.title}</span>
      </a>
    </div>
  );
}

export default Card;
