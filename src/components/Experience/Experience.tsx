import { Container, List, Stack, Text, Timeline, Title } from '@mantine/core';
import { IconSun, IconVideo } from '@tabler/icons-react';

import ExperienceCard from './ExperienceCard';

import nianticLogo from '/src/assets/niantic.png';
import gtLogo from '/src/assets/gtLogo.png';

export default function Experience() {
  return (
    <Container
      fluid
      id="experience"
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
        <Title order={3}>
          Experience
        </Title>

        <Timeline 
          bulletSize={24}
          style={{ 
            margin: '0 auto', 
            width: '35%',
            '@media (max-width: 600px)': {
              width: '90%'      
            }     
          }}
          
        >
          <Timeline.Item>
            <ExperienceCard
              company="Niantic Spatial"
              title="Software Engineering Intern"
              date="May 2025 – August 2025"
              location="Seattle, WA"
              details=
              {<List spacing="xs" size="sm">
                <List.Item>Niantic Augmented Reality SDK</List.Item>
              </List>}
              value="niantic"
              logo={nianticLogo}
            />
          </Timeline.Item>
          <Timeline.Item>
            <ExperienceCard
              company="Georgia Institute of Technology"
              title="Undergraduate Teaching Assistant"
              date="May 2024 – Present"
              location="Atlanta, GA"
              details=
              {<Timeline bulletSize={16} lineWidth={3.5} style={{ marginTop: 10 }}>
                <Timeline.Item title="CS 3510 – Design & Analysis of Algorithms">
                  <Text c="dimmed" size="sm"> August 2025 – Present </Text>
                </Timeline.Item>
                <Timeline.Item title="CS 2110 – Computer Organization & Programming">
                  <Text c="dimmed" size="sm"> January 2025 – May 2025 </Text>
                  <List 
                    spacing="xs"
                    size="sm"
                    styles={{
                      item: {
                        marginBottom: -5,
                        marginTop: 5,
                        '&:last-of-type': {
                          marginBottom: -5,
                        },
                      },
                    }}
                  >
                    <List.Item>Lead weekly labs to teach fundamental concepts in computer architecture, assembly programming, C programming, and memory management.</List.Item>
                    <List.Item>Hosted office hours for 800+ students; designed and graded homework assignments and assessments.</List.Item>
                  </List>
                </Timeline.Item>
                <Timeline.Item title="CS 1331 – Object-Oriented Programmming">
                  <Text size="md"> Recitation Lead </Text>
                  <Text c="dimmed" size="sm"> January 2024 – December 2024 </Text>
                  <List 
                    spacing="xs"
                    size="sm"
                    styles={{
                      item: {
                        marginBottom: -5,
                        marginTop: 5,
                        '&:last-of-type': {
                          marginBottom: -5,
                        },
                      },
                    }}
                  >
                    <List.Item>Developed original teaching strategies, materials, and exercises for continued use across future semesters.</List.Item>
                    <List.Item>Teach weekly recitations to reinforce understanding of object-oriented programming principles.</List.Item>
                    <List.Item>Held six office hours per week to provide individual instruction and debugging help.</List.Item>
                  </List>
                </Timeline.Item>
              </Timeline>}
              value="ta"
              logo={gtLogo}
            />
          </Timeline.Item>
        </Timeline>
      </Stack>

    </Container>
  );
}