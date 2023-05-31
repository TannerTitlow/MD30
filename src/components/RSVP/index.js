import React from 'react';
import {
  Container,
  FormWrap,
  Icon,
  BackIcon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
} from './RsvpElements';

const Rsvp = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>
            <BackIcon />
          </Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Join the email list</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormButton type='submit'>RSVP</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Rsvp;
