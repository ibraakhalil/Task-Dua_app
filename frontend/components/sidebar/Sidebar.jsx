import { HiOutlineHome } from "react-icons/hi2";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoAddCircleOutline, IoBookOutline, IoBookmarkOutline } from "react-icons/io5";
import { PiLightbulbFilament } from 'react-icons/pi';
import { RiApps2Line } from "react-icons/ri";
import { GoCommentDiscussion } from "react-icons/go";
import Image from "next/image";

function Sidebar() {
  let array = [<HiOutlineHome />, <RiApps2Line />, 
  <PiLightbulbFilament />, <IoBookmarkOutline />, <IoAddCircleOutline />, <GoCommentDiscussion />, <IoBookOutline />]
  return (
    <div className='sroll-width lg:h-[calc(100vh-40px)] lg:overflow-auto lg:p-6 lg:pr-8 bg-white flex lg:flex-col rounded-3xl lg:justify-between items-center max-[1024px]:absolute max-[1024px]:w-[90%] max-[1024px]:py-2 max-[1024px]:px-8 max-[1024px]:rounded-full bottom-2 left-[5%] max-[1024px]:shadow-my' >
      
      <div className='mb-16 rounded-md min-w-[50px] min-h-[50px] flex justify-center items-center max-[1024px]:hidden'>
        <Image src="/dua-logo.svg" width={50} height={50} alt="logo" className=""/>
      </div>
      <ul className='max-[1024px]:flex max-[1024px]:w-[100%] justify-between'>
        {array.map((arr, i) =>
          <li className='bg-bg text-primary rounded-full w-[40px] h-[40px] lg:mb-6 flex justify-center items-center text-2xl cursor-pointer'>{arr}</li>
        )}
      </ul>
      <div className='bg-primary text-white mt-16 rounded-md min-w-[50px] min-h-[50px] flex justify-center items-center text-3xl font-bold max-[1024px]:hidden'><FaHandHoldingHeart /></div>
    </div>
  )
}


export default Sidebar