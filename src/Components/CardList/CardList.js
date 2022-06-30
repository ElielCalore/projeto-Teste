export function CardList(props) {
  console.log(props);
  return (
    <div className="d-flex p-3 flex-column mb-10 ">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Nome da Lista: {props.name}</h5>
          <h6 className="card-title">
            Descrição da lista: {props.description}
          </h6>
        </div>
      </div>
    </div>
  );
}
