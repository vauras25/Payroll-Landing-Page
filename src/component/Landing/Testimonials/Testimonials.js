import React from "react";
import "./Testimonials.css";
import MANAVSARAF from "../../../image/testimonials pictures/New folder/manav saraf.jpg"
import RohitBothra from "../../../image/testimonials pictures/New folder/rohit bothra.jpg"
import RUDRESHAGRAWAL from "../../../image/testimonials pictures/New folder/rudresh agarwal.jpg"
import VishalBagaria from "../../../image/testimonials pictures/New folder/VISHAL BAGARIA.jpg"
import MayankPatodia from "../../../image/testimonials pictures/New folder/MAYANK PATODIA - (PROFILE PICTURE BNI).jpeg.jpg"
function DecorativeBox({ className, color, variant }) {
  color = color || "#ecf3fa";
  variant = variant || 1;

  const boxStyle = (right, top) => ({
    position: "absolute",
    borderRadius: "2px",
    width: "99px",
    height: "99px",
    right,
    top,
    backgroundColor: color,
  });

  const renderVariant = () => {
    if (variant === 1) {
      return (
        <>
          <div style={boxStyle(0, "99px")} />
          <div style={boxStyle("99px", 0)} />
          <div style={boxStyle("99px", "198px")} />
        </>
      );
    }
    if (variant === 2) {
      return (
        <>
          <div style={boxStyle("99px", "99px")} />
          <div style={boxStyle(0, 0)} />
          <div style={boxStyle(0, "198px")} />
        </>
      );
    }
    if (variant === 3) {
      return (
        <div style={{ width: 297, height: 198, position: "relative" }}>
          <div style={boxStyle("99px", 0)} />
          <div style={boxStyle("198px", "99px")} />
          <div style={boxStyle(0, "99px")} />
        </div>
      );
    }
    return (
      <div style={{ width: 198, height: 297, position: "relative" }}>
        <div style={boxStyle(0, 0)} />
        <div style={boxStyle("99px", "99px")} />
        <div style={boxStyle(0, "198px")} />
      </div>
    );
  };

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        pointerEvents: "none",
        width: 198,
        height: 297,
      }}
    >
      {renderVariant()}
    </div>
  );
}

const TESTIMONIALS = [
  {
    text: "I’ve been using SalaryBooks for my business, and it’s been a game- changer.Managing payroll,attendance, and compliances is so much easier now,and I love that I can handle everything even from home.The salary advance feature is a big plus for my team.Took me a little time to get used to it, but now I can’t imagine going back to my old system.",
    name: 'MANAV SARAF',
    role: 'Director,  BPMK...PVt Ltd',
    img: MANAVSARAF,
  },
  {
    text: "“Using SalaryBooks has completely changed the functioning of our HR department. Payroll and attendance that used to take me hours are now done in minutes, and I can track everything anywhere. My team automatically gets the payslips on mail and app, and I love the peace of mind it gives me. The onboarding was a breeze and it feels effortless—and I honestly wish I had started using it sooner.”",
    name: "Rohit Bothra",
    role: "President (Tax and Strategy), Balarmpur Chini Mills Ltd.",
    img: RohitBothra,
  },
  {
    text: " “Before SalaryBooks, I was drowning in spreadsheets and paperwork. Now, payroll, attendance, PF, ESIC, PTAX and Incentives (Tips) are all in one place. It’s not just convenient; it’s made my whole process more accurate and stress-free. Honestly, it feels like having an extra team member who never takes a day off. Salarybooks has eliminated the stress of a whole aspect of running a Restaurant”",
    name: "RUDRESH AGRAWAL",
    role: " Owner,  OL Terra / Carpe Diem",
    img: RUDRESHAGRAWAL,
  },
  {
    text: " Ever since I switched to SalaryBooks for my company, managing payroll has been so much simpler. I like that I can set up my own templates for reports, the CTC calculator saves me a lot of manual work, and overtime gets added in automatically from attendance. Everything’s in one software, and it just works efficiently.",
    name: " Vishal Bagaria",
    role: "Director, Vishal Profin",
    img: VishalBagaria,
  },
  {
    text: " I started using SalaryBooks to keep track of attendance, and it’s been a great decision. The daily attendance logs are clear, payment records are easy to check anytime, and generating payslips takes just a minute. I also like that I can handle deviations and the access control feature has been very transparent —it’s saved me a ton of back-and-forth.",
    name: " Mayank Patodia",
    role: "Director, Advantex Solar",
    img: MayankPatodia,
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">

      <DecorativeBox className="testimonials-deco-box" color="#f0f4f8" variant={4} />

      <div className="testimonials-container">
        <div className="testimonials-header">
          <p className="testimonials-label">Testimonial</p>
          <h2 className="testimonials-heading">Transforming Payroll Experiences</h2>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => {
            const isMiddle = i%2 !== 0;
            const bgClass = isMiddle ? "testimonial-card--middle" : "testimonial-card--side";
            const svgFill = isMiddle? "#eeeeee" : "#def0fc";

            return (
              <div key={i} className={`testimonial-card ${bgClass}`}>

                <div className="testimonial-bubble">
                  <svg
                    width="44"
                    height="32"
                    viewBox="0 0 44 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="testimonial-quote-icon"
                  >
                    <path
                      d="M18.3333 0H0V18.3333H11C11 23.8562 6.52285 28.3333 1 28.3333V32C8.73199 32 15 25.732 15 18V0H18.3333ZM44 0H25.6667V18.3333H36.6667C36.6667 23.8562 32.1895 28.3333 26.6667 28.3333V32C34.3987 32 40.6667 25.732 40.6667 18V0H44Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="testimonial-text">{t.text}</p>
                </div>

                <div className="testimonial-footer">

                  <div className="testimonial-footer-left">
                    <div className="testimonial-user">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="testimonial-avatar"
                      />
                      <div>
                        <h4 className="testimonial-name">{t.name}</h4>
                        <p className="testimonial-role">{t.role}</p>
                      </div>
                    </div>
                    
                  </div>
                  <svg
                      className="testimonial-corner-curve"
                      viewBox="0 0 32 32"
                      fill={svgFill}
                    >
                      <path d="M0,0 L32,0 L32,32 A32,32 0 0,0 0,0 Z" />
                    </svg>
                  <div className="testimonial-footer-right"></div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;