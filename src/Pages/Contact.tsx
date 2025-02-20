import locationPin from '../assets/Cloc.svg'
import vector from '../assets/message.svg'
import message from '../assets/Cmob.svg'
import facebook from '../assets/Group 3037.svg'
import instragram from '../assets/Group 3038.svg'
import youtube from '../assets/Group 3200.svg'
 
 
function Contact() {
    return (
        <div className=":relative items-center py-16 sm:py-20 lg:pl-16" >
            <div className="contact-container lg:w-[82%] xl:w-[78%] mb-10 mx-auto sm:w-[80%] w-[70%]  bg-[#e2eaff] ">
                <article className="flex flex-col lg:flex-row items-center justify-center md:relative pt-10 md:pt-12">
 
                    <div className="contact-details lg:absolute bg-white shadow-xl lg:w-[45%] lg:h-[65%]
                          left-[-7%] lg:transform-translate-y-1/2
                           border border-gray-200 sm:w-[75%] w-[85%] mx-auto" >
                        <div className="p-6 md:p-10 lg:p-6">
                            <h3 className="font-kanit sm:text-[32px] text-[28px] text-[#002856] font-medium mb-4 text-left">Contact Details</h3>
                            <div className="space-y-5 md:py-4">
                                <div className="flex flex-row justify-baseline space-x-3 items-start">
                                    <img src={locationPin} className="mt-2 w-[22.5px] h-[32px]"></img>
                                    <p className=" text-[#4b4b6d] text-left  font-mulish sm:text-[24px] text-[20px]  ">1187 Lake Forest City,<br /> Uttarakhand, 110006, India</p>
                                </div>
 
                                <div className="flex flex-row space-x-3">
                                    <img src={vector} className='mt-2 w-[32px] h-[24px]'></img>
                                    <p className="text-[#4b4b6d] text-left font-mulish sm:text-[24px] text-[20px]"> support@villacrest.in</p>
                                </div>
 
                                <div className="flex flex-row space-x-3">
                                    <img src={message} className='w-[24.3px] h-[37.7px]'></img>
                                    <p className="text-[#4b4b6d] text-left font-mulish sm:text-nowrap sm:text-[24px] text-[20px]"> +91-9910014421, 9891149697</p>
                                </div>
 
                            </div>
 
                            <div className="flex mt-7 space-x-4 mt- items-left">
                                <img src={instragram} alt="" />
                                <img src={youtube} alt="" />
                                <img src={facebook} alt="" />
                            </div>
                        </div>
                    </div>
 
                    <div className="md:w-1/3 h-[1%] "></div>
                    <div className="md:p-2 lg:w-[50%] sm:w-[75%] w-[85%] mt-13">
                        <h2 className=" font-kanit text-[#002856] text-[30px] sm:text-[42px] md:text-left text-center font-medium">Get in Touch</h2>
                        <p className="mb-6 text-[18px] sm:text-[24px] font-kanit text-[#002856] md:text-left text-center  ">Feel free to drop your message below!</p>
                        <form className="space-y-4 md:px-0 px-4">
                            <input type="text" placeholder="Your Name" className="md:w-[105%] text-[#c2c2c2] font-mulish md:p-4 p-3 text-[18px] w-full  bg-[#ffffff] rounded" />
                            <input type="text" placeholder="Your Mobile Number" className="md:w-[105%] w-full text-[#c2c2c2] font-mulish md:p-4 p-3 bg-[#ffffff] text-[18px]  rounded" />
                            <input type="email" placeholder="Your Email Address" className="md:w-[105%] w-full  text-[#c2c2c2] font-mulish md:p-4 p-3 bg-[#ffffff] text-[18px]  rounded" />
                            <textarea placeholder="Enter your message here.." className="md:w-[105%] w-full h-[10.5rem] text-[rgb(194,194,194)] font-mulish md:p-4 p-3 text-[18px]  bg-[#ffffff]  rounded"></textarea>
                            <button type="submit" className="bg-[#6d87cb] md:items-start items-center mb-7  text-white md:px-16 md:py-5  px-12 py-3 font-raleway font-bold text-[22px] mx-auto rounded-4xl hover:bg-[#5b70a5] ">SEND</button>
                        </form>
                    </div>
                </article>
            </div>
        </div>
    );
}
 
export default Contact;
