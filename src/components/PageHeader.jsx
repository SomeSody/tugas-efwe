import { ProfileMenu } from "./ProfileMenu";

const labels = {
  dashboard: "Dashboard",
  admin: "Admin",
  executive: "Executive",
};

function PaletteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 3a9 9 0 0 0 0 18h.7a2.3 2.3 0 0 0 0-4.6h-1.22a2 2 0 1 1 0-4h2.02A5.5 5.5 0 0 0 19 6.9 8.7 8.7 0 0 0 12 3Z" />
      <circle cx="7.5" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="10.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="8.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function PageHeader({ activeMenu, accent, onToggleAccent }) {
  return (
    <header className="border-b border-white/10 bg-[#111] px-5 py-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1 rounded-md border border-white/15 bg-[#696969] px-4 py-3 text-sm text-white/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <span className="text-white/75">Home</span>
          <span className="px-2 text-white/50">&gt;</span>
          <span className="font-semibold">{labels[activeMenu]}</span>
          <span className="px-2 text-white/50">&gt;</span>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-3">
          <button
            type="button"
            onClick={onToggleAccent}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.35)] transition hover:brightness-110"
            style={{ backgroundColor: accent }}
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#ef233c]">
              <PaletteIcon />
            </span>
            <span>Change Theme/Skin</span>
          </button>
          <ProfileMenu accent={accent} />
        </div>
      </div>
    </header>
  );
}