import { IoLanguage } from "react-icons/io5";


function Setting() {
    return (
        <div className="settingDiv max-[1280px]:absolute right-0  max-[1280px]:translate-x-[100%]">
            <ul className="min-w-[300px] h-[calc(100vh-100px)] bg-white text-gray-500  p-4 flex-col rounded-xl max-[1280px]:shadow-my overflow-y-auto">
                <h2 className="mb-8 mt-2 text-center">Settings</h2>
                <li className="border rounded-md">
                    <div className="flex w-[100%] items-center gap-4 bg-gray-100 p-3 mb-3 rounded border-l-4 border-primary">
                        <span className="block p-2 rounded-full text-[20px] bg-white"><IoLanguage /></span>
                        <p className="text-primary font-bold">Language Settings</p>
                    </div>
                    <div className="flex justify-evenly pb-5 pt-3">
                        <button className="bg-primary py-1.5 text-[14px] px-5 rounded text-white">Englis</button>
                        <button className="border py-1.5 text-[14px] px-5 rounded text-gray">Bangla</button>
                    </div>
                </li>
                <li className="flex w-[100%] items-center gap-4 bg-gray-100 p-3 my-3 rounded-md">
                    <span className="block p-2 rounded-full text-[20px] bg-white"><IoLanguage /></span>
                    <p>General Settings</p>
                </li>
                <li className="flex w-[100%] items-center gap-4 bg-gray-100 p-3 my-3 rounded-md">
                    <span className="block p-2 rounded-full text-[20px] bg-white"><IoLanguage /></span>
                    <p>Font Settings</p>
                </li>
                <li className="flex w-[100%] items-center gap-4 bg-gray-100 p-3 my-3 rounded-md">
                    <span className="block p-2 rounded-full text-[20px] bg-white"><IoLanguage /></span>
                    <p>Appearance Settings</p>
                </li>

            </ul>
        </div>
    )
}

export default Setting