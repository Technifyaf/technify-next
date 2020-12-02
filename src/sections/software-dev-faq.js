import React from 'react';
import { Box, Container, Flex, Text, Heading,Button } from 'theme-ui';
import { Link } from 'components/link';
import BlockTitle from 'components/block-title';
import Accordion from 'components/accordion/accordion';

const accordionData = [
  {
    isExpanded: false,
    title: 'How is time monitored?',
    contents: (
      <div>
       We use task and time trackers to keep track of the time we spent on client tasks.                                                                            
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'How do you exceute the work?',
    contents: (
      <div>
      We understand the client's needs, assemble a team, estabilsh a communication plan.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How you do code handoff',
    contents: (
      <div>
       All your source code is stored in your github account, which we control until full payment is done, then we handover control and we become your tech support
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How does the payment process work',
    contents: (
      <div>
      Project is broken into milestones and payments made per mile stone until work is complete.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How do I get the payment complete?',
    contents: (
      <div>
        Payments are made to Technify only via EFT, do not make payments to any Technify representative.
      </div>
    ),
  },
];

const SDFAQ = () => {
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

export default SDFAQ;

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
