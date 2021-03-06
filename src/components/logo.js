/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/technify.png';
import { Box, Container, Grid, Button, Input, Heading, Text } from 'theme-ui';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
  <Image src={logo} sx={{ display: 'flex' }} width ="50"alt="startup landing logo" />
   </Link>
  );
}
