import { Timeline, Text } from '@mantine/core';
import { IconSun, IconVideo } from '@tabler/icons-react';

export default function Experience() {
    return (
        <Timeline bulletSize={24}>
            <Timeline.Item title="Default bullet">
                <Text c="dimmed" size="sm">
                    Default bullet without anything
                </Text>
            </Timeline.Item>
        </Timeline>
    );
}