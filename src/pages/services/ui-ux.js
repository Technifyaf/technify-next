import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import Banner from 'sections/banner';
import Services from 'sections/services';
import Testimonials from 'sections/works';
import CustomerSupport from 'sections/customer-support';
import Feature from 'sections/feature';
import VideoOne from 'sections/video-one';
import CallToAction from 'sections/call-to-action';
import BoostAgencies from 'sections/boost-agencies';
import Projects from 'sections/projects'
import Training from 'sections/training'
import Positioning from 'sections/positioning';
import Founder from 'sections/founder';
import CreativeSupport from 'sections/creative-support';
import Pricing from 'sections/creative-pricing';
import CreativeSupportLayout from 'components/creative-support-layout';
import FAQ from 'sections/faq';

import CodingPricing from 'sections/coding-pricing';
import UIUXSupport from 'sections/ui-ux-support';
import UIUXPricing from 'sections/ui-ux-pricing';
import UIUXFAQ from 'sections/ui-ax-faq';



export default function myService() {
    return ( <ThemeProvider theme={theme}>
        <StickyProvider>
          <CreativeSupportLayout>
            <SEO title="Technify Africa solutions" />
            <UIUXSupport />
            <UIUXPricing/>
            <UIUXFAQ/>
           
          </CreativeSupportLayout>
        </StickyProvider>
      </ThemeProvider>)
  }