import { Box, Container, Group, Button } from '@mantine/core';

export default function Header() {
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
      }}
    >
      <Box
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '16px',
          paddingRight: '16px',
        }}
      >
        <Box style={{ flex: 1 }}>
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
        </Box>

        <Box style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
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
                marginLeft: 8,
                marginRight: 8,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = '#f0f0f0')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = 'transparent')
              }
            >
              {label}
            </Button>
          ))}
        </Box>

        <Box style={{ flex: 1 }} />
      </Box>
    </Box>
  );
}
