import { Button, Container, Stack, Text, Title, useMantineTheme } from '@mantine/core';

export default function Intro() {
  const theme = useMantineTheme();
  
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
        <Title order={1} ta="center">
          Hi, I'm Jessica!
        </Title>

        <Text size="xl" ta="center" lh="1.3" mb="sm">
          I study computer science and mathematics at the Georgia Institute of Technology.
        </Text>

        <Button
          component="a"
          href="https://jessicaliu06.github.io/resume/LiuJessica_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#edacb7',
            color: 'white',             
          }}
        >
          Resume
        </Button>
      </Stack>
    </Container>    
  );
}