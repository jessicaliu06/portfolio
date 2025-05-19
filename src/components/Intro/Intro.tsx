import { Container, Stack, Title, Text } from '@mantine/core';

export default function Intro() {
  return (
    <Container
      fluid
      id="intro"
      style={{ 
          position: 'relative',
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'border-box',
      }}
    >
      <Stack
        align="center"
        justify="center"
        w="100%"
        h="100%"
        style={{
          boxSizing: 'border-box',
          maxWidth: '100%',
          height: "100%",
        }}
      >
        <Title order={1}>
          Hi, I'm Jessica!
        </Title>

        <Text>
          Under construction
        </Text>
      </Stack>
    </Container>    
  );
}