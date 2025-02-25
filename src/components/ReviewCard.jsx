import review1 from '../assets/Review1.png';
import review2 from '../assets/Review2.png';

export default function ReviewCard() {
    return (
    <div>
    {/* Card 1 */}
    <div className="card flex-row bg-base-100 w-full shadow-xl p-0">
  <figure>
    <img
    className='w-40'
    src={review1}
      alt="Review" />
  </figure>
  <div className='flex items-center justify-between'>
  <div className="card-body">
   <div>
   <h2 className="card-title">
    {/* Rating */}
    <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFA432]" />
  <input
    type="radio"
    name="rating-6"
    className="mask mask-star-2 bg-[#FFA432]"
     />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFA432]" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFA432]" defaultChecked/>
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFA432]" />
</div>

 </h2>
    <h2 className="card-title text-lg text-[#1C2B38] w-40 font-semibold">Arlene McCoy<i class="fa-solid fa-check-double text-[#7BBCB0]"></i></h2>
    <p className='text-[#778088] text-sm font-medium'>2 October 2012</p>
   </div>
  </div>
  <div >
   <div className='flex justify-between items-center mb-3'>
   <h2 className="card-title text-[15px] text-[#1C2B38] font-bold">Good tour, really well organised</h2>
   <p className='text-[#778088] text-sm font-bold'>Helpful? <span className='text-[#7BBCB0] text-sm font-semibold'>Yes</span> </p>
   </div>
    <p className='text-[#000000] text-sm'>"Amazing Guide!"
        <br></br>
         Our tour guide in Kuakata was fantastic! They showed us the best spots for sunrise and sunset, shared fascinating local stories, and made the trip smooth and enjoyable. Their friendly attitude and attention to detail truly made our visit unforgettable. Highly recommend!</p>
  </div>
  </div>
  <div className="card-body">

  </div>
    </div>
    {/* Card 2 */}
    <div className="card flex-row bg-base-100 w-full shadow-xl p-0 mt-1">
  <figure>
    <img
    className='w-40'
    src={review2}
      alt="Review" />
  </figure>
  <div className='flex items-center justify-between'>
  <div className="card-body">
   <div>
   <h2 className="card-title">
    {/* Rating */}
    <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFA432]" />
  <input
    type="radio"
    name="rating-6"
    className="mask mask-star-2 bg-[#FFA432]"
     />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFA432]" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFA432]" defaultChecked/>
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFA432]" />
</div>

 </h2>
    <h2 className="card-title text-lg text-[#1C2B38] w-40 font-semibold">Jenny Wilson<i class="fa-solid fa-check-double text-[#7BBCB0]"></i></h2>
    <p className='text-[#778088] text-sm font-medium'>2 October 2012</p>
   </div>
  </div>
  <div >
   <div className='flex justify-between items-center mb-3'>
   <h2 className="card-title text-[15px] text-[#1C2B38] font-bold">Informative But Disappointed Not seeing Changing Of The Guide</h2>
   <p className='text-[#778088] text-sm font-bold'>Helpful? <span className='text-[#7BBCB0] text-sm font-semibold'>Yes</span> </p>
   </div>
    <p className='text-[#000000] text-sm'>"Fantastic Experience!"
        <br></br>
         Our visit to Kuakata was unforgettable, thanks to our amazing guide. They were knowledgeable, friendly, and went above and beyond to ensure we enjoyed every moment. From exploring the beach to learning about local culture, everything was perfect. Highly recommended!</p>
  </div>
  </div>
  <div className="card-body">

  </div>
    </div>
    </div>
    )
  }