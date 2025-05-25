import { Stack, Title, Text } from '@mantine/core';
import { IconSparkles } from '@tabler/icons-react';

interface FooterHeight {
  footerHeight: number | null;
}

export default function Footer({ footerHeight }: FooterHeight) {
  return (
    <Stack
      align="center"
      justify="center"
      w="100%"
      style={{
        boxSizing: 'border-box',
        maxWidth: '100%',
        height: footerHeight ? `${footerHeight}px` : 'auto',
        padding: 0,
        margin: 0,
      }}
    >
      <Text pt="sm" pb="sm">
        Thank you for visiting! ♡
      </Text>
    </Stack>
  );
}