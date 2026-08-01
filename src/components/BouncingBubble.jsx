import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function BouncingBubble({ children, speed = 0.5 }){
    const elementRef = useRef(null);

    const x = useRef(0);
    const y = useRef(0);
    const dx = useRef((Math.random() > 0.5 ? 1 : -1) * 2.5);
    const dy = useRef((Math.random() > 0.5 ? 1 : -1) * 2.5);

    const width = useRef(0);
    const height = useRef(0);

    const containerWidth = useRef(window.innerWidth);
    const containerHeight = useRef(window.innerHeight);

    useEffect(() => {
        const element = elementRef.current;
        if(!element) return;

        const rect = element.getBoundingClientRect();
        width.current = rect.width;
        height.current = rect.height;

        x.current = Math.random() * (containerWidth.current - width.current);
        y.current = Math.random() * (containerHeight.current - height.current);

        const update = () =>{
            x.current += dx.current * speed;
            y.current += dy.current * speed;

            if(
                x.current <= 0 ||
                x.current + width.current >= containerWidth.current
            )
            {
                dx.current *= -1;
            }

            if(
                y.current <= 0 ||
                y.current + height.current  >= containerHeight.current
            )
            {
                dy.current *= -1
            }

            gsap.set(element, {
                x: x.current,
                y: y.current
            });

            requestAnimationFrame(update);
        }

        update();

        const resize = () =>{
            containerWidth.current = window.innerWidth;
            containerHeight.current = window.innerHeight;
        }

        window.addEventListener('resize', resize);

        return () =>{
            window.removeEventListener('resize', resize);
        }
    }, [speed]);

    return(
        <div
            ref = {elementRef}
            style = {{
                position: 'fixed',
                top: 0,
                left: 0,
                willChange: 'transform'
            }}
        >
            {children}
        </div>
    );
}