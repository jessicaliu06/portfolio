import { Container, Grid, List, Stack, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import ProjectCard from './ProjectCard';

import breadboard1 from '/src/assets/projects/breadboard1.png';
import breadboard2 from '/src/assets/projects/breadboard2.png';
import breadboard3 from '/src/assets/projects/breadboard3.png';

export default function Projects() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const theme = useMantineTheme();

  return (
    <Container
      fluid
      id="projects"
      style={{ 
          position: 'relative',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'border-box',
          maxWidth: '100%',
          paddingBottom: '5%'
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
        <Title order={2} style={{ color: theme.colors['celeste'][3] }}>
          Projects
        </Title>

        <Grid w={isMobile ? "90%" : "60%"} justify="center">
          <Grid.Col 
            span={isMobile ? 12 : 12}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <ProjectCard 
              title="Breadboard Bakery"
              img={[ breadboard1, breadboard2, breadboard3 ]}
              description=
              {
                <List
                  spacing="xs"
                  size={'sm'}
                  styles={{
                    item: {
                      marginBottom: -5,
                      marginTop: 10,
                      '&:last-of-type': {
                        marginBottom: 0,
                      },
                    },
                  }}
                >
                    <List.Item>Allows users to upload an image of a wired breadboard with integrated circuit chips and generates a schematic diagram of the circuit.</List.Item>
                    <List.Item>Applies computer vision image processing techniques such as edge detection and contour detection to identify circuit components.</List.Item>
                    <List.Item>Implements a specialized data structure to model the circuit and uses a custom graph algorithm to convert data into Boolean logic expressions.</List.Item>
                </List>
              }
              technologies={['Python', 'OpenCV', 'Flask', 'React']}
              githubUrl="https://github.com/jessicaliu06/breadboard-bakery"
            /> 
          </Grid.Col>         
        </Grid>
      </Stack>
    </Container>
  );
}