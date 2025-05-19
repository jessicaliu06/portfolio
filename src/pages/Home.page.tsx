import { Container } from '@mantine/core';

import Header from '../components/Header/Header';
import Intro from '../components/Intro/Intro';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Backpack from '../components/Backpack/Backpack';
import Footer from '../components/Footer/Footer';

export function HomePage() {
  return (
    <Container
      fluid
      px={0}
      style={{
        width: '100%',
        margin: 0,
        padding: 0,
        maxWidth: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Header />
      <Intro />
      <Experience />
      <Projects />
      <Skills />
      <Backpack />
      <Footer />
    </Container>    
  );
}