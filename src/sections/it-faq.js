import React from 'react';
import { Box, Container, Flex, Text, Heading ,Button } from 'theme-ui';
import { Link } from 'components/link';
import BlockTitle from 'components/block-title';
import Accordion from 'components/accordion/accordion';

const accordionData = [
  {
    isExpanded: false,
    title: 'Can I put together my own package and how much would it cost?',
    contents: (
      <div>
        Yes, our baseline for supoort is R250 per hour so think carefully  about the type of support you need.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'Is support given remotely or onsite',
    contents: (
      <div>
        It varies, but for the most part support will be given remotely via , zoom.
      </div>
    ),
  },
  
];

const ITFAQ = () => {
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

export default ITFAQ;

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
