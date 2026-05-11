import { useEffect, useRef, useState } from "react";

function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function UserCircle() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 5a3.25 3.25 0 1 1 0 6.5A3.25 3.25 0 0 1 12 7Zm0 12c-2.34 0-4.39-1.2-5.58-3.02.55-1.45 2.9-2.48 5.58-2.48s5.03 1.03 5.58 2.48A6.67 6.67 0 0 1 12 19Z" />
    </svg>
  );
}

function MenuItem({ label, sublabel }) {
  return (
    <button
      type="button"
      className="flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-white/5"
    >
      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#ef233c]" />
      <span>
        <span className="block text-sm font-semibold text-white">{label}</span>
        <span className="block text-xs text-white/55">{sublabel}</span>
      </span>
    </button>
  );
}

export function ProfileMenu({ accent }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.35)] transition hover:brightness-110"
        style={{ backgroundColor: accent }}
      >
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#ef233c]">
          <UserCircle />
        </span>
        <span>User ABC</span>
        <ChevronDown />
      </button>

      {open && (
        <div className="absolute right-0 z-20 mt-3 w-72 overflow-hidden rounded-2xl border border-white/10 bg-[#161616] shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
          <div className="border-b border-white/10 px-4 py-4">
            <div className="flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: accent }}
              >
                <UserCircle />
              </div>
              <div>
                <h3 className="font-semibold text-white">User ABC</h3>
                <p className="text-xs text-white/60">
                  Administrator • userabc@specific.local
                </p>
              </div>
            </div>
          </div>

          <div className="p-2">
            <MenuItem label="My Profile" sublabel="Lihat dan edit informasi akun" />
            <MenuItem label="Account Settings" sublabel="Kelola preferensi dan keamanan" />
            <MenuItem label="Sign Out" sublabel="Keluar dari panel admin" />
          </div>
        </div>
      )}
    </div>
  );
}