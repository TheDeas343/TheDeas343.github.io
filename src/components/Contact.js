import "../styles/Contact.css";
import emailjs from 'emailjs-com';
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const emailJsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const emailJsServiceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const emailJsTemplateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

function Contact() {
    const formsData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };
    const [formDetails, setFormDetails] = useState(formsData);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");

        try {
            const result = await emailjs.send(emailJsServiceID, emailJsTemplateID, {
                from_name: `${formDetails.firstName} ${formDetails.lastName}`, 
                email: formDetails.email,
                phone: formDetails.phone,
                message: formDetails.message
            }, emailJsPublicKey);

            setButtonText("Send");
            setFormDetails(formsData);
            setStatus({ success: true, message: 'Message sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            setButtonText("Send");
            setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        }
    };

    return (
        <div className="div-contact" id="contact">
            <section className="contact">
                <Container>
                    <Row className="row-contact">
                        <Col size={12} md={6}>
                            <h2>Contact Me</h2>
                            <form onSubmit={handleSubmit}>
                                <Row>
                                    <Col size={12} sm={6} className="px-1">
                                        <input
                                            type="text"
                                            value={formDetails.firstName}
                                            placeholder="First Name"
                                            onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                        />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input
                                            type="text"
                                            value={formDetails.lastName} // Corrigido aqui
                                            placeholder="Last Name"
                                            onChange={(e) => onFormUpdate('lastName', e.target.value)}
                                        />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input
                                            type="email"
                                            value={formDetails.email}
                                            placeholder="Email"
                                            onChange={(e) => onFormUpdate('email', e.target.value)}
                                        />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input
                                            type="tel"
                                            value={formDetails.phone}
                                            placeholder="Phone Number"
                                            onChange={(e) => onFormUpdate('phone', e.target.value)}
                                        />
                                    </Col>
                                    <Col size={12} className="px-1">
                                        <textarea
                                            rows="6"
                                            value={formDetails.message}
                                            placeholder="Message"
                                            onChange={(e) => onFormUpdate('message', e.target.value)}
                                        ></textarea>
                                        {status.message && (<p className={`status-message ${status.success ? 'success' : 'danger'}`}>{status.message}</p>)}

                                        <button type="submit"><span>{buttonText}</span></button>
                                        </Col>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Contact;
