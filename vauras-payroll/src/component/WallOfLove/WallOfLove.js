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
            company: 'Director',
            text: "I’ve been using SalaryBooks for my business, and it’s been a game- changer.Managing payroll,attendance, and compliances is so much easier now,and I love that I can handle everything even from home.The salary advance feature is a big plus for my team.Took me a little time to get used to it, but now I can’t imagine going back to my old system.",
            name: 'MANAV SARAF',
            title: 'Director,  BPMK...PVt Ltd',
            avatar: 'https://via.placeholder.com/50'
},
    {
        company: 'President (Tax and Strategy)',
        text: "“Using SalaryBooks has completely changed the functioning of our HR department. Payroll and attendance that used to take me hours are now done in minutes, and I can track everything anywhere. My team automatically gets the payslips on mail and app, and I love the peace of mind it gives me. The onboarding was a breeze and it feels effortless—and I honestly wish I had started using it sooner.”",
        name: 'Rohit Bothra',
        title: 'President (Tax and Strategy), Balarmpur Chini Mills Ltd.',
        avatar: 'https://via.placeholder.com/50'
        },
    {
        company: ' Owner',
        text: " “Before SalaryBooks, I was drowning in spreadsheets and paperwork. Now, payroll, attendance, PF, ESIC, PTAX and Incentives (Tips) are all in one place. It’s not just convenient; it’s made my whole process more accurate and stress-free. Honestly, it feels like having an extra team member who never takes a day off. Salarybooks has eliminated the stress of a whole aspect of running a Restaurant”",
        name: ' RUDRESH AGRAWAL',
        title: ' Owner,  OL Terra / Carpe Diem',
        avatar: 'https://via.placeholder.com/50'
        },
    {
        company: 'Director',
        text: " Ever since I switched to SalaryBooks for my company, managing payroll has been so much simpler. I like that I can set up my own templates for reports, the CTC calculator saves me a lot of manual work, and overtime gets added in automatically from attendance. Everything’s in one software, and it just works efficiently.",
        name: ' Vishal Bagaria',
        title: 'Director, Vishal Profin',
        avatar: 'https://via.placeholder.com/50'
        },
    {
        company: 'Director',
        text: " I started using SalaryBooks to keep track of attendance, and it’s been a great decision. The daily attendance logs are clear, payment records are easy to check anytime, and generating payslips takes just a minute. I also like that I can handle deviations and the access control feature has been very transparent —it’s saved me a ton of back-and-forth.",
        name: ' Mayank Patodia',
        title: 'Director, Advantex Solar',
        avatar: 'https://via.placeholder.com/50'
        },
    // {
    //     company: 'InnoSolutions',
    //     text: "Our employees love the new system - they can access their pay slips instantly, edit their tax deductions, and add reimbursements, all from the comfort of their laptops.",
    //     name: 'Ravi K',
    //     title: 'CEO, InnoSolutions',
    //     avatar: 'https://via.placeholder.com/50'
    //     }
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
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
};

const prevTestimonials = () => {
    setCurrentIndex(prevIndex =>
        (prevIndex - 1 + testimonials.length) % testimonials.length
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
               {[testimonials[currentIndex]]?.map(
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
                {Array.from({ length: testimonials.length}, (_, i) => (
                    <span
                        key={i}
                         className={`dot ${i === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(i )}
                    ></span>
                ))}
            </div>
        </div>
    </div>
);
};

export default WallOfLove;
