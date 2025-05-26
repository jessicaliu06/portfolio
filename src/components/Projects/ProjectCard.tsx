import '@mantine/carousel/styles.css'; 

import { AspectRatio, Badge, Button, Card, Divider, Group, Image, Text, useMantineTheme } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';

import { IconBrandGithub } from '@tabler/icons-react';

interface ProjectCardProps {
  title: string;
  img: string[];
  description: React.ReactNode;
  technologies: string[];
  githubUrl: string;
}

export default function ProjectCard({
  title,
  img,
  description,
  technologies,
  githubUrl,
}: ProjectCardProps) {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const theme = useMantineTheme();

    return (
        <Card shadow="sm" padding="md" radius="md" withBorder style={{ width: isMobile ? '100%' : '50%' }}>
            <Text fw={600} size="xl" mb="sm" style={{ textAlign: 'center', display: 'block', width: '100%' }}>
                {title}
            </Text>

            <Carousel 
                withIndicators
                styles={{
                    indicators: {
                        bottom: 5,
                        display: 'flex',
                        justifyContent: 'center',
                    },
                    indicator: {
                        height: 4,
                        transition: 'background-color 0.3s ease',
                        backgroundColor: theme.colors.celeste[3],
                    },
                }}
            >
                {img.map((src, index) => (
                <Carousel.Slide key={index}>
                    <AspectRatio ratio={1} mb="md">
                        <Image src={src} radius="md" />
                    </AspectRatio>
                </Carousel.Slide>
                ))}
            </Carousel>

            <div style={{ width: "95%", margin: '0 auto' }}>
                {description}
            </div>

            <Divider my="md" />

            <Group wrap="wrap" style={{ gap: 5 }}>
                {technologies.map((tech) => (
                <Badge key={tech} radius="xl" variant="light" color='celeste'>
                    {tech}
                </Badge>
                ))}
            </Group>

            <Button
                component="a"
                color='celeste'
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                leftSection={<IconBrandGithub size={18} />}
                variant="outline"
                fullWidth
                mt="md"
            >
                Repository
            </Button>
        </Card>
  );
}
