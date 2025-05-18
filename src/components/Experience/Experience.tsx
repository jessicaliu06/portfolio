import { Stack, Title, Text } from '@mantine/core';

export default function Experience() {
  return (
    <Stack
      h={200}
      bg="var(--mantine-color-body)"
      align="center"
      justify="center"
      w="100%"
      style={{
        boxSizing: 'border-box',
        maxWidth: '100vw',
        padding: 0,
        margin: 0,
      }}
    >
        <Title order={1}>
            Experience
        </Title>

       <Text>
            Under construction
        </Text>
    </Stack>
  );
}