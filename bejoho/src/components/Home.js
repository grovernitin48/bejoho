import './home.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import { Button } from 'react-bootstrap';
import { BsWhatsapp } from "react-icons/bs";



function Home() {
    return (
        <div className="body-container">
            <div className="row headline">
                <h1 className="h2 font-weight--800">Let BeJoHo Take Care of Your Health</h1>
                <p className="h5 h5--font tagline">Trusted by 10,000+ patients from 15+ countries</p>
                <div className='form-container'>
                    <input type="text" placeholder="type your query, disease, procedure" />
                    <PhoneInput
                        country={'in'}
                        value={'njn'}
                        onChange={() => { }}
                    />
                    <Button style={{ background: '#f39648', border: '0' }} >Get Expert Help Now!</Button>{' '}
                </div>
                <div style={{ textAlign: 'center', marginLeft: '-20px', marginTop: '10px' }}>
                    <Button className='whatsappChat'><BsWhatsapp /> <span className='pad-left'>Chat With An Expert!</span></Button>{' '}
                </div>
            </div>

        </div>
    )
}
export default Home;