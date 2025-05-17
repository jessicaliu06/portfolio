import { Container } from '@mantine/core';

import { Intro } from '../components/Intro/Intro';
import Experience from '../components/Experience/Experience';

export function HomePage() {
  return (
    <Container fluid>
      <Intro />
      {/* <Experience /> */}
    </Container>
  );
}