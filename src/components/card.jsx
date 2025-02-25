import image from '../assets/image.png';
import Rating from './Rating';

export default function Card() {
    return (
    <div>
    <div className="card flex-row bg-base-100 w-[850px] shadow-xl p-0">
  <figure>
    <img
    className='h-full rounded-md'
    src={image}
      alt="Guide" />
  </figure>
  <div className='flex items-center'>
  <div className="card-body">
    <h2 className="card-title">
    <div className="badge bg-[#7BBCB0] px-10 py-4 text-white">KUAKATA</div>
    <div className="divider divider-horizontal"></div>
    <Rating></Rating>
    </h2>
    <h2 className="card-title text-[#1C2B38] font-bold">Raihan Ahmad</h2>
    <div className='flex'>
    <p className='text-[#495560]'><i class="fa-regular fa-clock mr-2"></i>2 hours</p>
    <div className="divider divider-horizontal"></div>
    <p className='text-[#495560]'><i class="fa-solid fa-car-side mr-2"></i>Transport </p>
    <div className="divider divider-horizontal"></div>
    <p className='text-[#495560]'><i class="fa-solid fa-users-between-lines mr-2"></i>Family Plan</p>
  </div>
  </div>
  <div className='ml-32 text-right'>
    <h2 className="card-title text-[#7BBCB0] font-bold">Tk 250.00</h2>
    <p className='text-[#778088] text-sm'>per person</p>
  </div>
  </div>
    </div>
    </div>
    )
  }