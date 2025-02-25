import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'
import group from '../assets/group.png';

export default function PaymentPage() {
  return (
    <div>
        <Navbar></Navbar>
        <div className='min-h-[calc(100vh-200px-175px)] w-10/12 mx-auto'>
        <h2 className='text-2xl font-semibold mt-20 mb-10'>Payment</h2>
        <p className='text-2xl font-normal mt-10 mb-6'>Choose Payment Method</p>

        <Form></Form>
        <p className='text-[15px] font-bold mb-5 md:ml-14'>Select  Method :</p>
        <div className='md:ml-14'>
            <button className='btn bg-[#37B1E2] text-white rounded-full px-7 py-1 mr-6'>
            <div className='w-4 h-4 rounded-full bg-[#FFFFFFCC]'></div>
            Bkash
            </button>
            <button className='btn bg-[#37B1E2] text-white rounded-full px-7 py-1 mr-6'>
            <div className='w-4 h-4 rounded-full bg-[#FFFFFFCC]'></div>
            Nogod
            </button>
            <button className='btn bg-[#37B1E2] text-white rounded-full px-7 py-1 mr-6'>
            <div className='w-4 h-4 rounded-full bg-[#FFFFFFCC]'></div>
            UPAY
            </button>
            <button className='btn bg-[#37B1E2] text-white rounded-full px-7 py-1 mr-6'>
            <div className='w-4 h-4 rounded-full bg-[#FFFFFFCC]'></div>
            VISA
            </button>
            <button className='btn bg-[#37B1E2] text-white rounded-full px-7 py-1'>
            <div className='w-4 h-4 rounded-full bg-[#FFFFFFCC]'></div>
            MasterCard
            </button>
        </div>

      <div className='w-1/5 mx-auto'>
      <button className='btn  mx-auto text-center rounded-3xl px-12 bg-[#13253F] text-white my-10 text-sm font-semibold'>Confirm Payment</button>
      </div>
    <div className='w-9/12 mx-auto mb-10'>
    <img src={group} alt="" />
    </div>
        
        </div>
        <Footer></Footer>
    </div>
  )
}