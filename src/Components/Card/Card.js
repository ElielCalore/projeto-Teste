export function Card(props) {
  return (
    <div className="d-flex p-3 flex-column mb-10 ">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={`https://image.tmdb.org/t/p/original${props.image}`}
          className="card-img-top"
          alt={props.image}
        />
        <div className="card-body">
          <h5 className="card-title">Título do Filme: {props.title}</h5>
        </div>
      </div>
    </div>
  );
}
