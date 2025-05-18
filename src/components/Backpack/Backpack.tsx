import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Image } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';

import backpack from '/src/assets/backpack.png';
import lipgloss from '/src/assets/lipgloss.png';
import notebook from '/src/assets/notebook.png';
import airpods from '/src/assets/airpods.png';
import book from '/src/assets/book.png';
import lipbalm from '/src/assets/lipbalm.png';
import pencil from '/src/assets/pencil.png';
import eraser from '/src/assets/eraser.png';
import sheep from '/src/assets/sheep.png';
import kombucha from '/src/assets/kombucha.png';
import apple from '/src/assets/apple.png';
import gogosqueez from '/src/assets/gogosqueez.png';
import warthog from '/src/assets/warthog.png';
import umbrella from '/src/assets/umbrella.png';
import waterbottle from '/src/assets/waterbottle.png';
import highlighter from '/src/assets/highlighter.png';

export default function Backpack() {
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
                    x: rect.left + rect.width / 2,
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

    const maxAnimationScroll = 300;
    const progress =
        startScrollY !== null
            ? Math.min(Math.max((scroll.y - startScrollY) / maxAnimationScroll, 0), 1)
            : 0;

    const objects = [
        {
            src: airpods,
            widthPct: 0.35, 
            xPct: -1,   
            yPct: -0.075,    
            r: 10,
        },
        {
            src: lipgloss,
            widthPct: 0.15, 
            xPct: -0.75,   
            yPct: -0.35,    
            r: 10,
        },
        {
            src: warthog,
            widthPct: 0.75, 
            xPct: -1.4,   
            yPct: -0.75,    
            r: -10,
        },
        {
            src: kombucha,
            widthPct: 0.58, 
            xPct: -1.1,   
            yPct: -0.95,    
            r: -15,
        },
        {
            src: apple,
            widthPct: 0.4, 
            xPct: -0.77,   
            yPct: -0.9,    
            r: -10,
        },
        {
            src: umbrella,
            widthPct: 0.25, 
            xPct: -0.7,   
            yPct: -0.57,    
            r: 190,
        },
        {
            src: book,
            widthPct: 0.4,
            xPct: -0.43,
            yPct: -1.15,
            r: -5
        },
        {
            src: waterbottle,
            widthPct: 0.8,
            xPct: -0.25,
            yPct: -1.4,
            r: 5
        },
        {
            src: sheep,
            widthPct: 1.1,
            xPct: 0.1,
            yPct: -1.42,
            r: 10,
        },
        {
            src: gogosqueez,
            widthPct: 0.35, 
            xPct: 0.92,   
            yPct: -0.7,    
            r: -5,
        },
        {
            src: lipbalm,
            widthPct: 0.4,
            xPct: 0.22,
            yPct: -0.6,
            r: 10,
        },
        {
            src: highlighter,
            widthPct: 0.4,
            xPct: 0.32,
            yPct: -0.33,
            r: 140,
        },
        {
            src: notebook,
            widthPct: 0.7,
            xPct: 0.45,
            yPct: -0.35,
            r: 15,
        },
        {
            src: pencil,
            widthPct: 0.4,
            xPct: 0.85,
            yPct: -0.2,
            r: 0
        },
        {
            src: eraser,
            widthPct: 0.2,
            xPct: 0.8,
            yPct: -0.1,
            r: -45
        },
    ];

    const interpolate = (start: number, end: number) => Math.round(start + (end - start) * progress);

    return (
        <Container
            ref={sectionRef}
            size="md"
            style={{ 
                position: 'relative',
                height: '80vh',
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
        </Container>
    );
}