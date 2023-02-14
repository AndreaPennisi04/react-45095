import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col d-flex align-items-center justify-content-end">
          <img src={`${process.env.PUBLIC_URL}/${Item.image}`} alt={item.name} />
        </div>
        <div className="col d-flex align-items-center">
          <div>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <p>
              <b>£{item.price}</b>
            </p>
            <ItemCount stock={item.stock} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
