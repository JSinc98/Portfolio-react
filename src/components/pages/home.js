import React from 'react';

export default function Home() {
  return (
    <div style={{backgroundImage: 'url(${"/images/starrybg.jpg"})',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
    }}>
      <h1>Welcome to my portfolio!</h1>
      <img src='../../images/weddinglightsaber.jpg' class="img-fluid" alt="Responsive image" style={{width:'300px', height:'300px'}}></img>
      <p>
       My name is Joshua Sinclair. I'm a 36 year old web developer from Ottawa with a passion for helping others, working hard and having some fun along the way. I have been in web development since January 2023 and am constantly learning and improving at web development. Before getting into this field I worked as a paramedic in Nova Scotia, which I feel gave me an excellent lesson in time management and working under pressure.
      </p>
    </div>
  );
}

