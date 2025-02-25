import { NavLink } from 'react-router-dom';
import logo from '../assets/tour-buddy-logo.png';

function Navbar() {

return (
    <div className='bg-base-100 border-b-2 border-[rgb(230, 230, 230)] sticky z-10 top-0 '>
        <div className="navbar w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><NavLink to='/'>Guide Profile</NavLink></li>
        <li><NavLink to='/payment'>Payment</NavLink></li>
        <li><a>About Us</a></li>
        <li><a>Our Packages</a></li>
        <li><a>Most Desired Places</a></li>
      </ul>
    </div>
    <img className='w-36' src={logo} alt="" />
  </div>
  <div className="navbar-end w-full">
  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to='/'>Guide Profile</NavLink></li>
    <li><NavLink to='/payment'>Payment</NavLink></li>
    <li><a>About Us</a></li>
    <li><a>Our Packages</a></li>
    <li><a>Most Desired Places</a></li>
    </ul>
  </div>
    <a className="btn bg-[#FFDA32] text-[#1C2B38] font-bold rounded-sm px-12">Sign In</a>
  </div>
</div>
    </div>
)
}
  
export default Navbar