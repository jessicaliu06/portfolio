import { Container, Grid, Stack, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { useRef, useEffect, useState } from 'react';

import SkillCard from './SkillCard';
import Backpack from '../Backpack/Backpack';

import java from '/src/assets/skills/java.svg';
import c from '/src/assets/skills/c.svg';
import cplusplus from '/src/assets/skills/cplusplus.svg';
import csharp from '/src/assets/skills/csharp.svg';
import python from '/src/assets/skills/python.svg';
import react from '/src/assets/skills/react.svg';
import unity from '/src/assets/skills/unity.svg';
import typescript from '/src/assets/skills/typescript.svg';
import latex from '/src/assets/skills/latex.svg';
import mysql from '/src/assets/skills/mysql.svg';
import firebase from '/src/assets/skills/firebase.svg';
import git from '/src/assets/skills/git.svg';

export default function Skills() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const theme = useMantineTheme();

  const skillsHeaderRef = useRef<HTMLHeadingElement>(null);
  const [skillsTriggerY, setSkillsTriggerY] = useState<number | null>(null);

  useEffect(() => {
    const updateTriggerY = () => {
      if (skillsHeaderRef.current) {
        const rect = skillsHeaderRef.current.getBoundingClientRect();
        const scrollY = window.scrollY || window.pageYOffset;
        const triggerPosition = scrollY + rect.top;
        setSkillsTriggerY(triggerPosition);
      }
    };

    updateTriggerY();
    window.addEventListener('resize', updateTriggerY);
    window.addEventListener('scroll', updateTriggerY);

    return () => {
      window.removeEventListener('resize', updateTriggerY);
      window.removeEventListener('scroll', updateTriggerY);
    };
  }, []);

  return (
    <Container
      fluid
      id="skills"
      style={{ 
          position: 'relative',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'border-box',
          maxWidth: '100%',
      }}
    >
      <Stack
        align="center"
        justify="center"
        w="100%"
        style={{
          boxSizing: 'border-box',
          maxWidth: '100%',
          padding: 0,
          margin: 0,
        }}
      >
        <Title order={2} ref={skillsHeaderRef} style={{ color: theme.colors['mantis'][5] }}>
          Skills
        </Title>
        
        <Grid w={isMobile ? "90%" : "35%"}>
          <SkillCard name="C" img={c} />
          <SkillCard name="C++" img={cplusplus} />
          <SkillCard name="C#" img={csharp} />
          <SkillCard name="Java" img={java} />
          <SkillCard name="Python" img={python} />
          <SkillCard name="Unity" img={unity} />          
          <SkillCard name="LaTeX" img={latex} /> 
          <SkillCard name="TypeScript" img={typescript} />
          <SkillCard name="React" img={react} />    
          <SkillCard name="MySQL" img={mysql} /> 
          <SkillCard name="Firebase" img={firebase} />
          <SkillCard name="Git" img={git} />                
        </Grid>

        <div style={{ height: isMobile ? 40 : 64 }} />
        <Backpack triggerY={skillsTriggerY} />
      </Stack>
    </Container>
  );
}