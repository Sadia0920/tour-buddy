import payment from '../assets/payment.png';

export default function Form() {


  return (
    <div>
    <div className="hero">
  <div className="hero-content w-full justify-between flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <img src={payment} alt="" />
    </div>
    <div className="card w-9/12">
    
      <form className="card-body ">
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Name:</span>
          </label>
          <input type="text" placeholder="Your Name*" name='name' className="input bg-[#F4F4F5]" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Transaction Id:</span>
          </label>
          <input type="password" placeholder="Transaction Id*" name='transactionId' className="input bg-[#F4F4F5]" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number:</span>
          </label>
          <input type="number" placeholder="Your Phone Number*" name='phoneNumber' className="input bg-[#F4F4F5]" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Pin Code:</span>
          </label>
          <input type='password'  placeholder="Pin Code*" name='pinCode' className="input bg-[#F4F4F5] " required />
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}


