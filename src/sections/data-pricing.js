import React, { useState } from 'react';
import { keyframes } from '@emotion/core';
import { Box, Container, Grid, Button, Text } from 'theme-ui';
import BlockTitle from 'components/block-title';
import PriceCard from 'components/cards/price-card';
import priceIcon1 from 'assets/price-user-1-1.svg';
import priceIcon2 from 'assets/price-user-1-2.svg';

const PRICE_MONTHLY_DATA = [
  {
    recommended: null,
    title: 'Starter Pack',
    icon: priceIcon1,
    amount: 'R399/hr',
    options: [
      {
        status: true,
        label: '36 Graphic design banners ',
      },
      {
        status: true,
        label:
          ' 6 hours of photography',
      },
      {
        status: true,
        label: '3 Social media channels admistration and strategy support',
      },
      {
        status: true,
        label: '48 hours of social media engagement',
      },
      {
        status: true,
        label: '36 Social media newsfeed posts',
      },
      {
        status: true,
        label: '12 newsletter updates',
      },
    ],
  },
  {
    recommended: 'Recommended',
    title: 'Growth pack',
    icon: priceIcon2,
    amount: 'R499/hr',
    options: [
      {
        status: true,
        label: 'Unlimited graphic design content',
      },
      {
        status: true,
        label:
          '12 hours of videography.',
      },
      {
        status: true,
        label: '6 hours of photography',
      },
      {
        status: true,
        label: '3 Social media channels admistration ',
      },
      {
        status: true,
        label: 'Youtube channel admnistration and strategy support',
      },
      {
        status: true,
        label: '96 hours of online engagement',
      },
    ],
  },
];

const PRICE_YEARLY_DATA = [
  {
    recommended: null,
    title: 'For Team pack',
    icon: priceIcon1,
    amount: 'R299.99/mo',
    options: [
      {
        status: true,
        label: 'Ultimate access to all course, exercises and assessments',
      },
      {
        status: true,
        label:
          'Free access for all kind of exercise corrections with downloads.',
      },
      {
        status: true,
        label: 'Total assessment corrections with free download access system',
      },
      {
        status: false,
        label: 'Unlimited download of courses on the mobile app contents',
      },
      {
        status: false,
        label: 'Download and print courses and exercises in PDF',
      },
    ],
  },
  {
    recommended: 'Recommended',
    title: 'For Organization pack',
    icon: priceIcon2,
    amount: 'R399.99/mo',
    options: [
      {
        status: true,
        label: 'Ultimate access to all course, exercises and assessments',
      },
      {
        status: true,
        label:
          'Free access for all kind of exercise corrections with downloads.',
      },
      {
        status: true,
        label: 'Total assessment corrections with free download access system',
      },
      {
        status: true,
        label: 'Unlimited download of courses on the mobile app contents',
      },
      {
        status: true,
        label: 'Download and print courses and exercises in PDF',
      },
    ],
  },
];

const DataPricing = () => {
  const [plan, setPlan] = useState({
    active: 'hourly',
    pricingPlan: PRICE_MONTHLY_DATA,
  });

  const handlePlan = (plan) => {
    if (plan === 'hourly') {
      setPlan({
        ...plan,
        active: 'hourly',
        pricingPlan: PRICE_MONTHLY_DATA,
      });
    }
    if (plan === 'monthly') {
      setPlan({
        ...plan,
        active: 'monthly',
        pricingPlan: PRICE_YEARLY_DATA,
      });
    }
  };
  return (
    <Box as="section" id="pricing" sx={styles.pricing}>
      <Container>
        <BlockTitle
          title="What deal suit you perfect"
          text="Meet our pricing plan"
        />
        <Box sx={styles.btnWrap}>
          <Button
            onClick={() => handlePlan('hourly')}
            className={`${plan.active === 'hourly' ? 'active' : ''}`}
          >
            Hourly Plan
          </Button>
          <Button
            onClick={() => handlePlan('monthly')}
            className={`${plan.active === 'monthly' ? 'active' : ''}`}
          >
            Monthly Plan
          </Button>
        </Box>
        <Grid sx={styles.grid}>
          {plan.pricingPlan.map((price, index) => (
            <PriceCard data={price} key={`${plan.active}-card--key${index}`} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DataPricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  pricing: {
    pt: ['200px', null, null, null, '200px', null, '240px'],
    pb: ['80px', null, null, null, '80px', '100px', '140px'],
  },
  btnWrap: {
    width: '302px',
    height: '60px',
    mt: ['-20px', null, null, '0px'],
    mb: ['40px', null, null, '60px'],
    backgroundColor: '#F7F8FB',
    borderRadius: '5px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    p: '7px',
    mx: 'auto',
    button: {
      backgroundColor: 'rgba(0,0,0,0)',
      borderRadius: '5px',
      color: '#0F2137',
      letterSpacing: '-0.24px',
      fontSize: '16px',
      fontWeight: 500,
      position: 'relative',
      outline: 'none',
      fontFamily: 'DM Sans',
      transition: 'all 500ms ease',
      '&.active': {
        boxShadow: '0px 3px 3.8px rgba(38, 78, 118, 0.1)',
        backgroundColor: '#ffffff',
      },
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0)',
      },
    },
  },
  grid: {
    width: '100%',
    maxWidth: '960px',
    mx: ['auto'],
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
