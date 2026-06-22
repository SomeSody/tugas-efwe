import { Outlet } from "react-router-dom";
import { useState } from 'react'

export default function GuestLayout(){
    const [count, setCount] = useState(0)

    return(
        <div>
            <div id="app-container" className="bg-gray-100 min-h-screen flex">
                <div className="flex-1 p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}