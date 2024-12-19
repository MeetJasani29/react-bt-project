import './product.css'
import { FaStar } from "react-icons/fa";
import Product1 from './../../images/Product1.jpg';
import Product2 from './../../images/Product2.jpg';
import Product3 from './../../images/Product3.jpg';
import Product4 from './../../images/Product4.jpg';
import Product5 from './../../images/Product5.jpg';
import Product6 from './../../images/Product6.jpg';
import Container from 'react-bootstrap/Container';
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { IoLockClosedOutline } from "react-icons/io5";


const Product = () => {
    return (
        <section>
              <div className='producat-title container-lg  d-flex mt-1 justify-content-between align-items-center'> 
                    <h4>Product</h4>
                    <span><a href="#">Home</a> - Product</span>
                </div>
            <Container>
          

                {/* style1 */}
                <div>
                    <div className='text-center mb-5 mt-5' >
                        <h2 className='fw-bold fs-2'>Style 1</h2>
                        <p className='text-black-50 fw-semibold  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt
                            ut labore lacus vel facilisis. </p>
                    </div>

                    <div className='row'>
                        <div className='card col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-3  ' >
                            <div className='product-img position-relative'>
                                <img src={Product1} alt="product1" />
                                <div className='slide-icone'>
                                    <a href="#"><i><FaRegHeart /></i></a><br />
                                    <a href="#"><i><GrView />  </i></a>
                                </div>
                                <div className='slide-icone2'>
                                    <a href="#"><i><IoLockClosedOutline />  </i></a>
                                </div>
                            </div>

                            <div className='product-conten'>
                                <h5>Snacks</h5>
                                <div className='d-flex justify-content-center '>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <i className='ps-2'>( 5.0 )</i>
                                </div>
                                <a href="#"> Best snakes with hazel nut pack 200gm</a>
                                <div className='d-flex align-items-center justify-content-center mb-4'>
                                    <span className='me-2'>$145</span>
                                    <del>$150</del>
                                </div>
                            </div>
                        </div>

                        <div className='card col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-3  ' >
                            <div className='product-img position-relative '>
                                <img src={Product2} alt="product1" />
                                <div className='slide-icone'>
                                    <a href="#"><i><FaRegHeart /></i></a><br />
                                    <a href="#"><i><GrView />  </i></a>
                                </div>
                                <div className='slide-icone2'>
                                    <a href="#"><i><IoLockClosedOutline />  </i></a>
                                </div>
                            </div>

                            <div className='product-conten'>
                                <h5>Fruits</h5>
                                <div className='d-flex justify-content-center '>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaRegStar /></h6></div>
                                    <div><h6><FaRegStar /></h6></div>
                                    <i className='ps-2'>( 5.0 )</i>
                                </div>
                                <a href="#"> Fresh organic apple 1kg simla marming</a>
                                <div className='d-flex align-items-center justify-content-center mb-4'>
                                    <span className='me-2'>$120.25</span>
                                    <del>$123.25</del>
                                </div>
                            </div>
                        </div>

                        <div className='card col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-3  ' >
                            <div className='product-img position-relative '>
                                <img src={Product3} alt="product1" />
                                <div className='slide-icone'>
                                    <a href="#"><i><FaRegHeart /></i></a><br />
                                    <a href="#"><i><GrView />  </i></a>
                                </div>
                                <div className='slide-icone2'>
                                    <a href="#"><i><IoLockClosedOutline />  </i></a>
                                </div>
                            </div>

                            <div className='product-conten'>
                                <h5>Snacks</h5>
                                <div className='d-flex justify-content-center '>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaRegStar /></h6></div>
                                    <i className='ps-2'>( 5.0 )</i>
                                </div>
                                <a href="#"> Organic fresh venila farm watermelon <br /> 5kg</a>
                                <div className='d-flex align-items-center justify-content-center mb-4'>
                                    <span className='me-2'>$50.30</span>
                                    <del>$72.60</del>
                                </div>
                            </div>
                        </div>

                        <div className='card col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-3  ' >
                            <div className='product-img position-relative '>
                                <img src={Product4} alt="product1" />
                                <div className='slide-icone'>
                                    <a href="#"><i><FaRegHeart /></i></a><br />
                                    <a href="#"><i><GrView />  </i></a>
                                </div>
                                <div className='slide-icone2'>
                                    <a href="#"><i><IoLockClosedOutline />  </i></a>
                                </div>
                            </div>

                            <div className='product-conten'>
                                <h5>Snacks</h5>
                                <div className='d-flex justify-content-center '>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <i className='ps-2'>( 5.0 )</i>
                                </div>
                                <a href="#"> Sweet crunchy nut mix 250gm pack</a>
                                <div className='d-flex align-items-center justify-content-center mb-4'>
                                    <span className='me-2'>$120.25</span>
                                    <del>$123.25</del>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* style2  */}
                <div>
                    <div className='text-center mb-5 mt-5' >
                        <h2 className='fw-bold fs-2'>Style 2</h2>
                        <p className='text-black-50 fw-semibold  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt
                            ut labore lacus vel facilisis. </p>
                    </div>

                    <div className='row'>
                        <div className='card col-lg-4 col-md-6 col-sm-12  mt-3  ' >
                            <div className='product-img2 position-relative '>
                                <img src={Product5} alt="product1" className='img-fluid' />
                                <div className='slide-icone'>
                                    <a href="#"><i><FaRegHeart /></i></a><br />
                                    <a href="#"><i><GrView />  </i></a>
                                </div>
                                <div className='slide-icone2'>
                                    <a href="#"><i><IoLockClosedOutline />  </i></a>
                                </div>
                            </div>

                            <div className='product-conten'>
                                <a href="#">Organic fresh lemon</a>
                                <p className='mt-2'> Lorem ipsum dolor adipisicing elit.</p>
                                <div className='d-flex justify-content-center '>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <i className='ps-2'>( 5.0 )</i>
                                </div>

                                <div className='d-flex align-items-center justify-content-center '>
                                    <span className='me-2'>$145</span>
                                    <del>$150</del>
                                </div>
                            </div>
                        </div>

                        <div className='card col-lg-4 col-md-6 col-sm-12  mt-3  ' >
                            <div className='product-img2 position-relative '>
                                <img src={Product2} alt="product1" className='img-fluid'/>
                                <div className='slide-icone'>
                                    <a href="#"><i><FaRegHeart /></i></a><br />
                                    <a href="#"><i><GrView />  </i></a>
                                </div>
                                <div className='slide-icone2'>
                                    <a href="#"><i><IoLockClosedOutline />  </i></a>
                                </div>
                            </div>

                            <div className='product-conten'>
                                <a href="#"> Organic fresh apple juice</a>
                                <p className='mt-3'>Lorem ipsum dolor adipisicing elit.</p>
                                <div className='d-flex justify-content-center '>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <i className='ps-2'>( 5.0 )</i>
                                </div>

                                <div className='d-flex align-items-center justify-content-center '>
                                    <span className='me-2'>$50.30</span>
                                    <del>$72.60</del>
                                </div>
                            </div>
                        </div>

                        <div className='card col-lg-4 col-md-6 col-sm-12  mt-3  ' >
                            <div className='product-img2 position-relative '>
                                <img src={Product4} alt="product1" className='img-fluid'/>
                                <div className='slide-icone'>
                                    <a href="#"><i><FaRegHeart /></i></a><br />
                                    <a href="#"><i><GrView />  </i></a>
                                </div>
                                <div className='slide-icone2'>
                                    <a href="#"><i><IoLockClosedOutline />  </i></a>
                                </div>
                            </div>

                            <div className='product-conten'>
                                <a href="#">Organic fresh venila farm watermelon 5kg</a>
                                <p className='mt-3'>Lorem ipsum dolor adipisicing elit.</p>
                                <div className='d-flex justify-content-center '>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <i className='ps-2'>( 5.0 )</i>
                                </div>

                                <div className='d-flex align-items-center justify-content-center'>
                                    <span className='me-2'>$120.25</span>
                                    <del>$123.25</del>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* style3 */}
                <div>
                    <div className='text-center mb-5 mt-5' >
                        <h2 className='fw-bold fs-2'>Style 3</h2>
                        <p className='text-black-50 fw-semibold  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt
                            ut labore lacus vel facilisis. </p>
                    </div>

                    <div className='row'>
                        <div className='card col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-3  ' >
                            <div className='product-img position-relative '>
                                <img src={Product5} alt="product1" />
                                <div className='slide-icone'>
                                    <a href="#"><i><FaRegHeart /></i></a><br />
                                    <a href="#"><i><GrView />  </i></a>
                                </div>
                                <div className='slide-icone2'>
                                    <a href="#"><i><IoLockClosedOutline />  </i></a>
                                </div>
                            </div>

                            <div className='product-conten'>
                                <a href="#"> Organic fresh lemon</a>
                                <p className='mt-3'>Lorem ipsum dolor adipisicing elit.</p>
                                <div className='d-flex justify-content-center '>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <i className='ps-2'>( 5.0 )</i>
                                </div>

                                <div className='d-flex align-items-center justify-content-center '>
                                    <span className='me-2'>$145</span>
                                    <del>$150</del>
                                </div>
                            </div>
                        </div>

                        <div className='card col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-3  ' >
                            <div className='product-img position-relative '>
                                <img src={Product2} alt="product1" />
                                <div className='slide-icone'>
                                    <a href="#"><i><FaRegHeart /></i></a><br />
                                    <a href="#"><i><GrView />  </i></a>
                                </div>
                                <div className='slide-icone2'>
                                    <a href="#"><i><IoLockClosedOutline />  </i></a>
                                </div>
                            </div>

                            <div className='product-conten'>
                                <a href="#"> Organic fresh apple juice</a>
                                <p className='mt-3'>Lorem ipsum dolor adipisicing elit.</p>
                                <div className='d-flex justify-content-center '>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <i className='ps-2'>( 5.0 )</i>
                                </div>

                                <div className='d-flex align-items-center justify-content-center '>
                                    <span className='me-2'>$120.25</span>
                                    <del>$123.25</del>
                                </div>
                            </div>
                        </div>

                        <div className='card col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-3 ' >
                            <div className='product-img position-relative '>
                                <img src={Product3} alt="product1" />
                                <div className='slide-icone'>
                                    <a href="#"><i><FaRegHeart /></i></a><br />
                                    <a href="#"><i><GrView />  </i></a>
                                </div>
                                <div className='slide-icone2'>
                                    <a href="#"><i><IoLockClosedOutline />  </i></a>
                                </div>
                            </div>

                            <div className='product-conten'>
                                <a href="#">Organic watermelon 5kg </a>
                                <p className='mt-3'>Lorem ipsum dolor adipisicing elit.</p>
                                <div className='d-flex justify-content-center '>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <i className='ps-2'>( 5.0 )</i>
                                </div>

                                <div className='d-flex align-items-center justify-content-center '>
                                    <span className='me-2'>$50.30</span>
                                    <del>$72.60</del>
                                </div>
                            </div>
                        </div>

                        <div className='card col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-3  ' >
                            <div className='product-img position-relative '>
                                <img src={Product6} alt="product1" />
                                <div className='slide-icone'>
                                    <a href="#"><i><FaRegHeart /></i></a><br />
                                    <a href="#"><i><GrView />  </i></a>
                                </div>
                                <div className='slide-icone2'>
                                    <a href="#"><i><IoLockClosedOutline />  </i></a>
                                </div>
                            </div>

                            <div className='product-conten'>
                                <a href="#"> Sweet crunchy nut mix 250gm pack</a>
                                <p className='mt-3'>Lorem ipsum dolor adipisicing elit.</p>
                                <div className='d-flex justify-content-center '>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <i className='ps-2'>( 5.0 )</i>
                                </div>

                                <div className='d-flex align-items-center justify-content-center '>
                                    <span className='me-2'>$120.25</span>
                                    <del>$123.25</del>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* sty;e4 */}
                <div>
                    <div className='text-center mb-5 mt-5' >
                        <h2 className='fw-bold fs-2'>Style 4</h2>
                        <p className='text-black-50 fw-semibold  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt
                            ut labore lacus vel facilisis. </p>
                    </div>

                    <div className='row'>
                        <div className='card col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-3  ' >
                            <div className='product-img4 position-relative overflow-hidden'>
                                <img src={Product1} alt="product1" />
                                <div className='slide-icone'>
                                    <a href="#"><i><FaRegHeart /></i></a><br />
                                    <a href="#"><i><GrView />  </i></a>
                                </div>
                                <div className='slide-icone3'>
                                    <a href="#"><i><IoLockClosedOutline />  </i></a>
                                </div>
                            </div>

                            <div className='product-conten'>
                                <h5>Snacks</h5>
                                <div className='d-flex justify-content-center '>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <i className='ps-2'>( 5.0 )</i>
                                </div>
                                <a href="#"> Best snakes with hazel nut pack 200gm</a>
                                <div className='d-flex align-items-center justify-content-center mb-4'>
                                    <span className='me-2'>$145</span>
                                    <del>$150</del>
                                </div>
                            </div>
                        </div>

                        <div className='card col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-3  ' >
                            <div className='product-img4 position-relative overflow-hidden'>
                                <img src={Product2} alt="product1" />
                                <div className='slide-icone'>
                                    <a href="#"><i><FaRegHeart /></i></a><br />
                                    <a href="#"><i><GrView />  </i></a>
                                </div>
                                <div className='slide-icone3'>
                                    <a href="#"><i><IoLockClosedOutline />  </i></a>
                                </div>
                            </div>

                            <div className='product-conten'>
                                <h5>Fruits</h5>
                                <div className='d-flex justify-content-center '>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <i className='ps-2'>( 5.0 )</i>
                                </div>
                                <a href="#"> Fresh organic apple 1kg simla marming</a>
                                <div className='d-flex align-items-center justify-content-center mb-4'>
                                    <span className='me-2'>$120.25</span>
                                    <del>$123.25</del>
                                </div>
                            </div>
                        </div>

                        <div className='card col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-3  ' >
                            <div className='product-img4 position-relative overflow-hidden'>
                                <img src={Product3} alt="product1" />
                                <div className='slide-icone'>
                                    <a href="#"><i><FaRegHeart /></i></a><br />
                                    <a href="#"><i><GrView />  </i></a>
                                </div>
                                <div className='slide-icone3'>
                                    <a href="#"><i><IoLockClosedOutline />  </i></a>
                                </div>
                            </div>

                            <div className='product-conten'>
                                <h5>Snacks</h5>
                                <div className='d-flex justify-content-center '>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <i className='ps-2'>( 5.0 )</i>
                                </div>
                                <a href="#"> Organic fresh venila farm watermelon <br /> 5kg</a>
                                <div className='d-flex align-items-center justify-content-center mb-4'>
                                    <span className='me-2'>$50.30</span>
                                    <del>$72.60</del>
                                </div>
                            </div>
                        </div>

                        <div className='card col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-3  ' >
                            <div className='product-img4 position-relative overflow-hidden'>
                                <img src={Product4} alt="product1" />
                                <div className='slide-icone'>
                                    <a href="#"><i><FaRegHeart /></i></a><br />
                                    <a href="#"><i><GrView />  </i></a>
                                </div>
                                <div className='slide-icone3'>
                                    <a href="#"><i><IoLockClosedOutline />  </i></a>
                                </div>
                            </div>

                            <div className='product-conten'>
                                <h5>Snacks</h5>
                                <div className='d-flex justify-content-center '>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <div><h6><FaStar /></h6></div>
                                    <i className='ps-2'>( 5.0 )</i>
                                </div>
                                <a href="#"> Sweet crunchy nut mix 250gm pack</a>
                                <div className='d-flex align-items-center justify-content-center mb-4'>
                                    <span className='me-2'>$120.25</span>
                                    <del>$123.25</del>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

           
        </section>
    )
}
export default Product;