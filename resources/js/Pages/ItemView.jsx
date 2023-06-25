import { usePage } from "@inertiajs/inertia-react";
import NavigationBar from "../Components/NavigationBar";

const ItemView = ({ item, user }) => {
  const { auth } = usePage().props;

  return (
    <div className="item">
      {auth ? <NavigationBar backToIndex profile logout /> : <NavigationBar backToIndex register login />}
      <article>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <img src={item.picture_url} alt="" />
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{}</p>
      </article>
    </div>
  );
}

export default ItemView;