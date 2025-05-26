import { Button, Container, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { useState } from 'react';

import glass_apple from '/src/assets/glass_apple.png';

export default function Intro() {
  const theme = useMantineTheme();
    const [isHovered, setIsHovered] = useState(false);
  
  return (
    <>
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
            size="xl"
            component="a"
            href="https://jessicaliu06.github.io/resume/LiuJessica_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              borderColor: '#edacb7',
              borderWidth: '2.5px',
              borderRadius: 50,
              color: '#edacb7',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 15, paddingRight: 15
            }}
          >
            <img
              src={glass_apple}
              width={34}
              height={34}
              style={{
                marginRight: '10px',
                animation: isHovered ? 'spin 3s linear infinite' : 'none',
              } as React.CSSProperties}
            />
            Resume
          </Button>
      </Stack>
    </Container>  
    
    <style>
      {`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}
    </style>
    </>
  );
}