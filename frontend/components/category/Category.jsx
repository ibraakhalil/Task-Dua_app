'use client'
import { API_URL } from "@/constant/constant";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function Categori({ categoryId, subCategories, duas }) {
    const [categories, setCategories] = useState([])
    const [filtCategories, setFiltCategories] = useState([])

    useEffect(() => {
        axios.get(`${API_URL}/categories`)
            .then(res => {
                setCategories(res.data)
                setFiltCategories(res.data)
            })
            .catch(e => console.log(e.message))
    }, [])

    const handleClick = (e) => {
        const categoriClasses = document.querySelectorAll('.category')
        const target = e.currentTarget
        categoryId(target.dataset.id)
        categoriClasses.forEach(item => {
            item.classList.remove('active')
        })
        target.classList.add('active')
    }

    const showDuaCategory = (e) => {
        const duasClasses = document.querySelectorAll('.sub_category .dua')
        duasClasses.forEach(item => {
            item.style.display = 'none'
        })
        const target = e.currentTarget
        target.querySelector('.dua').style.display = 'block'
    }

    const handleSearch = (e) => {
        const value = e.currentTarget.value.toLowerCase()
        const searchCategory = categories.filter(item => item.cat_name_en.toLowerCase().includes(value))
        console.log(searchCategory);
        setFiltCategories(searchCategory);
    }

    return (
        <div className="categoryDiv min-w-[350px] rounded-xl overflow-hidden bg-white max-[1024px]:absolute left-0 max-[1024px]:max-w-[350px] max-[1024px]:translate-x-[-100%]">
            <h3 className="bg-primary text-white p-4 text-center">Categories</h3>
            <div className="flex items-center p-3 border bg-white rounded-md m-3 gap-2 ">
                <CiSearch />
                <input onChange={handleSearch} className="outline-none text-[14px]" type="text" placeholder="Search by categories" />
            </div>
            <div className="wrapper sroll-width h-[calc(100vh-230px)] overflow-auto p-2">
                {filtCategories?.map((category, i) => <div onClick={handleClick} key={i} className="category mb-2" data-id={category.cat_id}>
                    <div id="category" className="flex justify-between items-center bg-white hover:bg-bg hover:cursor-pointer rounded-md p-2">
                        <div className="flex gap-2">
                            <Image className="border rounded-md bg-white p-3" src={`/category/${category.cat_icon || 'bari'}.svg`} width={55} height={55} alt="img" />
                            <div>
                                <h5 className="text-primary font-medium">{category.cat_name_en}</h5>
                                <small className="text-gray-500">Subcategory: {category.no_of_subcat}</small>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="font-medium">{category.no_of_dua}</h3>
                            <p className="font-light text-[12px]">Duas</p>
                        </div>
                    </div>
                    <ul className="sub_category hidden display-none ml-9 py-2 sub-category border-l-2 border-dotted border-primary">
                        {subCategories?.filter(item => item.cat_id == category.cat_id).map(subCategori => <a onClick={showDuaCategory} href={`#sub_cat_${subCategori.subcat_id}`} className="block pl-3 mb-3 cursor-pointer relative before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-primary before:top-[9px] before:left-[-4.5px]">
                            {subCategori.subcat_name_en}
                            <div className="dua hidden pt-4 text-gray-500 text-[14px]">
                                {duas?.filter(y => y.subcat_id == subCategori.subcat_id).map(dua => <a href={`#${dua.dua_id}`} className="mb-3 block pl-5 before:content-['⇒'] before:absolute before:left-3">
                                    {dua.dua_name_en}
                                </a>)}
                            </div>
                        </a>)}
                    </ul>
                </div>)}
            </div>
        </div>
    )
}
