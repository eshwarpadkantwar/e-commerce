import React, { useState } from "react";

import Electronicsitems from "../../Components/ProductItems/Electronicsitems";


function Electronics() {

  const [cart, setCart] = useState([]);
  const [showcart, setshowcart] = useState(false);

  return (
    <div>
     
      <Electronicsitems />
      
    </div>
  );
}

export default Electronics;
