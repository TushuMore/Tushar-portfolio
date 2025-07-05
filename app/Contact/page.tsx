import { ContactForm } from '@/components/contact-form-structure'
import Heading from '@/components/Heading'
import SocialMedia from '@/components/SocialMedia'
import React from 'react'


const Contact = () => {
  return (
    <>
        <Heading text='Contact me'/>
          <ContactForm className='w-80 sm:w-100 mx-auto mb-20'id='contact'/>
          <SocialMedia/>
    </>
  )
}

export default Contact