import { Avatar, Box, Container, List, Stack, Text, Timeline, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import ExperienceCard from './ExperienceCard';

import nianticLogo from '/src/assets/logos/niantic.png';
import gtLogo from '/src/assets/logos/gtLogo.png';
import alphaModelsLogo from '/src/assets/logos/alphaModelsLogo.png';
import whiteFlower from '/src/assets/white_flower.png';
import pinkButton2 from '/src/assets/pink_button2.png';
import pinkButton3 from '/src/assets/pink_button3.png';

export default function Experience() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const theme = useMantineTheme();

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
        <Title order={2} style={{ color: theme.colors['light-coral'][3] }}>
          Experience
        </Title>

        <Timeline 
          bulletSize={24}
          style={{ 
            margin: '0 auto', 
            width: useMediaQuery('(max-width: 768px)') ? '100%' : '35%' 
          }}
          active={3}
          color={theme.colors['fairy-tale'][1]}
        >
          <Timeline.Item
            bullet={
              <Avatar
                size={32}
                radius="xl"
                src={whiteFlower}
              />
            }
          >
            <ExperienceCard
              company="Niantic Spatial"
              title="Software Engineering Intern"
              date="May 2025 – August 2025"
              location="Seattle, WA"
              details=
              { <List 
                    spacing="xs"
                    style={{ width: '95%' }}
                    size={isMobile ? "xs" : 'sm'}
                    styles={{
                      item: {
                        marginBottom: -5,
                        marginTop: 5,
                        '&:last-of-type': {
                          marginBottom: 0,
                        },
                      },
                    }}
                  >
                  <List.Item>Implemented a Wi-Fi scanning app to collect Wi-Fi and analyze the Wi-Fi topology of the surrounding space.</List.Item>
                  <List.Item>Developed a visual positioning algorithm in Python to improve computer vision localization to large contiguous area maps with Wi-Fi fingerprinting and feature matching.</List.Item>
                  <List.Item>Created an agentic AI application using Model Context Protocol to orchestrate augmented reality and geospatial tools to recommend real estate properties and answer detailed spatial queries about locations and interiors.</List.Item>
                </List>
              }
              value="niantic"
              logo={nianticLogo}
            />
          </Timeline.Item>
          <Timeline.Item
            bullet={
              <Avatar
                size={32}
                radius="xl"
                src={pinkButton3}
              />
            }
          >
            <ExperienceCard
              company="Georgia Institute of Technology"
              title="Undergraduate Teaching Assistant"
              date="May 2024 – Present"
              location="Atlanta, GA"
              details=
              {<Box style={{ width: '97%' }}>
                <Stack style={{ marginTop: -5 }}>
                  <Box>
                    <Title order={ isMobile ? 6 : 4 }>CS 3510 – Design & Analysis of Algorithms</Title>
                    <Text c="dimmed" style={{fontSize: isMobile ? 10 : 14}}>August 2025 – Present</Text>
                    <List
                        spacing="xs"
                        size={isMobile ? "xs" : 'sm'}
                        styles={{
                          item: {
                            marginBottom: -5,
                            marginTop: 5,
                            '&:last-of-type': {
                              marginBottom: 0,
                            },
                          },
                        }}
                      >
                          <List.Item>Teach advanced topics in algorithms, including graph algorithms, dynamic programming, and complexity theory.</List.Item>
                          <List.Item>Host office hours for classes of 600+ students.</List.Item>
                      </List>
                  </Box>

                  <Box>
                      <Title order={ isMobile ? 6 : 4 }>CS 2110 – Computer Organization & Programming</Title>
                      <Text c="dimmed" style={{fontSize: isMobile ? 10 : 14}}>January 2025 – May 2025</Text>
                      <List
                        spacing="xs"
                        size={isMobile ? "xs" : 'sm'}
                        styles={{
                          item: {
                            marginBottom: -5,
                            marginTop: 5,
                            '&:last-of-type': {
                              marginBottom: 0,
                            },
                          },
                        }}
                      >
                          <List.Item>Lead weekly labs to teach fundamental concepts in computer architecture, assembly programming, C programming, and memory management.</List.Item>
                          <List.Item>Hosted office hours; designed and graded homework assignments and assessments.</List.Item>
                      </List>
                  </Box>

                  <Box>
                    <Title order={ isMobile ? 6 : 4 }>CS 1331 – Object-Oriented Programming</Title>
                    <Text style={{fontSize: isMobile ? 12 : 14}}>Recitation Lead</Text>
                    <Text c="dimmed" style={{fontSize: isMobile ? 10 : 14}}>January 2024 – December 2024</Text>
                    <List
                      spacing="xs"
                      size= {isMobile ? "xs" : 'sm'}
                      styles={{
                        item: {
                          marginBottom: -5,
                          marginTop: 5,
                          '&:last-of-type': {
                            marginBottom: 0,
                          },
                        },
                      }}
                    >
                      <List.Item>Developed original teaching strategies, materials, and exercises for continued use across future semesters.</List.Item>
                      <List.Item>Taught weekly recitations to reinforce understanding of object-oriented programming principles.</List.Item>
                      <List.Item>Held six office hours per week to provide individual instruction and debugging help.</List.Item>
                    </List>
                  </Box>
                </Stack>
              </Box>}
              value="ta"
              logo={gtLogo}
            />
          </Timeline.Item>
          <Timeline.Item
            bullet={
              <Avatar
                size={32}
                radius="xl"
                src={pinkButton2}
              />
            }
          >
            <ExperienceCard
              company="Alpha Models Inc."
              title="Software Engineering Intern"
              date="May 2022 – August 2022"
              location="Alpharetta, GA"
              details=
              { <List 
                    spacing="xs"
                    style={{ width: '95%' }}
                    size={isMobile ? "xs" : 'sm'}
                    styles={{
                      item: {
                        marginBottom: -5,
                        marginTop: 5,
                        '&:last-of-type': {
                          marginBottom: 0,
                        },
                      },
                    }}
                  >
                  <List.Item>Devised an algorithmic C++ approach to the Traveling Salesman Problem to plan freight railroad maintenance.</List.Item>
                  <List.Item>Developed Java simulations to model railroad yard operations and optimize carrier labor and fuel expenses.</List.Item>
                  <List.Item>Studied business policies, operational constraints, and government regulations in the railroad transportation.</List.Item>
                </List>
              }
              value="alphaModels"
              logo={alphaModelsLogo}
            />
          </Timeline.Item>
        </Timeline>
      </Stack>
    </Container>
  );
}