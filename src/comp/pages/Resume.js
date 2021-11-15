import React from "react";

export default function Resume(props) {
  return (
    <div data-aos="fade-left"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      <h3>{props.lastPath}</h3>
      <img src="https://picsum.photos/600/600" alt="asf"/>
    </div>
  );
}
