import { BiPhone } from "react-icons/bi"; 
import { useState } from "react"

export default function ContactPopup() {
  const [open, setOpen] = useState(false)

  const contacts = [
    {
      name: "WhatsApp",
      icon: "💬",
      small: "821908291083",
    },
    {
      name: "Email",
      icon: "📧",
      small: "info@travellinggo.com",
    },
    {
      name: "Instagram",
      icon: "📷",
      small: "@travellinggo",
    },
    {
      name: "Telepon",
      icon: "📞",
      small: "+628123456789"
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-[60]">

      {/* Popup */}
      {open && (
        <div className="absolute bottom-16 right-0 w-72 bg-gradient-to-br from-[#0B1E3D] via-[#0D3060] to-[#004E89] rounded-3xl shadow-2xl p-5 border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-300">

          <div className="mb-4">
            <h3 className="font-black">
              Hubungi Kami!
            </h3>

            <p className="text-sm text-gray-500">
              Pilih kontak yang tersedia
            </p>
          </div>

          <div className="space-y-3">

            {contacts.map((item) => (
            <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#F5E6C8]/40 transition"
            >
                <div className="w-11 h-11 rounded-2xl bg-[#F5E6C8] flex items-center justify-center text-lg">
                {item.icon}
                </div>

                {/* Text Area */}
                <div className="flex flex-col items-start text-left">

                <span className="font-medium">
                    {item.name}
                </span>

                <span className="text-sm text-gray-400">
                    {item.small}
                </span>

                </div>

            </a>
            ))}

          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-xl text-white text-2xl transition-all
        ${
          open
            ? "bg-red-500 rotate-45"
            : "bg-[#00BFA6] hover:scale-105"
        }`}
      >
        {open ? "✕" : <BiPhone />}
      </button>

    </div>
  )
}