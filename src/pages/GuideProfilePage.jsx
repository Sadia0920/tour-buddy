import React from 'react'
import Navbar from '../components/Navbar'
import FooterGuide from '../components/FooterGuide'
import Card from '../components/card'
import RatingBig from '../components/RatingBig'
import Progress from '../components/Progress'
import ReviewCard from '../components/ReviewCard'

export default function GuideProfilePage() {
  return (
    <div>
        <Navbar></Navbar>
        <div className='min-h-[calc(100vh-200px-195px)] w-10/12 mx-auto'>
        <h2 className='text-xl font-medium mt-20 mb-12'>Your Selected Guide:</h2>
            <div className='lg:flex items-center'>
            <Card></Card>
            <button className='btn bg-[#13253F] lg:mt-0 mt-8 text-white text-xl text-center rounded-3xl px-12 ml-10'>Hire Me</button>
            </div>

        <div className='flex md:flex-row flex-col justify-between my-9'>
        <div>
        <h1 className='mb-5 text-4xl font-bold text-[#1C2B38]'>4.0 < span className='text-[#778088] font-light text-xl ml-5'>14 Reviews</span></h1>
        <RatingBig></RatingBig>
        </div>

        <div className='bg-[#E6E6E6]  md:mt-0 mt-5  py-6 px-12 rounded-[30px]'>
        <p><strong>Language:</strong> Bangla & English</p>
      <p><strong>Phone Number:</strong> 01626000513</p>
      <p><strong>Experience:</strong> 7 years</p>
      <p><strong>Location:</strong> Dhaka, Bangladesh</p>
        </div>
        </div>
        <h2 className='text-xl font-medium mt-16'>Customer Review</h2>
        <Progress></Progress>
        <ReviewCard></ReviewCard>
        <div className='w-1/5 mx-auto'>
        <button className='btn text-[#7BBCB0] underline mt-12 mb-32 text-sm font-semibold bg-transparent border-none'>View More Comments</button>
        </div>


        </div>
        <FooterGuide></FooterGuide>
    </div>
  )
}