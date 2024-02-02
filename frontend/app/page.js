'use client'
import Category from "@/components/category/Category";
import Content from "@/components/content/Content";
import Setting from "@/components/setting/Setting";
import Sidebar from "@/components/sidebar/Sidebar";
import { API_URL } from "@/constant/constant";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCog, FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

export default function Home() {
  const [catId, setCatId] = useState(1)
  const [subCategories, setSubCategories] = useState([])
  const [duas, setDuas] = useState([])
  const [active, setActive] = useState(false)

  useEffect(() => {
    axios.get(`${API_URL}/sub_categories`)
      .then(res => {
        setSubCategories(res.data)
      })
      .catch(e => console.log(e.message))
    axios.get(`${API_URL}/duas`)
      .then(res => {
        setDuas(res.data)
      })
      .catch(e => console.log(e.message))
  }, [])

  const categoryId = (id) => {
    setCatId(id)
  }

  const handleSetting = () => {
    const settingDiv = document.querySelector('.settingDiv')
    settingDiv.classList.toggle('active')
  }

  const handleClick = (e) => {
    setActive(!active)
    const categoryDiv = document.querySelector('.categoryDiv')
    categoryDiv.classList.toggle('active')
  }

  return (
    <main className="flex gap-[2rem] bg-bg p-6 pb-0 min-h-[100vh] overflow-hidden relative">
      <Sidebar />
      <div className="wrapper w-[100%] flex flex-col">
        <header className=" flex justify-between gap-20 items-center mb-4 w-[100%]">
          <div className="flex justify-between w-auto">
            <div className="flex gap-4">
              <div className="lg:hidden cursor-pointer flex items-center bg-primary w-12 h-12 justify-center text-[24px] text-white rounded" onClick={handleClick}>
                {active ? <FaTimes /> : <FaBars />}
              </div>
              <h1 className="text-2xl flex items-center">Duas Page</h1>
            </div>
          </div>
          <div className="text-primary flex gap-2 items-center">
            <div className="rounded-md bg-white w-[300px] flex gap-3 mr-8 p-1 max-[768px]:hidden">
              <input className="bg-transparent outline-none pl-2 w-[100%]" type="text" placeholder="Search by Dua Name" />
              <div className="flex items-center justify-end bg-bg py-2 px-3 rounded-md text-[22px]">
                <CiSearch />
              </div>
            </div>
            <Image src="/profile.svg" width={50} height={50} alt="img" />
            <span className="text-[12px]">▼</span>
            <span className="text-[22px] ml-3 cursor-pointer" onClick={handleSetting} ><FaCog /></span>
          </div>
        </header>

        <div className="wrapper flex gap-6">
          <Category categoryId={categoryId} subCategories={subCategories} duas={duas} />
          <Content id={catId} subCategories={subCategories} duas={duas} />
          <Setting />
        </div>
      </div>
    </main>
  );
}
