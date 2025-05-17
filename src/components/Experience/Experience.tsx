import { Container, Timeline, Text } from '@mantine/core';
import { IconSun, IconVideo } from '@tabler/icons-react';

export default function Experience() {
    return (
        <Container fluid size="md" bg="var(--mantine-color-blue-light)">
            <Timeline bulletSize={24} active={1}>
                <Timeline.Item title="Default bullet" bullet={<IconSun size={12} />}>
                <Text c="dimmed" size="sm">
                    Default bullet without anything
                </Text>
                </Timeline.Item>
            </Timeline>
        </Container>
    );
}