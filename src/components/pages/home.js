import React from 'react';
import weddingSaber from '../../images/weddinglightsaber.jpg';
import './home.css';

export default function Home() {
  return (
    <div className="star-bg">
      <h1>Welcome to my portfolio!</h1>
      <img src={weddingSaber} class="img-fluid" alt="Responsive image" style={{width:'300px', height:'300px'}} />
      <p>
       My name is Joshua Sinclair. I'm a 36 year old web developer from Ottawa with a passion for helping others, working hard and having some fun along the way. I have been in web development since January 2023 and am constantly learning and improving at web development. Before getting into this field I worked as a paramedic in Nova Scotia, which I feel gave me an excellent lesson in time management and working under pressure.
      </p>
    </div>
  );
}

