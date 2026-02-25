// pages/Contact/Contact.tsx

import Frame from '../../components/common/Frame/Frame';
import './Contact.css'

function Contact() {
    return (
        <div className="Contact">

            {/* ── Dramatic Header ── */}
            <div className="contact-header">
                <p className="contact-overline">◆ Let's Connect ◆</p>
                <h2 className="contact-headline">Start a Conversation</h2>
                <div className="contact-meta-row">
                    <span className="contact-meta-item">
                        <span>Orlando, FL</span>
                    </span>
                    <span className="contact-meta-sep">◆</span>
                    <span className="contact-meta-item">
                        <span>Open to Opportunities</span>
                    </span>
                    <span className="contact-meta-sep">◆</span>
                    <span className="contact-meta-item">
                        <span>Full-Stack &amp; Front-End</span>
                    </span>
                </div>
            </div>

            {/* ── Form Card with Frame ── */}
            <div className="contact-form-card">
                <Frame className="contact-form-frame all" />
                <form className="contact-form">
                    <div className="contact-form-row">
                        <div className="contact-form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="contact-form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="your@email.com" required />
                        </div>
                    </div>
                    <div className="contact-form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" placeholder="What's on your mind?" required />
                    </div>
                    <div className="contact-form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder="Tell me about your project..." required></textarea>
                    </div>
                    <div className="submit-btn">
                        <div className="btn-container contact-submit-btn">
                            <button type="submit">
                                Send Message
                                <Frame className="button-frame all" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Contact
