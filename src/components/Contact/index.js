import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { validateEmail } from '../../utils/helpers';
import Container from 'react-bootstrap/Container';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <Container fluid style = {{margin:"0 auto"}} className = "p-4">
      <Form style = {{maxWidth: "80%" , boxShadow: "5px 5px 2px #888888" , margin: "0 auto" , border: "1px solid grey"}} className="p-4">
        <Form.Group>
          <h3 data-testid="h1tag">Contact me</h3>
          <div>
            <Form.Label htmlFor="name">Name:</Form.Label>
            <Form.Control type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
          <div>
            <Form.Label htmlFor="email">Email address:</Form.Label>
            <Form.Control type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </div>
          <div>
            <Form.Label htmlFor="message">Message:</Form.Label>
            <Form.Control name="message" rows="5" defaultValue={message} onBlur={handleChange} />
          </div>

          {errorMessage && (
            <div>
              <Form.Text className="error-text">{errorMessage}</Form.Text>
            </div>
          )}
          <Button data-testid="button" type="submit"  className="mt-3">Submit</Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Contact;
