import { Box, Card, Group, Image, Text, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

interface ExperienceCardProps {
  name: string;
  img: string;
}

export default function SkillCard({
  name,
  img
}: ExperienceCardProps) {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <Grid.Col span={isMobile ? 6 : 4}>
            <Card
                shadow="sm"
                padding="5"
                radius="md"
                withBorder
                style={{
                    width: '100%',
                    boxSizing: 'border-box',
                }}
            >
                <Group wrap="nowrap">
                    <Box style={{ height: 35, width: 35, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image src={img} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                    </Box>
                    <Text ta="left" style={{ flex: 1, fontWeight: '500' }}>
                        { name }
                    </Text>
                </Group>
            </Card>
        </Grid.Col>
        
    );
}