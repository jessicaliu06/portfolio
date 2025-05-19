import { Container, Stack, Text, Title } from '@mantine/core';

export default function Projects() {
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
        <Title order={3}>
          Projects
        </Title>
        <Text>
          Under construction
        </Text>
      </Stack>
    </Container>
  );
}