import styles from "../style"
import { discount, robot } from "../assets"

import GetStarted from "./GetStarted"

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col `}>

    <div className={`flex-row flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16`}>
      <div className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10ox] mb-2`}>
        <img src={discount} alt="dicount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For {" "}
          <span className="text-white">1 Month</span> <span>Account</span>
        </p>
        
      </div>

      <div className={`flex flex-row justify-between items-center w-full`}>
        <h1 className="text-white flex-1 font-poppins font-bold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden"/> {" "}
          <span className="text-gradient">Generation</span> {" "}
          
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
        
      </div>
      
      <h1 className="text-white font-poppins font-bold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full">
        Payment Method.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
        We examine annual percentage rates, annual fees.
      </p>

    </div>    

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img className="w-[100%] h-[100%] relative z-[5]" src={robot} alt="Billing" />    
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
      <div className="absolute z-[1] rounded-full w-[80%] h-[80%] bottom-40 white__gradient"></div>
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 top-0 blue__gradient"></div>
    </div>

    <div className={`${styles.flexCenter} ss:hidden`}>
      <GetStarted />
    </div>

  </section>
)
    

export default Hero