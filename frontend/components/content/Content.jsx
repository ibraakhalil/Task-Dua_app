'use client'
import Image from 'next/image'
import { useState } from 'react';
import { IoBookmarkOutline, IoCopyOutline, IoShareSocialOutline } from "react-icons/io5";
import { PiLightbulbFilament, PiWarningOctagonLight } from "react-icons/pi";


function Content({ id, subCategories, duas }) {
    const [play, setPlay] = useState(true)
    const [modal, setModal] = useState(false)

    const handleControl = (e) => {
        setPlay(!play)
        if (play) e.currentTarget.nextSibling.play()
        if (!play) e.currentTarget.nextSibling.pause()
    }

    modal && setTimeout(() => {
        const modalClass = document.querySelector('.modal')
        modalClass.classList.remove('active')
        setModal(false)
    }, 1500);

    const handleAction = (e) => {
        const modalClass = document.querySelector('.modal')
        modalClass.classList.add('active')
        setModal(true)
    }
    return (
        <div className='content-wrapper scroll-smooth sroll-width  h-[calc(100vh-100px)] overflow-auto pr-2'>
            <div className="modal bg-black py-4 px-8 rounded text-white absolute top-12 left-[36%] translate-y-[-400%]">
                <p>Coming Soon Insha-Allah</p>
            </div>
            {subCategories?.filter(item => item.cat_id == id)?.map((items, i) => <div key={i}>
                <div id={`sub_cat_${items.subcat_id}`} className="subcategory-name bg-white rounded-xl mb-4 p-4 font-medium">
                    <p><span className='text-primary'>Section:</span> {items.subcat_name_en}</p>
                </div>
                <div className="items">
                    {duas?.filter(x => x.subcat_id === items.subcat_id)?.map((item, i) => <div id={item.dua_id} key={i} className='item bg-white mb-4 rounded-xl p-6'>
                        <div className="header flex items-center gap-4 text-primary font-medium">
                            <Image src={'/duacard.svg'} width={40} height={40} alt='img' />
                            <p className='font-semibold'>{item.dua_id}. {item.dua_name_en}  </p>
                        </div>
                        <div className="body text-lg py-5 font-medium">
                            {item.top_en && <p>
                                {item.top_en}
                            </p>}
                            {item.dua_indopak && <p className='my-8 text-right text-3xl'>
                                {item.dua_indopak}
                            </p>}
                            {item.transliteration_en && <p className='my-4'><i className='font-semibold'>
                                Transliteration: </i>{item.transliteration_en}
                            </p>}
                            {item.translation_en && <p className='my-4'>
                                <b>Translation: </b>{item.translation_en}
                            </p>}
                            {item.bottom_en && <p>
                                {item.bottom_en}
                            </p>}
                        </div>
                        {item.refference_en && <div className="reference text-lg font-medium">
                            <p className='text-primary'>Reference:</p>
                            <p>{item.refference_en}</p>
                        </div>}
                        <div className='flex justify-between items-center mt-10'>
                            <div className='audio'>
                                {item.audio && <Image onClick={handleControl} src={!play ? '/pause.svg' : '/audiobtn.svg'} width={40} height={40} alt='audio' className='cursor-pointer' />}
                                {item.audio && <audio id='player' src={item.audio}></audio>}
                            </div>
                            <div className="actions text-gray-400 flex items-center gap-8 text-[23px] justify-end">
                                <span onClick={handleAction} className='cursor-pointer'><IoCopyOutline /></span>
                                <span onClick={handleAction} className='cursor-pointer'><IoBookmarkOutline /></span>
                                <span onClick={handleAction} className='cursor-pointer'><PiLightbulbFilament /></span>
                                <span onClick={handleAction} className='cursor-pointer'><IoShareSocialOutline /></span>
                                <span onClick={handleAction} className='cursor-pointer'><PiWarningOctagonLight /></span>
                            </div>
                        </div>
                    </div>)}
                </div>

            </div>)}
        </div>
    )
}

export default Content