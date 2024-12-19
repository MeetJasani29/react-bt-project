import './footer.css'
import { LuMapPin } from "react-icons/lu";
import { RiMailSendLine } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { RiFacebookLine } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoDribbble } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";   
import { FaTelegramPlane } from "react-icons/fa";
import logo from './../../images/logo.png';
import shape1 from './../../images/shape-3.png';
import shape2 from './../../images/shape2.png';
import shape3 from './../../images/shape-4.png';
import footerimg1 from './../../images/1.jpg';
import footerimg2 from './../../images/2.jpg';
import footerimg3 from './../../images/3.jpg';
import footerimg4 from './../../images/4.jpg';
import footerimg5 from './../../images/5.jpg';

const Footer = () => {
    return (
        <footer>
            <div className='footer position-relative text-start px-5 '>
                <div className='footer-shape1'>
                    <img src={shape1} alt="shape1" />
                </div>
                <div className='footer-shape2'>
                    <img src={shape2} alt="shape2" />
                </div>
                <div className='footer-shape3'>
                    <img src={shape3} alt="shape2" />
                </div>
                <div className='row'>
                    <div className='col-4 mt-5  '>
                        <div className='footer-logo'>
                            <img src={logo} alt="logo" />
                        </div>
                        <p className='mt-2 mb-3'>Carrot is the biggest market of grocery products. Get your daily needs from our store.</p>
                        <div className='footer-address text-start '>
                            <p><LuMapPin /> <span> 51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.</span></p>
                            <p><RiMailSendLine /><span> example@email.com</span></p>
                            <p><IoMdCall /><span> +91 123 4567890</span></p>
                        </div>
                    </div>

                    <div className='col-xl-2 col-lg-4 col-sm-6 col-12 mt-5'>
                        <div className='footer-detail mt-3  '>
                            <h5 className=' ms-4 text-start'> Company </h5>
                            <ul className='text-start' >
                                <li>About Us</li>
                                <li>Delivery Information</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>contact Us</li>
                                <li>Support Center</li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-xl-2 col-lg-4 col-sm-6 col-12 mt-5'>
                        <div className='footer-detail mt-3 '>
                            <h5 className=' ms-4 text-start'> Category </h5>
                            <ul className='text-start' >
                                <li>Dairy & Bakery</li>
                                <li>Fruits & Vegetable</li>
                                <li>Snack & Spice</li>
                                <li>Juice & Drinks</li>
                                <li>Chicken & Meat</li>
                                <li>Fast Food</li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-xl-4 col-lg-4 col-sm-6 col-12 mt-5'>
                        <div className='Subscribe text-start mt-3'>
                            <h5>Subscribe Our Newsletter</h5>
                            <div className='position-relative'>
                                <input type="text" placeholder='Searach her' />
                                <div className='input-icone'>
                                    <a href="#"><i><FaTelegramPlane /></i></a>
                                </div>
                            </div>
                            <div className='footer-icone d-flex '>
                                <span><RiFacebookLine /></span>
                                <span><RiTwitterXFill /></span>
                                <span><IoLogoDribbble /></span>
                                <span><FaInstagram /></span>
                            </div>

                            <div className='d-flex'>
                                <div className='footer-img position-relative'>
                                    <img src={footerimg1} alt="" />
                                    <div className='img-overlay'></div>
                                    <div className='footer-swiper-icone'>
                                        <span><GrInstagram /></span>
                                    </div>
                                </div>
                                <div className='footer-img position-relative'>
                                    <img src={footerimg2} alt="" />
                                    <div className='img-overlay'></div>
                                    <div className='footer-swiper-icone'>
                                        <span><GrInstagram /></span>
                                    </div>
                                </div>
                                <div className='footer-img position-relative'>
                                    <img src={footerimg3} alt="" />
                                    <div className='img-overlay'></div>
                                    <div className='footer-swiper-icone'>
                                        <span><GrInstagram /></span>
                                    </div>
                                </div>
                                <div className='footer-img position-relative'>
                                    <img src={footerimg4} alt="" />
                                    <div className='img-overlay'></div>
                                    <div className='footer-swiper-icone'>
                                        <span><GrInstagram /></span>
                                    </div>
                                </div>
                                <div className='footer-img position-relative'>
                                    <img src={footerimg5} alt="" />
                                    <div className='img-overlay'></div>
                                    <div className='footer-swiper-icone'>
                                        <span><GrInstagram /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='text-center'>
                        <hr />
                        <p>© 2024 <span style={{ color: '#64B496' }} >Carrot</span>, All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;