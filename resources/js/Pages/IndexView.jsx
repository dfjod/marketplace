import { Link, usePage } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";
import NavigationBar from "../Components/NavigationBar";

const IndexView = () => {
  const { flash, auth } = usePage().props;
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    if(flash.message) {
      setPopup(true);
      setTimeout(() => {
        setPopup(false);
      }, 4000);
    }
  }, []);

  return (
      <div className="index">
        {auth ? <NavigationBar newItem profile logout /> : <NavigationBar login register />}
        {popup && <div className="popup">{flash.message}</div>}
      </div>
  )
}

export default IndexView;