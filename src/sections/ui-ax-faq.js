import React from 'react';
import { Box, Container, Flex, Text, Heading , Button } from 'theme-ui';
import { Link } from 'components/link';
import BlockTitle from 'components/block-title';
import Accordion from 'components/accordion/accordion';

const accordionData = [
  {
    isExpanded: false,
    title: 'What is a prototype',
    contents: (
      <div>
       A prototype is a functional demo of what the final product will look , work and feel.  Prototypes help developers fo us on the code , sales & marketing to creating leads and business developers to close parnters. 
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'Why does the basic plan take 40hrs?',
    contents: (
      <div>
        40 hours is should be enough to understand users, thier journey, tasks, pain points and gain and leave us enough room to synthesis the findings into feaurures ane a working protytpe. 
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'What is low vs high fideldelity',
    contents: (
      <div>
   Low fidelity is an internal commuinction tool mean to communicate software requirements to developers on the other hand high fidelity is for non techical stakeholder engagemnt
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How does the sales and payment process work?',
    contents: (
      <div>
       Contact us and place an order, complete our series of questions, make a 50% deposit to kickstart the service then settle the balance upon completion
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Refund policy',
    contents: (
      <div>
       Get a 50% refund if work not is up to par with brief and time schedule
      </div>
    ),
  },
];

const UIUXFAQ = () => {
  return (
    <Box as="section" id="faq">
      <Container>
        <BlockTitle
          title="Frequently Ask Question"
          text="Ask your question and meet"
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          <Box sx={styles.content}>
            <Heading as="h3">
              Do you have any quesiton? Please ask here we ready to support
            </Heading>
            <Text as="p">
              If your question is not list here, please feel free to make a
              manual support.
            </Text>
            <a
						href='https://forms.gle/Vt4YztuCmWNKzqru6'
						ml={2}
						label='Get Technified'
						sx={styles.headerBtn}
						variant='buttons.primary'
					>
					 <Button sx={styles.askButton}>Ask question</Button>
					</a>
          
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default UIUXFAQ;

const styles = {
  flex: {
    flexWrap: 'wrap',
    flexDirection: ['column', null, null, null, null, 'row-reverse'],
    pb: ['70px', null, null, null, '90px', null, '130px'],
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 33.333%'],
    maxWidth: ['100%', null, null, '450px', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['0px', null, null, null, '0'],
    textAlign: ['center', null, null, null, null, 'left'],
    mt: ['40px', null, null, null, null, '0'],
    h3: {
      fontSize: ['23px', null, null, null, '24px'],
      lineHeight: [1.5, null, null, null, 1.67],
      color: 'black',
      fontWeight: 700,
      letterSpacing: '-1.5px',
      mt: '-5px',
      pr: ['0', null, null, null, null, '30px'],
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48',
      opacity: 0.7,
      mt: '10px',
      pr: ['0', null, null, null, null, '80px'],
    },
  },
  askButton: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: '#02073E',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 700,
    p: '6.5px 19px',
    letterSpacing: '-0.16px',
    mt: '25px',
    transition: 'all 500ms ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ['0 0 100%', null, null, null, '0 0 66.666%'],
  },
};
