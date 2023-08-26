import { usePage } from "@inertiajs/inertia-react";
import NavigationBar from "../Components/NavigationBar";

const ItemView = ({ item, user }) => {
  const { auth } = usePage().props;

  return (
    <div className="item-view">
      {auth ? <NavigationBar backToIndex profile logout /> : <NavigationBar backToIndex register login />}
      <div className="item">
        <article className="individual-item">
          <div className="grid-left">
            <div className="item-info">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <p>{item.price}€</p>
            </div>
            <div className="seller-info">
              <h2>Sellers info</h2>
              <p>{user.username}</p>
              <p>{user.email}</p>
            </div>
          </div>
          <div className="grid-right">
            <img src={item.picture_url} alt="" />
          </div>
        </article>
      </div>
    </div>
  );
}

export default ItemView;