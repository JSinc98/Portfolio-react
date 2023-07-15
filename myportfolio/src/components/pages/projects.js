import React from 'react';

export default function Projectst() {
  return (
    <div>
      <div>
      <h1>Project Page</h1>
      </div>
      <div>
        <h4>Workday Scheduler</h4> '
        <a href='https://jsinc98.github.io/Workdayscheduler/'>
        <img src='../../images/workday.jpg' class="img-fluid" alt="Responsive image" style={{width:'300px', height:'300px'}}></img>
        </a>
        <p>This workday scheduler application allows you to create and edit your schedule by the hour. It will allow you to create new tasks throughout the day and each segment will change color based on whether it is currently within that hour or before or after the hour.  </p>
      </div>
      <div>
        <h4>Pet Adoption Assistance</h4>
        <a href='https://jsinc98.github.io/Petadoptionassistance/'>
        <img src='../../images/petadoption.jpg' class="img-fluid" alt="Responsive image" style={{width:'300px', height:'300px'}}></img>
        </a>
        <p>This application uses an api to allow users to search for dogs and cats across North America that are in need of adoption. It provides users with a picture, if available, as well as detailed descriptions of each pet and the contact information available for their shelter. Animals can be searched by either name or breed. </p>
      </div>
      <div>
        <h4>Text Editor PWA</h4>
        <a href='https://github.com/JSinc98/TextEditorPWA'>
        <img src='../../images/texteditor.jpg' class="img-fluid" alt="Responsive image" style={{width:'300px', height:'300px'}}></img>
        </a>
        <p>This text editor application has been modified to allow it to be a progressive web application. It can be downloaded directly onto your desktop or mobile device.</p>
      </div>
      <div>
        <h4>E-Commerce Back End</h4>
        <a href='https://github.com/JSinc98/ECommerceBackend'>
        <img src='../../images/ecommerce.jpg' class="img-fluid" alt="Responsive image" style={{width:'300px', height:'300px'}}></img>
        </a>
        <p>This E-Commerce project allows for back-end control and regulation of inventory for an e-commerce store.</p>
      </div>
      <div>
        <h4>Note-Taker</h4>
        <a href='https://github.com/JSinc98/NoteTaker'>
        <img src='../../images/notetaker.jpg' class="img-fluid" alt="Responsive image" style={{width:'300px', height:'300px'}}></img>
        </a>
        <p>This application allows the user to create, edit, and delete notes.</p>
      </div>
  </div>
  );
}
