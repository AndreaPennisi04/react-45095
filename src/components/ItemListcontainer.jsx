const ItemListContainer = ({ greeting }) => {
  return (
    <div className="card-body my-5 text-center">
      <h1> {greeting}</h1>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
      <a href={"/"} className="btn btn-primary">
        Go to History
      </a>
    </div>
  );
};

export default ItemListContainer;
