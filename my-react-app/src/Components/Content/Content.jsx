import './Content.css';
import profilePic from "../../assets/Weland_Jillian.jpg";
import resumePDF from '../../assets/JillianWelandResume.pdf';
import { Link } from 'react-router-dom';

function Content() {

    return (
        <div>
            <header className="App-header" id="home">
                <div className="intro-container">
                    <div className="intro-image">
                    <img src={profilePic} alt="Profile" className="profile-pic" />
                    </div>
                    <div className="intro-text">
                    <h1 className='pre-header-name'>Hi, I'm</h1>
                    <h1 className='header-name'>Jillian Weland</h1>
                    <p>I'm a Computer Science Student and Web Developer</p>
                    <a
                        href={resumePDF}
                        className="download-resume-btn"
                        download
                    >
                        Download Resume
                    </a>
                    </div>
                </div>
                </header>

                <section id="about" className="section-gray">
                <h2 className="section-title">About Me</h2>

                <div className="about-boxes">
                <div className="about-box">
                    <h3>🎓 Education</h3>
                    <p>Junior Computer Science major at the University of Nebraska–Lincoln, enrolled in the Jeffrey S. Raikes School, with minors in Business and Mathematics.</p>
                </div>
                <div className="about-box">
                    <h3>💼 Internships</h3>
                    <p>Completed 3 tech internships focused on software development and product engineering.</p>
                </div>
                <div className="about-box">
                    <h3>🎯 Hobbies</h3>
                    <p>Enjoy spending time with family and friends, getting outdoors, and cooking.</p>
                </div>
                </div>
            </section>


            <section id="projects" className="projects-section">
                <h2 className="section-title">Projects</h2>
                <div className="projects-container">
                    <Link to="/stridesync" className="project-box">
                        <h3>StrideSync</h3>
                        <p>A user-friendly app that integrates race training programs with real-time run tracking, designed to improve the user experience and accuracy of tracking.</p>
                    </Link>
                    <Link to="/blog" className="project-box">
                        <h3>Personal Blog</h3>
                        <p>A personal blog focused on exploring UI/UX choices and their implications.</p>
                    </Link>
                </div>
            </section>


            <section id="contact" className="contact-section">
                <h2 className="section-title">Contact Me</h2>
                <p className="contact-text">
                    I'd love to connect! Feel free to reach out via email or LinkedIn.
                </p>
                <div className="contact-links">
                    <a href="mailto:jillianweland@outlook.com" className="contact-link">jillianweland@outlook.com</a>
                    <a
                    href="https://www.linkedin.com/in/jillian-weland"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    >
                    LinkedIn Profile
                    </a>
                </div>
            </section>

        </div>
        
    )
}

export default Content