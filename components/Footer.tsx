import Link from 'next/link'
import { features } from 'process'
import React from 'react'

    const FooterLinks = { 
        Company: [ 
            {number:1 , Link: 'About Us'},
            {number:2 , Link: 'Contact Us'},
            {number:3 , Link: 'Careers'},
            {number:4 , Link: 'Press'}
        ],

        Product: [
            {number:1, Link:'Product 1'},
            {number:2, Link:'Product 2'},
            {number:3, Link:'Product 3'},
            {number:4, Link:'Product 4'}
        ],

        Service : [
            {number:1, Link: 'Service 1'},
            {number:2, Link: 'Service 2'},
            {number:3, Link: 'Service 3'},
            {number:4, Link: 'Service 4'},
        ],

        Legal: [
            {number:1, Link:'Privacy Policy'},
            {number:2, Link:'Terms & Condition'},
            {number:3, Link:'Return Policy'}
        ]
    }

    const FooterImage = {
        Instagram: '/logo-instagram.svg',
        Facebook: '/logo-facebook.svg',
        Twitter: '/logo-twitter.svg',
        Linkdin: '/logo-linkedin.svg'
    }

const Footer = () => {
  return (
    <div className='h-fit w-full bg-[#161C2D] pt-24 pb-40 px-8'>
      <div className='w-fit mx-auto flex gap-28 '>
        <div className=' max-w-[16.6rem]'>
            <div className='font-extrabold text-2xl text-white mb-9'>NDA</div>
            <p className='text-gray-400 text-sm mb-11'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className='flex gap-5'>
                <img src={FooterImage.Twitter} alt=''  />
                <img src={FooterImage.Facebook} alt="" />
                <img src={FooterImage.Instagram} alt="" />
                <img src={FooterImage.Linkdin} alt="" />
            </div>
        </div>
        <div className='flex gap-12 flex-wrap'>
            <div>
                <div className='text-sm text-gray-400 mb-6'>Company</div>
                {FooterLinks.Company.map((feature) => (
                    <div key={feature.number} className='text-lg text-white mb-2 hover:text-gray-600'><Link href=''>{feature.Link}</Link></div>
                ) )}
            </div>
            <div>
                <div className='text-sm text-gray-400 mb-5'>Product</div>
                {FooterLinks.Product.map((feature) => (
                    <div key={feature.number} className='text-lg text-white mb-2 hover:text-gray-600'><Link href=''>{feature.Link}</Link></div>
                ) )}
            </div>
            <div>
                <div className='text-sm text-gray-400 mb-5'>Service</div>
                {FooterLinks.Service.map((feature) => (
                    <div key={feature.number} className='text-lg text-white mb-2 hover:text-gray-600'><Link href=''>{feature.Link}</Link></div>
                ) )}
            </div>
            <div>
                <div className='text-sm text-gray-400 mb-5'>Legal</div>
                {FooterLinks.Legal.map((feature) => (
                    <div key={feature.number} className='text-lg text-white mb-2 hover:text-gray-600'><Link href=''>{feature.Link}</Link></div>
                ) )}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer