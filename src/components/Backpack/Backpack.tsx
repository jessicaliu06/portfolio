import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Image } from '@mantine/core';
import { useWindowScroll, useMediaQuery } from '@mantine/hooks';

import backpack from '/src/assets/items/backpack.png';
import lipgloss from '/src/assets/items/lipgloss.png';
import notebook from '/src/assets/items/notebook.png';
import airpods from '/src/assets/items/airpods.png';
import book from '/src/assets/items/book.png';
import lipbalm from '/src/assets/items/lipbalm.png';
import pencil from '/src/assets/items/pencil.png';
import eraser from '/src/assets/items/eraser.png';
import sheep from '/src/assets/items/sheep.png';
import kombucha from '/src/assets/items/kombucha.png';
import apple from '/src/assets/items/apple.png';
import gogosqueez from '/src/assets/items/gogosqueez.png';
import warthog from '/src/assets/items/warthog.png';
import umbrella from '/src/assets/items/umbrella.png';
import waterbottle from '/src/assets/items/waterbottle.png';
import highlighter from '/src/assets/items/highlighter.png';

export default function Backpack() {
    const isMobile = useMediaQuery('(max-width: 768px)');

    const [scroll] = useWindowScroll();
    const sectionRef = useRef<HTMLDivElement>(null);
    const backpackRef = useRef<HTMLImageElement>(null);

    const [startScrollY, setStartScrollY] = useState<number | null>(null);
    const [backpackCenter, setBackpackCenter] = useState({ x: 0, y: 0 });
    const [backpackWidth, setBackpackWidth] = useState(120);

    useEffect(() => {
        if (sectionRef.current && startScrollY === null) {
            const offset = sectionRef.current.offsetTop;
            setStartScrollY(offset - window.innerHeight * 0.6);
        }

        const updateBackpackPosition = () => {
            if (backpackRef.current) {
                const rect = backpackRef.current.getBoundingClientRect();
                setBackpackCenter({
                    x: rect.left + rect.width / 2 - 25,
                    y: rect.top + rect.height / 2,
                });
                setBackpackWidth(rect.width);
            }
        };

        updateBackpackPosition();
        window.addEventListener('scroll', updateBackpackPosition);
        window.addEventListener('resize', updateBackpackPosition);

        return () => {
            window.removeEventListener('scroll', updateBackpackPosition);
            window.removeEventListener('resize', updateBackpackPosition);
        };
    }, [sectionRef.current, startScrollY]);

    const maxAnimationScroll = isMobile ? 100 : 300;
    const progress = startScrollY !== null && scroll.y >= startScrollY
                        ? Math.min((scroll.y - startScrollY) / maxAnimationScroll, 1)
                        : 0;

    const objects = [
        {
            src: airpods,
            widthPct: 0.35, 
            xPct: -0.8,   
            yPct: -0.075,    
            r: 10,
        },
        {
            src: lipgloss,
            widthPct: 0.15, 
            xPct: -0.55,   
            yPct: -0.35,    
            r: 10,
        },
        {
            src: warthog,
            widthPct: 0.75, 
            xPct: -1.2,   
            yPct: -0.75,    
            r: -10,
        },
        {
            src: kombucha,
            widthPct: 0.58, 
            xPct: -0.9,   
            yPct: -0.95,    
            r: -15,
        },
        {
            src: apple,
            widthPct: 0.4, 
            xPct: -0.57,   
            yPct: -0.9,    
            r: -10,
        },
        {
            src: umbrella,
            widthPct: 0.25, 
            xPct: -0.5,   
            yPct: -0.57,    
            r: 190,
        },
        {
            src: book,
            widthPct: 0.4,
            xPct: -0.23,
            yPct: -1.15,
            r: -5
        },
        {
            src: waterbottle,
            widthPct: 0.8,
            xPct: -0.05,
            yPct: -1.4,
            r: 5
        },
        {
            src: sheep,
            widthPct: 1.1,
            xPct: 0.3,
            yPct: -1.42,
            r: 10,
        },
        {
            src: gogosqueez,
            widthPct: 0.35, 
            xPct: 1.12,   
            yPct: -0.7,    
            r: -5,
        },
        {
            src: lipbalm,
            widthPct: 0.4,
            xPct: 0.42,
            yPct: -0.6,
            r: 10,
        },
        {
            src: highlighter,
            widthPct: 0.4,
            xPct: 0.52,
            yPct: -0.33,
            r: 140,
        },
        {
            src: notebook,
            widthPct: 0.7,
            xPct: 0.65,
            yPct: -0.35,
            r: 15,
        },
        {
            src: pencil,
            widthPct: 0.4,
            xPct: 1.05,
            yPct: -0.2,
            r: 0
        },
        {
            src: eraser,
            widthPct: 0.2,
            xPct: 1,
            yPct: -0.1,
            r: -45
        },
    ];

    const interpolate = (start: number, end: number) => Math.round(start + (end - start) * progress);

    return (
        <Container
            fluid
            ref={sectionRef}
            style={{ 
                position: 'relative',
                height: isMobile ? '150vh' : '80vh',
                width: '100%',
                boxSizing: 'border-box',
                maxWidth: '100%',
                padding: 0,
                margin: 0
            }}
        >
            <Image
                ref={backpackRef}
                src={backpack}
                alt="backpack"
                w={120}
                style={{
                    position: 'sticky',
                    top: '70vh',
                    margin: '0 auto',
                    zIndex: 2,
                    display: 'block',
                    cursor: 'pointer',
                    transform: 'translateX(0.4vw)',
                }}
            />

            {objects.map(({ src, widthPct, xPct, yPct, r }, i) => {
                const widthPx = backpackWidth * widthPct;
                const xPx = backpackWidth * xPct;
                const yPx = backpackWidth * yPct;

                return (
                    <motion.img
                        key={i}
                        src={src}
                        alt={`object-${i}`}
                        style={{
                            position: 'fixed',
                            top: backpackCenter.y,
                            left: backpackCenter.x,
                            width: widthPx,
                            zIndex: 1,
                            transform: `translate(${interpolate(0, xPx)}px, ${interpolate(0, yPx)}px) rotate(${interpolate(0, r)}deg)`,
                            opacity: progress,
                            pointerEvents: 'none',
                        }}
                    />
                );
            })}

            <div style={{ height: 100, pointerEvents: 'none' }} />
        </Container>
    );
}