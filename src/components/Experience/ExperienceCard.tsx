import { Accordion, Box, Card, Grid, Image, List, Stack, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

interface ExperienceCardProps {
  company: string;
  title: string;
  date: string;
  location: string;
  details: React.ReactNode;
  value: string;
  logo: string;
}

export default function ExperienceCard({
  company,
  title,
  date,
  location,
  details,
  value,
  logo
}: ExperienceCardProps) {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <Card
            shadow="sm"
            padding="0"
            radius="md"
            withBorder
            style={{
                width: '100%',
                boxSizing: 'border-box',
            }}
        >
            <Box style={{ width: '100%' }}>
                <Accordion variant="unstyled" styles={{
                    content: { width: '100%' },
                    control: {
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                        '&:focus': {
                            boxShadow: 'none',
                        },
                        width: '100%'
                    },
                    item: { width: '100%', borderBottom: 'none' }
                }
            }>
                <Accordion.Item value={value}>
                    <Accordion.Control>
                        <Grid align="center" style={{ width: '100%' }}>
                            <Grid.Col span={isMobile ? 2 : 3}>
                                <Image src={logo}/>
                            </Grid.Col>
                            <Grid.Col span={9}>
                                <Title order={isMobile ? 6 : 4} style={{ margin: 0 }}>
                                    {company}
                                </Title>
                                <Text style={{ fontSize: isMobile ? 12 : 16 }}>{title}</Text>
                                <Text size="sm" style={{ fontSize: isMobile ? 12 : 14 }}>{location}</Text>
                                <Text size="sm" color="dimmed" style={{ fontSize: isMobile ? 12 : 14 }}>
                                    {date}
                                </Text>
                            </Grid.Col>
                        </Grid>
                    </Accordion.Control>
                    <Accordion.Panel>
                        {details}
                    </Accordion.Panel>
                </Accordion.Item>
                </Accordion>
            </Box>
        </Card>
    );
}