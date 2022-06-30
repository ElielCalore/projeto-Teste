export function ButtonCard(props) {
  return (
    <div>
      <button onClick={props.onClick} class="btn btn-primary p-2 mb-0">
        Adicionar
      </button>
    </div>
  );
}
