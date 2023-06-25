import { usePage, Link } from "@inertiajs/inertia-react";
import NavigationBar from "../Components/NavigationBar";
import Popup from "../Components/Popup";

const IndexView = () => {
  const { flash, auth, items } = usePage().props;

  const setPicture = (pictureUrl) => {
    return pictureUrl ? pictureUrl : 'default-placeholder.png';
  }

  return (
      <div className="index">
        {auth ? <NavigationBar newItem profile logout /> : <NavigationBar newItem login register />}
        <main>
          {items.map(item => (
            <Link href={`/item/${item.id}`} key={item.id}>
              <div>
                <img src={setPicture(item.picture_url)} alt="item-picture" />
                <h2>{item.title}</h2>
                <p>{item.price}</p>
              </div>
            </Link>
          ))}
        </main>
        <Popup message={flash.message}/>
      </div>
  )
}

export default IndexView;