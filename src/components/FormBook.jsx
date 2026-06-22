import { useState } from "react"

export default function FormBook({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("paket")

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#F5E6C8] rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 w-10 h-10 rounded-full bg-white hover:bg-gray-100"
        >
          ✕
        </button>

        <div className="p-10">

          <h2 className="text-3xl font-black text-center text-[#0B1E3D] mb-3">
            Rencanakan Perjalananmu
          </h2>

          <p className="text-center text-gray-500 mb-8">
            Pilih kategori dan isi detail untuk penawaran terbaik
          </p>

          {/* TAB */}
          <div className="flex bg-white rounded-2xl p-2 gap-2 mb-8">

            {[
              {
                id: "paket",
                label: "Paket Wisata",
              },
              {
                id: "hotel",
                label: "Hotel",
              },
              {
                id: "tiket",
                label: "Tiket",
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 rounded-xl font-bold transition ${
                  activeTab === tab.id
                    ? "bg-[#0B1E3D] text-white"
                    : "text-gray-500"
                }`}
              >
                {tab.label}
              </button>
            ))}

          </div>

          {/* CONTENT */}

          <div className="bg-white rounded-3xl p-8">

            {activeTab === "paket" && (
              <>
                <label className="block mb-2 text-sm font-bold">
                  Jumlah Peserta
                </label>

                <select className="w-full border rounded-xl p-3 mb-5">
                  <option>1 orang</option>
                  <option>2 orang</option>
                  <option>3–5 orang</option>
                  <option>6–10 orang</option>
                </select>

                <button className="w-full bg-[#FF6B4A] text-white rounded-2xl py-4 font-bold">
                  Cari Paket 
                </button>
              </>
            )}

            {activeTab === "hotel" && (
              <>
                <input
                  placeholder="Lokasi Hotel"
                  className="w-full border rounded-xl p-3 mb-5"
                />

                <button className="w-full bg-[#FF6B4A] text-white rounded-2xl py-4 font-bold">
                  Cari Hotel 
                </button>
              </>
            )}

            {activeTab === "tiket" && (
              <>
                <input
                  placeholder="Kota Asal"
                  className="w-full border rounded-xl p-3 mb-5"
                />

                <button className="w-full bg-[#FF6B4A] text-white rounded-2xl py-4 font-bold">
                  Cari Tiket 
                </button>
              </>
            )}

          </div>

        </div>
      </div>
    </div>
  )
}