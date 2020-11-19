/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/logo.svg';
import { Box, Container, Grid, Button, Input, Heading, Text } from 'theme-ui';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
<Heading as="h3">
Technify  </Heading>    </Link>
  );
}
