import React from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from '@emailjs/browser';
import './contact.css';
import './App.css';


const SERVICE_ID = "service_i7aq82n";
const TEMPLATE_ID = "template_ah7bxue";
const USER_ID = "vfyANDImZI1g10HSW";

const handleOnSubmit = (e) => {
  e.preventDefault();
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  e.target.reset()
};

export default function Contact() {
  return (
    <div className='contact'>
    <div className='App'>
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
        <Button type='submit' color='green'>Submit</Button>
      </Form>
    </div>
    </div>
  );
}
