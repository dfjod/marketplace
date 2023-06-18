import { usePage } from "@inertiajs/inertia-react";
import NavigationBar from "../Components/NavigationBar";

const ItemView = () => {
  const { auth } = usePage().props;

  return (
    <div className="item">
      {auth ? <NavigationBar backToIndex profile logout /> : <NavigationBar backToIndex register login />}
      <article>
        <h1></h1>
        <p></p>
        <p></p>
        <img src="" alt="" />
      </article>
    </div>
  );
}

export default ItemView;