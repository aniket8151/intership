import React, { useEffect } from 'react'
/*import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'*/
import './Extrapages.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
    const [rating, setrating] = React.useState(0)
    
    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
    return (
        <div className='extrapage'>
            
            <div class="space">
            </div>
            <section class="contact">
        <div class="content">
            <h2>Contact Us</h2>
            <p>"Get in touch with us today! We're here to answer your questions, listen to your feedback, and assist you in any way we can. Reach out and connect now."</p>
        </div>
        <div class="container">
            <div class="contactInfo">
                <div class="box">
                    <div class="icon"><FontAwesomeIcon icon={faHouse} /></div>
                    <div class="text">
                        <h3>Address</h3>
                        <p>1234 Pachora Road,<br></br>Pune,India,<br></br>14568</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"><FontAwesomeIcon icon={faPhone} /></div>
                    <div class="text">
                        <h3>Phone</h3>
                        <p>12345678</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                    <div class="text">
                        <h3>Email</h3>
                        <p>abc@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="contactForm">
                <form>
                    <h2>Send Message</h2>
                    <div class="inputBox">
                        <input type="text" required="required"></input>
                        <span>Full Name</span>
                    </div>
                    <div class="inputBox">
                        <input type="text" required="required"></input>
                        <span>Eamil</span>
                    </div>
                    <div class="inputBox">
                        <textarea name="" id="" required="required"></textarea>
                        <span>Type your Message...</span>
                    </div>
                    <div class="inputBox">
                        <input type="submit" value="Send"></input>
                    </div>
                </form>
            </div>
        </div>
    </section>
            

      </div>
    )
}

export default Contact