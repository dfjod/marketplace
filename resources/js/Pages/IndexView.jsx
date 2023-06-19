import { Link, usePage } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";
import NavigationBar from "../Components/NavigationBar";
import Popup from "../Components/Popup";

const IndexView = () => {
  const { flash, auth } = usePage().props;

  return (
      <div className="index">
        {auth ? <NavigationBar newItem profile logout /> : <NavigationBar newItem login register />}
        <Popup message={flash.message}/>
      </div>
  )
}

export default IndexView;