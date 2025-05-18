import { Stack, Title, Text } from '@mantine/core';

export default function Footer() {
  return (
    <Stack
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
      <Text pt="sm" pb="sm">
        Thank you for visiting!
      </Text>
    </Stack>
  );
}