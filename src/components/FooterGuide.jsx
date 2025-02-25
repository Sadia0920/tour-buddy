import logo from '../assets/tour-buddy-logo.png';
import group1 from '../assets/Group-1.png';
import group2 from '../assets/Group-2.png';
import vector from '../assets/Vector.png';
import flag from '../assets/Flag-UK.png';
import circle1 from '../assets/1.png';
import circle2 from '../assets/2.png';
import circle3 from '../assets/3.png';
import circle4 from '../assets/4.png';

function FooterGuide() {

    return (
     <div className="bg-[#13253F] text-white">
<footer className="footer justify-between  w-11/12 mx-auto py-10">
  <nav>
  <img className='w-36' src={logo} alt="" />
   
  <select className="select bg-transparent text-[#FFFFFF99] border-[#FFFFFF33] mr-14 mt-5 mb-8 w-full max-w-xs">
  <option disabled selected className='bg-black text-white'>
  <img src={flag} alt="" />English (UK)</option>
  <option className='bg-gray-700 text-white'>English (USA)</option>
  <option className='bg-gray-700 text-white'>Bangla</option>
  </select>

  <select className="select bg-transparent border-[#FFFFFF33] text-[#FFFFFF99] mr-14 w-full max-w-xs">
  <option disabled selected className='bg-gray-700 text-white'>U.S. Dollar ($)</option>
  <option className='bg-gray-700 text-white'>EURO</option>
  <option className='bg-gray-700 text-white'>TAKA</option>
  </select>
  </nav>
    
  <nav className='md:mt-16'>
    {/* <h6 className="footer-title mb-12">Payment methods possible</h6> */}
   
   <img src={group1} alt="" />
   <img src={group2} alt="" />
   
    {/* <a className="text-[#FFFFFF99]">Become a tour guide for Us</a> */}
  </nav>

{/* copyright part */}

</footer>
<div className='bg-[#00000033]'>
<footer className="footer w-11/12 mx-auto py-3">
  {/* <aside className="grid-flow-col items-center">
    <p className='text-[#FFFFFF99]'>Copyright {new Date().getFullYear()} Tour Buddy. All Rights Reserved</p>
  </aside> */}
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>
        <img src={circle1} alt="" />
    </a>
    <a>
        <img src={circle2} alt="" />
    </a>
    <a>
        <img src={circle3} alt="" />
    </a>
    <a>
        <img src={circle4} alt="" />
    </a>
  </nav>
</footer>
</div>
     </div>
    )
  }
  
  export default FooterGuide