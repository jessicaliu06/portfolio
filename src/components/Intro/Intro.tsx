import { Stack, Title, Text } from '@mantine/core';

export function Intro() {
  return (
    <Stack h={300} bg="var(--mantine-color-body)" align="center" justify="center" gap="md">
       <Title order={1}>
            Hi, I'm Jessica!
        </Title>

       <Text>
            Under construction
        </Text>
    </Stack>
  );
}