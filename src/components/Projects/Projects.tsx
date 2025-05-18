import { Stack, Title, Text } from '@mantine/core';

export default function Projects() {
  return (
    <Stack
      h={200}
      bg="var(--mantine-color-body)"
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
        <Title order={1}>
            Projects
        </Title>

        <Text>
            Under construction
        </Text>
    </Stack>
  );
}