import { useState } from "react"
import { BsFillExclamationDiamondFill } from "react-icons/bs"
import { ImSpinner2 } from "react-icons/im"
import { MdOutlineEmail, MdLockOutline } from "react-icons/md"
import { useNavigate, Link } from "react-router-dom"
import { API } from "../../service/API.js"

export default function Login() {
    const navigate = useNavigate()

    const [dataForm, setDataForm] = useState({ email: "", password: "" })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setDataForm({ ...dataForm, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        try {
            const { user, profile, role, error: loginError } = await API.signInWithRole(
                dataForm.email,
                dataForm.password
            )

            if (loginError || !user) {
                setError("Email atau password salah.")
                return
            }

            localStorage.setItem("user", JSON.stringify({
                id: profile.id,
                email: profile.email,
                full_name: profile.full_name,
                role: profile.role,
            }))

            if (role === "admin") {
                navigate("/dashboard")
            } else {
                navigate("/guest")
            }

        } catch (err) {
            setError("Terjadi kesalahan. Silakan coba lagi.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            {/* Heading */}
            <h2 className="text-xl font-bold text-[#0B1E3D] mb-1 text-center">
                Welcome to TravellingGO
            </h2>

            {/* Info banner */}
            <div className="bg-[#FF6B4A] text-white text-xs font-medium rounded-lg px-4 py-2.5 mb-6 text-center">
                Please login with your Email and Password.
            </div>

            {/* Error */}
            {error && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg px-4 py-3 mb-5">
                    <BsFillExclamationDiamondFill className="text-red-500 flex-shrink-0" />
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email */}
                <div className="relative">
                    <MdOutlineEmail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                    <input
                        type="email"
                        name="email"
                        value={dataForm.email}
                        onChange={handleChange}
                        placeholder="Enter Email"
                        required
                        disabled={loading}
                        className="w-full pl-11 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#FF6B4A] focus:ring-2 focus:ring-[#FF6B4A]/10 transition-all"
                    />
                </div>

                {/* Password */}
                <div className="relative">
                    <MdLockOutline className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                    <input
                        type="password"
                        name="password"
                        value={dataForm.password}
                        onChange={handleChange}
                        placeholder="Enter Password"
                        required
                        disabled={loading}
                        className="w-full pl-11 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#FF6B4A] focus:ring-2 focus:ring-[#FF6B4A]/10 transition-all"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-[#FF6B4A] hover:bg-[#e85c3c] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 mt-2 text-sm"
                >
                    {loading ? (
                        <>
                            <ImSpinner2 className="animate-spin" />
                            Mohon tunggu...
                        </>
                    ) : (
                        "Login"
                    )}
                </button>
            </form>

            {/* Links */}
            <div className="flex items-center justify-between mt-5 text-xs">
                <Link to="/forgot" className="text-gray-400 hover:text-[#FF6B4A] transition-colors">
                    Forgot Password?
                </Link>
                <Link to="/register" className="text-gray-400 hover:text-[#FF6B4A] transition-colors">
                    Belum punya akun? <span className="text-[#FF6B4A] font-semibold">Daftar</span>
                </Link>
            </div>
        </div>
    )
}
