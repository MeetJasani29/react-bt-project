import { Container } from 'react-bootstrap';
import './header.css'
import logo from './../../images/logo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FiSearch } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const Header = () => {

    return (
        <header>
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-12">
                        <div className='top-header d-flex justify-content-between align-items-center mt-4'>
                            <a href="#"><img src={logo} alt="" /></a>
                            <form className='d-flex'>
                                <input type="text" className='rounded-start ' placeholder='Search For items...' />
                                <select className='form-select '>
                                    <option value="categories">All Categories</option>
                                    <option value="men">Men</option>
                                    <option value="women">Women</option>
                                    <option value="electronics">Electronics</option>
                                </select>
                                <a href="#" className='search rounded-end'><FiSearch /></a>
                            </form>

                            <div className='d-none d-lg-flex  align-items-center top-header-icone'>
                                <ul className='pt-3 me-4'>
                                    <li><a href="#"><FaUser /> <span className='ms-1'>Account</span></a></li>
                                </ul>
                                <a href="#" className='me-4'><FaRegHeart /> <span className='ms-1'>Wishlist</span> </a>
                                <a href="#" className='me-4'><FiShoppingCart /><span className='ms-2'>Cart</span> </a>
                            </div>


                        </div>
                    </div>
                </div>
                <hr />
                <div className='d-flex  justify-content-between align-items-center '>
                    <div className='header-menu'>
                        <a href="#"><HiOutlineMenuAlt1 /></a>
                    </div>
                    <div>
                        <Navbar expand="lg" className="navbar">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <NavDropdown title="Category" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Shop Left Sidebar</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Shop Right Sldebar </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Full Width</NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown title="Products" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Product Left Sidebar</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Product Right Sldebar </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Product Full Width</NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown title="Pages" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">About US</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Contact US</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Cart</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Check Out</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Track Order</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Wishlist</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Faq</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Login</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Register</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Policy</NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown title="Blog" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1"> Left Sidebar</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2"> Right Sldebar </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Full Width</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Detail Left Sidebar</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Detail Right Sldebar </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3"> Detail Full Width</NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown title="Element" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Products</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Taypography</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Button</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                    <div className='header-call d-none d-lg-flex'>
                        <span><IoCallOutline /> +123 ( 456 ) ( 7890 )</span>
                    </div>

                    <div className='d-block d-lg-none navbar-side-icon'>
                        <a href="#"><FaRegUser /></a>
                        <a href="#" ><FaRegHeart />  </a>
                        <a href="#"><FiShoppingCart /> </a>
                    </div>
                </div>


            </div>
        </header>
    )
}

export default Header;
