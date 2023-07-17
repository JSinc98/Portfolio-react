import React from 'react';
import workdayScheduler from '../../images/workday.jpg';
import ecomm from '../../images/ecommerce.jpg';
import pet from '../../images/petadoption.jpg';
import note from '../../images/notetaker.jpg';
import textEdit from '../../images/texteditor.jpg';
import './projects.css';


export default function Projects() {
  return (
    <div className='projectlist'>
      <div>
      <h1>Project Page</h1>
      </div>
      <div className='workd'>
        <h4>Workday Scheduler</h4>
        <a href='https://jsinc98.github.io/Workdayscheduler/'>
        <img src={workdayScheduler} class="img-fluid" alt="Responsive image"></img>
        </a>
        <p>This workday scheduler application allows you to create and edit your schedule by the hour. It will allow you to create new tasks throughout the day and each segment will change color based on whether it is currently within that hour or before or after the hour.  </p>
      </div>
      <div className='adopt'>
        <h4>Pet Adoption Assistance</h4>
        <a href='https://jsinc98.github.io/Petadoptionassistance/'>
        <img src={pet} class="img-fluid" alt="Responsive image"></img>
        </a>
        <p>This application uses an api to allow users to search for dogs and cats across North America that are in need of adoption. It provides users with a picture, if available, as well as detailed descriptions of each pet and the contact information available for their shelter. Animals can be searched by either name or breed. </p>
      </div>
      <div className='pwa'>
        <h4>Text Editor PWA</h4>
        <a href='https://github.com/JSinc98/TextEditorPWA'>
        <img src={textEdit} class="img-fluid" alt="Responsive image"></img>
        </a>
        <p>This text editor application has been modified to allow it to be a progressive web application. It can be downloaded directly onto your desktop or mobile device.</p>
      </div>
      <div className='ecomm'>
        <h4>E-Commerce Back End</h4>
        <a href='https://github.com/JSinc98/ECommerceBackend'>
        <img src={ecomm} class="img-fluid" alt="Responsive image"></img>
        </a>
        <p>This E-Commerce project allows for back-end control and regulation of inventory for an e-commerce store.</p>
      </div>
      <div className='notes'>
        <h4>Note-Taker</h4>
        <a href='https://github.com/JSinc98/NoteTaker'>
        <img src={note} class="img-fluid" alt="Responsive image"></img>
        </a>
        <p>This application allows the user to create, edit, and delete notes.</p>
      </div>
  </div>
  );
}
