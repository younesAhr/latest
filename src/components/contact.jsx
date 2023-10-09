import './../styles/contact.css'
import {FaHeartbeat,FaFacebook,FaInstagram,FaWhatsapp} from 'react-icons/fa'

export default function Contact(){
    return(
        <>
            <div className="contact" id='cnt'>
                <div className="info-cont">
                    <div className="info-cont1">
                        <div className="des-conts">
                            <div className="logo1-cont">
                                <FaHeartbeat color='#00A3CB' fontSize='1.5em'/><p className="logo1">Zeta agen</p>
                            </div>
                            <p className="contact-sub-ttl"> we will do our best in order to give you the best expirience</p>
                            <div className="sp">
                                <div className="social-media">
                                <p className="sm-ttl">follow us</p>
                                <FaFacebook className='sm-icon' /><FaInstagram className='sm-icon'/><FaWhatsapp className='sm-icon'/>
                                </div>
                            </div>
                    </div>
                    <div className="des-conts" id='midd'>
                        <p className="contact-ttl">
                            Company info
                        </p>
                        <p className="contact-sub-ttl">
                            Services 
                        </p>
                        <p className="contact-sub-ttl">
                            About us 
                        </p>
                        <p className="contact-sub-ttl">
                            Contact
                        </p>
                        <p className="contact-sub-ttl">
                            Map
                        </p>
                    </div>
                    <div className="des-conts" id='last'>
                        <p className="contact-ttl">
                            services
                        </p>
                        <p className="contact-sub-ttl">
                            X-rays
                        </p>
                        <p className="contact-sub-ttl">
                            blood test
                        </p>
                        <p className="contact-sub-ttl">
                            bone-scan
                        </p>
                        <p className="contact-sub-ttl">
                            more scan
                        </p>
                    </div>
                    </div>
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25569.22542728421!2d3.0415312851656275!3d36.76689260339025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb2f877796ffd%3A0x62ac3794efff79ca!2sEl%20Djazair!5e0!3m2!1sen!2sdz!4v1693406643515!5m2!1sen!2sdz" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <p className='copy-right'>© Copyright zeta-Agency and contributors.by bourada amine &Achour Younes</p>
            </div>
        </>
    )
}