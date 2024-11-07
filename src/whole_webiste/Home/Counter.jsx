import React, { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup'; // Import the library
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS

function Counter() {
    const [isVisible, setIsVisible] = useState(false); // Track if the element is in view
    const counterRef = useRef(null); // Reference to the counter container

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            offset: 50,
            delay: 100,
            once: true,
            mirror: true,
        });

        // Intersection Observer to detect when the counters are in the viewport
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Start counting when visible
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the element is in view
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    const counters = [
        { end: 35, suffix: '+', text: 'Years Experience' },
        { end: 110, suffix: '+', text: 'Happy Customers' },
        { end: 280, suffix: '+', text: 'Employee Strength' },
        { end: 80000, suffix: '+', text: 'Sq. Ft. Production Area' },
    ];

    return (
        <div className='Counter' ref={counterRef}>
            <div className='row' data-aos="zoom-in-up">
                {counters.map((counter, index) => (
                    <div key={index} className='col-3 d-flex justify-content-center'>
                        <div className='counder1 flex-column text-center sans_light text-white'>
                            <h1>
                                {isVisible && (
                                    <CountUp 
                                        start={0} 
                                        end={counter.end} 
                                        duration={3} 
                                        suffix={counter.suffix} 
                                    />
                                )}
                            </h1>
                            <p>{counter.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Counter;
