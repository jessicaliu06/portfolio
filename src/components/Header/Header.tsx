import { useState } from 'react';
import { Box, Button, Drawer, Burger, Group, Stack } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function Header() {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)'); // adjust breakpoint as needed

  const sections = [
    { id: 'intro', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
  ];

  const scrollWithOffset = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 60;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setDrawerOpened(false);
  };

  return (
    <Box
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '50px',
        backgroundColor: 'white',
        borderBottom: '1px solid #dee2e6',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        justifyContent: 'space-between',
      }}
    >
      <Button
        variant="subtle"
        onClick={() => scrollWithOffset('intro')}
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          padding: 0,
          minWidth: 0,
          backgroundColor: 'transparent',
          color: 'inherit',
          cursor: 'pointer',
          border: 'none',
          textTransform: 'none',
        }}
      >
        Jessica Liu
      </Button>

      {isMobile ? (
        <>
          <Burger
            opened={drawerOpened}
            onClick={() => setDrawerOpened((o) => !o)}
            size="sm"
          />
          <Drawer
            opened={drawerOpened}
            onClose={() => setDrawerOpened(false)}
            padding="md"
            size="xs"
            position="right"
          >
            <Stack>
              {sections.map(({ id, label }) => (
                <Button
                  key={id}
                  variant="subtle"
                  onClick={() => scrollWithOffset(id)}
                  style={{
                    padding: '8px 12px',
                    backgroundColor: 'transparent',
                    color: 'inherit',
                    fontWeight: 500,
                    borderRadius: 4,
                    cursor: 'pointer',
                    border: 'none',
                    textTransform: 'none',
                    width: '100%',
                  }}
                >
                  {label}
                </Button>
              ))}
            </Stack>
          </Drawer>
        </>
      ) : (
        <Group>
          {sections.map(({ id, label }) => (
            <Button
              key={id}
              variant="subtle"
              onClick={() => scrollWithOffset(id)}
              style={{
                padding: '8px 12px',
                backgroundColor: 'transparent',
                color: 'inherit',
                fontWeight: 500,
                borderRadius: 4,
                cursor: 'pointer',
                border: 'none',
                textTransform: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              {label}
            </Button>
          ))}
        </Group>
      )}
    </Box>
  );
}