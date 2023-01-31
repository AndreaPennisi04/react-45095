const ItemListContainer = ({ greeting }) => {
  return (
    <div className="card-body my-5 text-center">
      <h1> {greeting}</h1>
      <p className="card-text">Example text</p>
      <a href={"/"} className="btn btn-primary">
        Go to History
      </a>
    </div>
  );
};

export default ItemListContainer;
