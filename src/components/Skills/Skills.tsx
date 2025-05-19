import { Container, Stack, Text, Title } from '@mantine/core';

export default function Skills() {
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
          paddingBottom: '25%'
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
          Skills
        </Title>
        <Text>
          Under construction
        </Text>
      </Stack>
    </Container>
  );
}