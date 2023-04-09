import { useState } from 'react';
import './details.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button, Modal, ListGroup } from 'react-bootstrap';
import YoutubeEmbed from './YoutubeEmbed';
import { BsWhatsapp, BsInstagram, BsFacebook, BsYoutube, BsLinkedin } from "react-icons/bs";


export default function Details() {
    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        heading: '',
        content: [],
        button: ''
    });
    const contstantData = {
        'Superfast Doctor Consults': {
            heading: 'Superfast Doctor Consults',
            content: [
                'Expert doctor opinion from the comfort of your home',
                'Reliable & experienced doctors',
                'Completely Free of cost',
                'Detailed assessment of your medical conditions and reports',
            ],
            button: 'Consult Now!'
        },
        'Customized Treatment Plan': {
            heading: 'Customized Treatment Plan',
            content: [
                'Bejoho, plans it all with you and for you',
                'Bejoho shares a package that covers',
                'Medical investigations needed',
                'Planned procedure',
                'Doctor & hospital information',
                'Cost of treatment',
                'Duration and cost of stay',
            ],
            button: 'Plan Now!'
        },
        'Simplified Travel Assistance': {
            heading: 'Simplified Travel Assistance',
            content: ['Bejoho provides Free assistance for',
                'Medical Visa',
                'Airline tickets',
                'Airport drop and pick up',
                'Foreign currency exchange',
                'Transport during stay',
                'Comfortable hotel selection'],
            button: 'Book Now!'
        },
        'Feel-at-home Experience': {
            heading: 'Feel-at-home Experience',
            content: ['No language barriers (BeJoHo works in 50+ languages)',
                'Priority registration @ hospitals (BeJoHo has network of 1500+ hospitals)',
                'Zero waiting time doctor appointments (BeJoHo is a priority partner across all specialties)',
                'Smooth Admission & Discharge Process (BeJoHo has reputation of being the most hassle-free)',
                'Transparent Billing (BeJoHo never takes any money from patients)'],
            button: 'BeJoHo Now!'
        },
        'Lifelong Follow-ups & Continuity-of-Care': {
            heading: 'Lifelong Follow-ups & Continuity-of-Care',
            content: ['Enjoy lifetime of free follow-ups with doctors',
                'Avail quick query resolution, even when you are back home'],
            button: 'Just A Call Away!'
        },
    }
    const handleClose = () => setShow(false);
    const handleShow = (heading) => {
        setData(contstantData[heading])
        setShow(true)
    }
        ;

    const heading = [
        'Superfast Doctor Consults',
        'Customized Treatment Plan',
        'Simplified Travel Assistance'
    ]
    const heading2 = [
        'Feel-at-home Experience',
        'Lifelong Follow-ups & Continuity-of-Care'
    ]
    const subHeading = [
        'with BeJoHo, video consultation with expert doctors is just a click away!!',
        'Bejoho simplifies treatment planning after consultation!!',
        'Relax! Bejoho handles all your travel worries!!'
    ]
    const subHeading2 = [
        'Bejoho’s expert patient care team ensures complete comfort throughout the treatment process!!',
        'BeJoHo holds your hand during treatment and beyond!!'
    ]
    return (
        <>
            <div className="row details-headline">
                <h1 className="h2 font-weight--800">What Would You Like To Protect Today?</h1>
            </div>
            <div className='cards-container'>
                <Row xs={1} md={4} className="g-4">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col>
                            <Card style={{ height: '140px', padding: '20px', cursor: 'pointer' }}>
                                <Card.Img variant="top" src="arm.svg" height={'60px'} />
                                <Card.Body style={{ textAlign: 'center' }}>
                                    <Card.Text style={{ fontSize: '16px', fontWeight: '600' }}>
                                        Arm
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className="row button-container">
                <Button style={{ background: '#f39648', width: '340px', border: '0' }} >Get Your Customized Treatment Plan Now!</Button>{' '}
            </div>
            <div className='cards-container'>
                <Row xs={1} md={5} className="g-4">
                    {Array.from({ length: 10 }).map((_, idx) => (
                        <Col>
                            <Card style={{ height: '100px', padding: '20px', cursor: 'pointer' }}>
                                <Card.Img variant="top" src="kidney.svg" height={'60px'} />
                                <Card.Body style={{ textAlign: 'center' }}>
                                </Card.Body>
                            </Card>
                            <div style={{ textAlign: 'center' }}><p>Kidney</p></div>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className="row details-headline">
                <h1 className="h2 font-weight--800">Take A Moment to Hear Stories Of Our Happy Patients</h1>
            </div>
            <div className='cards-container' style={{ marginLeft: '6rem' }}>
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <Col>
                            <Card style={{ width: '300px', height: '240px', padding: '20px', cursor: 'pointer' }}>
                                <YoutubeEmbed embedId="-2WPcWzmeeA" />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className="row button-container">
                <Button style={{ background: '#f39648', width: '340px', border: '0' }} >Book Your Appointment Now!</Button>{' '}
            </div>
            <div className="row details-headline">
                <h1 className="h2 font-weight--800">You Are in Most Caring Hands</h1>
            </div>
            <div className='cards-container'>
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <Col className="d-flex">
                            <Card className="flex-fill" style={{ height: '240px', padding: '20px', cursor: 'pointer' }}>
                                <div class="row no-gutters">
                                    <div class="col-auto">
                                        <img src="dr.jpeg" class="img-fluid" alt="" width={'120px'} />
                                    </div>
                                    <div class="col">
                                        <div class="card-block px-2">
                                            <h5 class="card-title">Dr. Devi Prasad Shetty</h5>
                                            <p class="card-text">Heart Surgeon</p>
                                            <div class="row" style={{ fontSize: '10px' }}>
                                                <div class="col">
                                                    <p class="card-text"><span><b>Experience:</b><br />20+ Years</span></p>
                                                </div>
                                                <div class="col">
                                                    <p class="card-text"><span><b>Patients:</b><br />10000+</span></p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer w-100 text-muted">
                                    <div style={{ textAlign: 'center' }}>
                                        <Button className='doctorChat'><BsWhatsapp /> <span className='pad-left'>Free Consult Now</span></Button>{' '}
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className="row button-container">
                <Button style={{ background: '#f39648', width: '340px', border: '0' }} >Call Now For Expert Opinion</Button>{' '}
            </div>
            <div className="row details-headline">
                <h1 className="h2 font-weight--800">Why BeJoHo Is Best?</h1>
            </div>
            <div className='cards-container'>
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <Col>
                            <Card style={{ margin: '30px', width: '250px', height: '240px', padding: '20px', border: '0' }}>
                                <Card.Img variant="top" src="virat.svg" height={'160px'} />
                                <Card.Body style={{ textAlign: 'center' }}>
                                    <Card.Text style={{ fontSize: '16px', fontWeight: '600' }}>
                                        {heading[idx]}
                                    </Card.Text>
                                    <p style={{ fontSize: '11px' }}>{subHeading[idx]}<br />
                                        <span onClick={() => { handleShow(heading[idx]) }} style={{ pointer: 'cursor', color: '#f39648', fontSize: '12px', fontWeight: "bold" }}>Read More</span>
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className='cards-container'>
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 2 }).map((_, idx) => (
                        <Col>
                            <Card style={{ margin: '30px', width: '250px', height: '240px', padding: '20px', border: '0' }}>
                                <Card.Img variant="top" src="virat.svg" height={'160px'} />
                                <Card.Body style={{ textAlign: 'center' }}>
                                    <Card.Text style={{ fontSize: '16px', fontWeight: '600' }}>
                                        {heading2[idx]}
                                    </Card.Text>
                                    <p style={{ fontSize: '11px' }}>{subHeading2[idx]}<br />
                                        <span onClick={() => { handleShow(heading2[idx]) }} style={{ pointer: 'cursor', color: '#f39648', fontSize: '12px', fontWeight: "bold" }}>Read More</span>
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{data.heading}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup as="ul">
                        {data.content.map((el, idx) => {
                            return (
                                <ListGroup.Item as="li">
                                    {el}
                                </ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} style={{ background: '#f39648', border: '0' }} >
                        {data.button}
                    </Button>
                </Modal.Footer>
            </Modal>
            <div class="language-list">
                <span class="language-select">Select Language:</span>

                <a class="active" href="https:/homepage">
                    <span>English</span>
                </a>

                <a href="https:/hi-in/homepage">
                    <span>हिन्दी</span>
                </a>

                <a href="https:/bn-in/homepage">
                    <span>বাংলা</span>
                </a>

                <a href="https:/mr-in/homepage">
                    <span>मराठी</span>
                </a>

                <a href="https:/te-in/homepage">
                    <span>తెలుగు</span>
                </a>

                <a href="https:/gu-in/homepage">
                    <span>ગુજરાતી</span>
                </a>

                <a href="https:/kn-in/homepage">
                    <span>ಕನ್ನಡ</span>
                </a>

                <a href="https:/ta-in/homepage">
                    <span>தமிழ்</span>
                </a>

            </div>
            <div class="bb-gray">
                <div class="footer-logo"><img src="logo.png" /></div>
                <div class="footer-wrap">
                    <BsInstagram /> <BsFacebook /><BsYoutube />< BsLinkedin />
                </div>
            </div>
        </>
    )
}