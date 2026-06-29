import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="bg-[#F0F0F0] min-h-screen flex flex-col items-center justify-center px-4 py-8">
            {/* Logo */}
            <div className="mb-8 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B4A] flex items-center justify-center text-white font-black text-lg shadow-md">
                        T
                    </div>
                    <span className="text-2xl font-black text-[#0B1E3D] tracking-tight">
                        Travelling<span className="text-[#FF6B4A]">GO</span>
                    </span>
                </div>
            </div>

            {/* Card */}
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <Outlet />
            </div>

            <p className="text-center text-xs text-gray-400 mt-6">
                &copy; 2026 TravellingGO. All rights reserved.
            </p>
        </div>
    )
}
