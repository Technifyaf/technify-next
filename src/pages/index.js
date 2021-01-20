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
import Projects from 'sections/projects';
import Training from 'sections/training';
import Positioning from 'sections/positioning';
import Founder from 'sections/founder';
import Foundation from 'sections/foundation';
import Works from 'sections/works';
import bannerImg from 'assets/banner-image-1-1.png';

/// <VideoOne />
////<Testimonials />

export default function IndexPage() {
	return (
		<ThemeProvider theme={theme}>
			<StickyProvider>
				<Layout>
					<SEO title='Technify Africa solutions'
						description = " Africa's reliable and remote technical support for non-technical teams"
						image = {bannerImg}/>
					<Banner />
					<Services />

					<BoostAgencies />
					<CustomerSupport />
					<Projects />
					
					<Works />

					<Founder />
					<Feature />
					<CallToAction />
				</Layout>
			</StickyProvider>
		</ThemeProvider>
	);
}
