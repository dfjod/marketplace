import { usePage } from "@inertiajs/inertia-react";
import NavigationBar from "../Components/NavigationBar";
import Popup from "../Components/Popup";

const IndexView = () => {
  const { flash, auth, items } = usePage().props;

  return (
      <div className="index">
        {auth ? <NavigationBar newItem profile logout /> : <NavigationBar newItem login register />}
        <main>
          {items.map(item => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.price}</p>
            </div>
          ))}
        </main>
        <Popup message={flash.message}/>
      </div>
  )
}

export default IndexView;