import { useState } from "react"
import { BsFillExclamationDiamondFill } from "react-icons/bs"
import { ImSpinner2 } from "react-icons/im"
import { MdOutlineEmail, MdLockOutline, MdPerson } from "react-icons/md"
import { useNavigate, Link } from "react-router-dom"
import { API } from "../../service/API.js"

export default function Register() {
    const navigate = useNavigate()

    const [dataForm, setDataForm] = useState({
        full_name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setDataForm({
            ...dataForm,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        if (dataForm.password !== dataForm.confirmPassword) {
            setError("Password dan Confirm Password tidak cocok.")
            setLoading(false)
            return
        }

        try {
            const { data: existing } = await API.findByEmail(dataForm.email)
            if (existing) {
                setError("Email sudah terdaftar, coba yang lain.")
                return
            }

            await API.createProfile({
                email: dataForm.email,
                full_name: dataForm.full_name,
                password_hash: dataForm.password,
            })

            alert(`Akun berhasil dibuat! Silakan login.`)
            navigate("/")

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
                Create Your Account
            </h2>

            {/* Info banner */}
            <div className="bg-[#FF6B4A] text-white text-xs font-medium rounded-lg px-4 py-2.5 mb-6 text-center">
                Please fill in the form below to register.
            </div>

            {/* Error */}
            {error && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg px-4 py-3 mb-5">
                    <BsFillExclamationDiamondFill className="text-red-500 flex-shrink-0" />
                    {error}
                </div>
            )}

            {/* Loading */}
            {loading && (
                <div className="flex items-center gap-2 bg-gray-100 text-gray-600 text-xs rounded-lg px-4 py-3 mb-5">
                    <ImSpinner2 className="animate-spin" />
                    Mohon Tunggu...
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div className="relative">
                    <MdPerson className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                    <input
                        type="text"
                        name="full_name"
                        value={dataForm.full_name}
                        onChange={handleChange}
                        placeholder="Enter Full Name"
                        required
                        disabled={loading}
                        className="w-full pl-11 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#FF6B4A] focus:ring-2 focus:ring-[#FF6B4A]/10 transition-all"
                    />
                </div>

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

                {/* Confirm Password */}
                <div className="relative">
                    <MdLockOutline className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                    <input
                        type="password"
                        name="confirmPassword"
                        value={dataForm.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
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
                    {loading ? "Memuat..." : "Register"}
                </button>
            </form>

            {/* Link */}
            <div className="text-center mt-5 text-xs">
                <Link to="/" className="text-gray-400 hover:text-[#FF6B4A] transition-colors">
                    Sudah punya akun? <span className="text-[#FF6B4A] font-semibold">Masuk</span>
                </Link>
            </div>
        </div>
    )
}
