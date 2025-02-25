export default function Progress() {
    return (
        <div>
             <div className='text-right mt-2 mb-16'>
          
          <span className='font-semibold text-[#495560] text-left'>Guide </span><progress className="progress progress-warning w-56 md:w-80" value="92" max="100"></progress><span className='font-semibold text-[#778088]'>4.8</span>
          <br></br>
          <span className='font-semibold text-[#495560]  text-left'>Transportation </span><progress className="progress progress-warning w-56 md:w-80" value="64" max="100"></progress><span className='font-semibold text-[#778088]'>3.0</span>
          <br></br>
          <span className='font-semibold text-[#495560]  text-left'>Value for money </span><progress className="progress progress-warning w-56 md:w-80" value="88" max="100"></progress><span className='font-semibold text-[#778088]'>4.5</span>
          <br></br>
          <span className='font-semibold text-[#495560]  text-left'>Safety </span><progress className="progress  progress-warning w-56 md:w-80" value="78" max="100"></progress><span className='font-semibold text-[#778088]'>4.0</span>
          </div>
        </div>
    )
}

