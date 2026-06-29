import { useState } from "react"
import { BsFillExclamationDiamondFill } from "react-icons/bs"
import { ImSpinner2 } from "react-icons/im"
import { MdOutlineEmail } from "react-icons/md"
import { Link } from "react-router-dom"

export default function Forgot() {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [sent, setSent] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        // TODO: integrate with Supabase password reset
        setTimeout(() => {
            setSent(true)
            setLoading(false)
        }, 1000)
    }

    return (
        <div>
            {/* Heading */}
            <h2 className="text-xl font-bold text-[#0B1E3D] mb-1 text-center">
                Forgot Your Password?
            </h2>

            {/* Info banner */}
            <div className="bg-[#FF6B4A] text-white text-xs font-medium rounded-lg px-4 py-2.5 mb-6 text-center">
                Enter your email and we'll send you a link to reset your password.
            </div>

            {/* Error */}
            {error && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg px-4 py-3 mb-5">
                    <BsFillExclamationDiamondFill className="text-red-500 flex-shrink-0" />
                    {error}
                </div>
            )}

            {/* Success */}
            {sent && (
                <div className="bg-green-50 border border-green-200 text-green-700 text-xs rounded-lg px-4 py-3 mb-5 text-center">
                    Link reset password telah dikirim ke email Anda.
                </div>
            )}

            {!sent && (
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email */}
                    <div className="relative">
                        <MdOutlineEmail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
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
                                Mengirim...
                            </>
                        ) : (
                            "Send Reset Link"
                        )}
                    </button>
                </form>
            )}

            {/* Link */}
            <div className="text-center mt-5 text-xs">
                <Link to="/" className="text-gray-400 hover:text-[#FF6B4A] transition-colors">
                    Kembali ke halaman Login
                </Link>
            </div>
        </div>
    )
}
