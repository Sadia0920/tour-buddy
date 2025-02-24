import logo from '../assets/tour-buddy-logo.png';
import group1 from '../assets/Group-1.png';
import group2 from '../assets/Group-2.png';
import vector from '../assets/Vector.png';
import flag from '../assets/Flag-UK.png';

function Footer() {

    return (
     <div className="bg-[#13253F] text-white">
<footer className="footer  w-11/12 mx-auto py-10">
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
  <nav>
    <h6 className="footer-title">Payment</h6>
    <a className="text-[#FFFFFF99]">About us</a>
    <a className="text-[#FFFFFF99]">Blog</a>
    <a className="text-[#FFFFFF99]">Press Room</a>
    <a className="text-[#FFFFFF99]">Careers</a>
  </nav>
  <nav>
    <h6 className="footer-title">Help</h6>
    <a className="text-[#FFFFFF99]">Contact Us</a>
    <a className="text-[#FFFFFF99]">FAQs</a>
    <a className="text-[#FFFFFF99]">Terms and conditions</a>
    <a className="text-[#FFFFFF99]">Privacy policy</a>
    <a className="text-[#FFFFFF99]">Sitemap</a>
  </nav>
  <nav>
    <h6 className="footer-title mb-12">Payment methods possible</h6>
    <img src={group1} alt="" />
    <img src={group2} alt="" />
    <a className="text-[#FFFFFF99]">Become a tour guide for Us</a>
  </nav>

{/* copyright part */}

</footer>
<footer className="footer w-11/12 mx-auto pb-5">
  <aside className="grid-flow-col items-center">
    <p className='text-[#FFFFFF99]'>Copyright {new Date().getFullYear()} Tour Buddy. All Rights Reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 lg:mr-32 md:place-self-center md:justify-self-end">
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
    </a>
    <a>
        <img className='w-4' src={vector} alt="" />
    </a>
  </nav>
</footer>
     </div>
    )
  }
  
  export default Footer