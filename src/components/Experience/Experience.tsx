import { Avatar, Box, Container, List, Stack, Text, Timeline, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import ExperienceCard from './ExperienceCard';

import nianticLogo from '/src/assets/logos/niantic.png';
import gtLogo from '/src/assets/logos/gtLogo.png';
import whiteFlower from '/src/assets/white_flower.png';
import pinkButton2 from '/src/assets/pink_button2.png';
import pinkButton3 from '/src/assets/pink_button3.png';

export default function Experience() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const theme = useMantineTheme();

  const listStyles = {
    item: {
      marginBottom: -5,
      marginTop: 5,
      '&:last-of-type': {
        marginBottom: 0,
      },
    },
  };

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
            width: isMobile ? '100%' : '35%' 
          }}
          active={4}
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
              company="Niantic Spatial, Inc."
              title="Software Engineering Intern – Applied Computer Vision Algorithms Team"
              date="May 2026 – August 2026"
              location="San Francisco, CA"
              details=
              { <List 
                    spacing="xs"
                    style={{ width: '95%', marginTop: -8 }}
                    size={isMobile ? "xs" : 'sm'}
                    styles={listStyles}
                  >
                  <List.Item>Designed and implemented a C++ algorithm to compute covisibility-based quality scores for 3D keypoints and filter point clouds, eliminating the need to regenerate maps and reducing redundant mapping costs by over 5×.</List.Item>
                  <List.Item>Built an automated pipeline to generate visualizations to benchmark mapping and localization algorithms, leveraging distributed computing to reduce turnaround time by more than 25% for maps of over 3,000 acres.</List.Item>
                </List>
              }
              value="niantic2026"
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
              title="Head Teaching Assistant"
              date="January 2024 – Present"
              location="Atlanta, GA"
              details=
              {<Box style={{ width: '97%' }}>
                <Stack gap="xs" style={{ marginTop: -10 }}>
                  <Box>
                    <Title order={ isMobile ? 6 : 4 }>CS 3510 – Design & Analysis of Algorithms</Title>
                    <Text style={{fontSize: isMobile ? 12 : 14}}>Head TA</Text>
                    <Text c="dimmed" style={{fontSize: isMobile ? 10 : 14}}>August 2025 – Present</Text>
                    <List
                        spacing="xs"
                        size={isMobile ? "xs" : 'sm'}
                        styles={listStyles}
                      >
                          <List.Item>Lead 20 TAs to deliver a course to 300+ students.</List.Item>
                          <List.Item>Teach advanced topics in algorithms, including graph algorithms, dynamic programming, and complexity theory.</List.Item>
                      </List>
                  </Box>

                  <Box>
                      <Title order={ isMobile ? 6 : 4 }>CS 2110 – Computer Organization & Programming</Title>
                      <Text style={{fontSize: isMobile ? 12 : 14}}>Teaching Assistant</Text>
                      <Text c="dimmed" style={{fontSize: isMobile ? 10 : 14}}>Spring 2025</Text>
                      <List
                        spacing="xs"
                        size={isMobile ? "xs" : 'sm'}
                        styles={listStyles}
                      >
                          <List.Item>Lead weekly labs to teach fundamental concepts in computer architecture, assembly programming, C programming, and memory management.</List.Item>
                          <List.Item>Hosted office hours; designed and graded homework assignments and assessments.</List.Item>
                      </List>
                  </Box>

                  <Box>
                    <Title order={ isMobile ? 6 : 4 }>CS 1331 – Object-Oriented Programming</Title>
                    <Text style={{fontSize: isMobile ? 12 : 14}}>Recitation Lead</Text>
                    <Text c="dimmed" style={{fontSize: isMobile ? 10 : 14}}>Spring 2024 – Fall 2024</Text>
                    <List
                      spacing="xs"
                      size= {isMobile ? "xs" : 'sm'}
                      styles={listStyles}
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
              company="Georgia Institute of Technology"
              title="Undergraduate Researcher"
              date="August 2025 – Present"
              location="Atlanta, GA"
              details=
              { <List 
                    spacing="xs"
                    style={{ width: '95%', marginTop: -8 }}
                    size={isMobile ? "xs" : 'sm'}
                    styles={listStyles}
                  >
                  <List.Item>Design Tesseract, a sparse tensor algebra framework that transforms high-order tensor operations into compositions of pre-compiled, low-order kernels, eliminating the need for a full sparse tensor compiler stack.</List.Item>
                  <List.Item>Engineer a custom run-time interpreter and high-performance algorithms in Python and Julia to automatically permute, reshape, and merge tensors; infer optimal sparse storage formats; and select kernels for execution.</List.Item>
                </List>
              }
              value="research"
              logo={gtLogo}
            />
          </Timeline.Item>
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
              company="Niantic Spatial, Inc."
              title="Software Engineering Intern – Software Development Kit Team"
              date="May 2025 – August 2025"
              location="Bellevue, WA"
              details=
              { <List 
                    spacing="xs"
                    style={{ width: '95%', marginTop: -8 }}
                    size={isMobile ? "xs" : 'sm'}
                    styles={listStyles}
                  >
                  <List.Item>Implemented a Wi-Fi scanning app to collect Wi-Fi and analyze the Wi-Fi topology of the surrounding space.</List.Item>
                  <List.Item>Developed a visual positioning algorithm in Python to improve computer vision localization to large contiguous area maps with Wi-Fi fingerprinting and feature matching.</List.Item>
                  <List.Item>Created an agentic AI application using Model Context Protocol to orchestrate augmented reality and geospatial tools to recommend real estate properties and answer detailed spatial queries about locations and interiors.</List.Item>
                </List>
              }
              value="niantic2025"
              logo={nianticLogo}
            />
          </Timeline.Item>
        </Timeline>
      </Stack>
    </Container>
  );
}