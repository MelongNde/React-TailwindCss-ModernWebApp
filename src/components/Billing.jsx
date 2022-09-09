import React from 'react'

import {apple, google, bill} from '../assets'
import styles, {layout} from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img className='w-[100%] h-[100%] relative z-[5] ' src={bill} alt="bill" />
        <div className='absolute z-[3] left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] left-1/2 bottom-0 top-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} max-w-[470px mt-5`}>
          Easily control your <br className='sm:block hidden'/> billing & invoicing.
        </h2>
        <p className={`${styles.paragraph}`}>
        With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt="playstore" className='w-[128px] h-[42px] object-contain  cursor-pointer' />
        </div>
      </div>
    </section>
  )
}

export default Billing