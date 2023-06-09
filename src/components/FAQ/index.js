import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  FaqContainer,
  HeroSection,
  HeroText,
  HeroSubText,
  FaqWrapper,
  FaqItem,
  FaqHeader,
  FaqBody
} from './FaqElements';
import faqs from './faqs.json';
import Footer from '../Footer';

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <FaqContainer>
        <HeroSection>
          <HeroText>FAQ</HeroText>
          <HeroSubText>
            Here are some questions I felt were important to have info for.
            <br />
            <br />
            If you have any other questions, feel free to reach out to me!
          </HeroSubText>
        </HeroSection>
        <FaqWrapper>
          {faqs.map((faq, index) => (
            <FaqItem key={index} onClick={() => setSelectedFaq(index)}>
              <FaqHeader>{faq.question}</FaqHeader>
              {
                selectedFaq === index &&
                <FaqBody>
                  {faq.answer}&ensp;
                  {faq.link &&
                    <a href={faq.link} target="_blank" rel="noopener noreferrer">
                      {faq.linkText}
                    </a>
                  }
                </FaqBody>
              }
            </FaqItem>
          ))}
        </FaqWrapper>
      </FaqContainer>
      <Footer />
    </>
  );
};

export default Faq;
