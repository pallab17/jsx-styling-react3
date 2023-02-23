import React from "react";
import ReactDOM from "react-dom";

const image= "https://picsum.photos/200";


ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    {/* <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul> */}
    <div>
      <img 
      src = {image}
      alt="www"
      />
      <img
        className="f-img"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=480:*"
        alt="abc"
      />
      <img
        className="f-img"
        src="https://images-na.ssl-images-amazon.com/images/I/71lNrnbMXsL._SL1200_.jpg"
        alt="def"
      />

      <img
        className="f-img"
        src="https://www.errenskitchen.com/wp-content/uploads/2014/04/quick-and-easy-chinese-noodle-soup3-1.jpg"
        alt="gho"
      />
    </div>
  </div>,
  document.getElementById("root")
);
/*


1. className use korte hobe inplace of class
2. camelcasing use korte hobe for naming of attributes of more than one word
3. img tag r moto baki tags e closing tag / dite hobe
4. img tag ba jekono tag r bhetore we can include js by using curly brackets
e.g. below
const image= "https://picsum.photos/200"; // js eta

<img 
      src = {image} // js is written using curly brackets
      alt="www"
      />
*/
