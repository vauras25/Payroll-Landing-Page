import React, { useState, useEffect } from 'react';
import '../WallOfLove/WallofLove.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import testinomial1 from '../../image/testinomial1.avif'
import testinomial2 from '../../image/testinomial2.avif'
import testinomial3 from '../../image/testinomial3.avif'
import testinomial4 from '../../image/testinomial4.avif'

const WallOfLove = () => {
    const testimonials = [
        {
            company: 'CEO',
            text: " In any SME office / factory the one thing that is often missed is the compliance for Employees’ PF and ESI. In the last year and half I have outsourced the complete work for maintenance and compliance of PF and ESI for all my employees to Vauras. Since then this area has gone from being an expense to becoming an income generation. Not only did she get me enrolled in various scheme which save me 10% on Employee salary but her team follows up regularly to make sure payments are done on time and we also get Income Tax benefits.I thank Salarybooks for providing the right guidance, follow-up and schemes to help me and my employees. I have been and will continue to refer her to my network.",
            name: 'Mayank Patodia',
            title: 'CEO, Advantex Solar',
            avatar: 'https://via.placeholder.com/50'
        },
        {
            company: 'Owner',
            text: "Our employees love the new system - they can access their pay slips instantly, edit their tax deductions, and add reimbursements, all from the comfort of their own phones or laptops.",
            name: 'Rudresh Agarwal',
            title: 'Owner,Ol Terra',
            avatar: 'https://via.placeholder.com/50'
        },
        {
            company: 'Drivers4Me',
            text: "SalaryBooks.com should be among the primary products a startup founder should subscribe to for managing employee related transactions.",
            name: 'Rajarshi Nag',
            title: 'Drivers4Me, Vauras',
            avatar: 'https://via.placeholder.com/50'
        },
        {
            company: 'Director',
            text: "Salarybooks.com Payroll has simplified our entire process. The automation has saved us countless hours, and the platform is pretty easy to use!",
            name: 'Manav saraf',
            title: 'Director, BMPK',
            avatar: 'https://via.placeholder.com/50'
        },
        {
            company: 'Techify',
            text: "RazorpayX Payroll has simplified our entire process. The automation has saved us countless hours, and the platform is so easy to use!",
            name: 'Anjali P',
            title: 'Founder, Techify',
            avatar: 'https://via.placeholder.com/50'
        },
        {
            company: 'InnoSolutions',
            text: "Our employees love the new system - they can access their pay slips instantly, edit their tax deductions, and add reimbursements, all from the comfort of their laptops.",
            name: 'Ravi K',
            title: 'CEO, InnoSolutions',
            avatar: 'https://via.placeholder.com/50'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + (isMobile ? 1 : 2)) % testimonials.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [isMobile, testimonials.length]);

    const nextTestimonials = () => {
        setCurrentIndex(prevIndex => (prevIndex + (isMobile ? 1 : 2)) % testimonials.length);
    };

    const prevTestimonials = () => {
        setCurrentIndex(prevIndex =>
            prevIndex - (isMobile ? 1 : 2) < 0 ? testimonials.length - (isMobile ? 1 : 2) : prevIndex - (isMobile ? 1 : 2)
        );
    };

    const testimonialImages = [testinomial1, testinomial2, testinomial3, testinomial4];


    return (
        <div className="wall-of-love-container">
            <div className="wall-left">
                <h2>Wall of love</h2>
                <p>As it turns out, people love Vauras Payroll. Here is what some of our users have to say.</p>
            </div>

            <div className="testimonials-wrapper">
                {/* Left Arrow */}
                <FaChevronLeft className="testimonial-nav-icon left-arrow" onClick={prevTestimonials} />

                <div className="testimonials-container">
    {(isMobile ? [testimonials[currentIndex]] : testimonials.slice(currentIndex, currentIndex + 2))?.map(
        (testimonial, index) => (
            <div key={index} className="testimonial-item">
                <div className="testimonial-header">
                    <h3>{testimonial?.company}</h3>
                </div>
                <p>{testimonial?.text}</p>
                <div className="testimonial-footer">
                    <img src={testimonialImages[(currentIndex + index) % testimonialImages.length]} 
                         alt={testimonial?.name} 
                         className="testimonial-avatar" />
                    <div>
                        <h4>{testimonial?.name}</h4>
                        <p>{testimonial?.title}</p>
                    </div>
                </div>
            </div>
        )
    )}
</div>



                {/* Right Arrow */}
                <FaChevronRight className="testimonial-nav-icon right-arrow" onClick={nextTestimonials} />

                {/* Move Dots Below Testimonials */}
                <div className="dots-container">
                    {Array.from({ length: testimonials.length / (isMobile ? 1 : 2) }, (_, i) => (
                        <span
                            key={i}
                            className={`dot ${i === Math.floor(currentIndex / (isMobile ? 1 : 2)) ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(i * (isMobile ? 1 : 2))}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WallOfLove;
