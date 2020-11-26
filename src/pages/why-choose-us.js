import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Pricing from 'sections/creative-pricing';
import CreativeSupportLayout from 'components/creative-support-layout';
import FAQ from 'sections/faq';
import DataSupport from 'sections/data-support';
import HourlyPricing from 'sections/hourly-pricing';
import AboutUS from 'sections/about-us';
import VideoOne from 'sections/video-one';



export default function myService() {
    return ( <ThemeProvider theme={theme}>
        <StickyProvider>
          <CreativeSupportLayout>
            <SEO title="Technify Africa solutions" />
            <AboutUS />
           
            <VideoOne/>
           
          </CreativeSupportLayout>
        </StickyProvider>
      </ThemeProvider>)
  }