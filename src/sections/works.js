import React from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Image from 'components/image';
import { Link } from 'components/link';
import icon1 from 'assets/mclogo.png';
import icon2 from 'assets/goodtimes.png';
import icon3 from 'assets/lapis.png';
import icon4 from 'assets/icons/truck.svg';

const SERVICES_DATA = [
	{
		icon: icon1,
		title: 'Construction',
		text: 'A borehole drilling company based in Lesotho',
		path: 'http://www.morethetho.co.ls/ ',
	},
	{
		icon: icon2,
		title: 'Hospitality',
		text: ' A premium restaurant and cafe in Lesotho',
		path: ' https://good-times-cafe.myshopify.com/',
	},
	

	{
		icon: icon3,
		title: 'Hospitality',
		text: ' A premium restaurant and cafe in Lesotho',
		path: 'https://lapis-lazuli-lesotho.myshopify.com/',
	},

];

const Works = () => {
	return (
		<Box sx={styles.services} id='works'>
			<Container>
				<BlockTitle
					slogan='Quality services'
					title='Our works'
					styles={styles.blockTitle}
				/>
				<Grid sx={styles.grid}>
					{SERVICES_DATA.map((service, index) => (
						<Box
							className='service-card'
							sx={styles.serviceCard}
							key={`service-post-${index}`}
						>
							<a href={service.path}>
								<Box className='service-icon' >
									<Image src={service.icon}  width ="200" alt='' />
								</Box>
								<Heading as='h3'>{service.title}</Heading>
								<Text as='p'>{service.text}</Text>
							</a>
						</Box>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Works;

const styles = {
	services: {
		pt: ['80px', null, null, null, null, null, '140px'],
		'.service-card:nth-of-type(0)': {
			'.service-icon': {
				backgroundImage:
					'linear-gradient(320.89deg, #25D9D9 10.83%, rgba(37, 217, 217, 0.5) 88.7%)',
			},
		},
		'.service-card:nth-of-type(0)': {
			'.service-icon': {
				backgroundImage:
					'linear-gradient(319.4deg, #0898E7 5.17%, rgba(8, 152, 231, 0.5) 94.34%)',
			},
		},
		'.service-card:nth-of-type(0)': {
			'.service-icon': {
				backgroundImage:
					'linear-gradient(322.63deg, #FF9066 9.94%, rgba(255, 144, 102, 0.5) 91.14%)',
			},
		},
	},
	blockTitle: {
		textAlign: 'center',
	},
	grid: {
		display: 'grid',
		gridGap: ['30px', null, null, null, null, '60px'],
		gridTemplateColumns: [
			'1fr',
			null,
			null,
			'1fr 1fr',
			null,
			'1fr 1fr 1fr 1fr',
		],
	},
	icon: {
		display: 'flex',
		ml: 'auto',
		mr: 'auto',
		width: ['80px', null, null, '110px'],
		height: ['80px', null, null, '110px'],
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: ['20px', null, null, '40px'],
		backgroundImage:
			'linear-gradient(323.91deg, #FFCC40 7.09%, rgba(255, 204, 64, 0.5) 88.82%)',
	},
	serviceCard: {
		textAlign: 'center',
		h3: {
			margin: 0,
			fontSize: ['18px', null, null, 3],
			fontWeight: 'bold',
			lineHeight: 1,
			color: 'black',
			mt: ['30px', null, null],
			mb: ['20px', null, null],
		},
		p: {
			margin: 0,
			fontSize: [0, null, null, '15px'],
			color: 'heading_secondary',
			width: '100%',
			maxWidth: [null, null, null, null, '84%', '100%'],
			mx: [null, null, null, null, 'auto', '0'],
		},
	},
};
