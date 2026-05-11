import React from "react";

const descriptions = {
  dashboard: {
    title: "Users",
    description: "Ringkasan user yang aktif pada sistem admin.",
  },
  admin: {
    title: "Admin Details",
    description: "Monitoring admin yang memiliki akses penuh terhadap sistem.",
  },
  executive: {
    title: "Executive Details",
    description: "Ringkasan user executive dengan akses laporan dan monitoring.",
  },
};

function UserIcon({ accent }) {
  return (
    <div
      className="mx-auto flex h-11 w-11 items-center justify-center rounded-md text-white shadow-[0_12px_24px_rgba(0,0,0,0.22)]"
      style={{ backgroundColor: accent }}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4.4 0-8 2.4-8 5.4 0 .9.7 1.6 1.6 1.6h12.8c.9 0 1.6-.7 1.6-1.6 0-3-3.6-5.4-8-5.4Z" />
      </svg>
    </div>
  );
}

function StatCard({ label, value, accent }) {
  return (
    <article
      className="w-full max-w-[320px] rounded-xl border bg-[#ececec] px-5 py-6 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_12px_30px_rgba(0,0,0,0.18)]"
      style={{ borderColor: accent }}
    >
      <UserIcon accent={accent} />
      <div className="mt-4 inline-flex min-w-5 items-center justify-center rounded-sm bg-[#7ed957] px-1.5 text-[11px] font-bold text-black">
        {value}
      </div>
      <h3 className="mt-3 text-sm font-medium text-[#111]">
        Total {label}
      </h3>
    </article>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm">
      <span className="text-white/65">{label}</span>
      <span className="font-semibold text-white">{value}</span>
    </div>
  );
}

export default function Dash({
  activeMenu,
  adminCount,
  executiveCount,
  accent,
}) {
  const header = descriptions[activeMenu];

  const cards =
    activeMenu === "dashboard"
      ? [
          { label: "Admin", value: adminCount },
          { label: "Executive", value: executiveCount },
        ]
      : activeMenu === "admin"
      ? [{ label: "Admin", value: adminCount }]
      : [{ label: "Executive", value: executiveCount }];

  const totalUsers = adminCount + executiveCount;

  return (
    <main className="flex-1 bg-[#0f0f10] p-5 text-white">
      <section className="rounded-2xl border border-white/10 bg-[#0f0f10] p-2">
        <div className="rounded-xl border border-white/10 bg-[#131313] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          <div
            className="border-b-2 pb-4"
            style={{ borderColor: "#1aa7ec" }}
          >
            <h1>{header?.title}</h1>
            <p>{header?.description}</p>
            <p className="mt-1 text-sm text-white/60">
              {header?.description}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-6">
            {cards.map((card) => (
              <StatCard
                key={card.label}
                label={card.label}
                value={card.value}
                accent={accent}
              />
            ))}
          </div>

          <div className="mt-8 grid gap-4 xl:grid-cols-[1.4fr_0.8fr]">
            <div className="rounded-2xl border border-white/10 bg-[#121212] p-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                Overview
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <SummaryRow
                  label="Total Users"
                  value={String(totalUsers)}
                />
                <SummaryRow
                  label="Admin Active"
                  value={`${adminCount} User`}
                />
                <SummaryRow
                  label="Executive Active"
                  value={`${executiveCount} User`}
                />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                Status
              </h2>
              <div className="mt-4 space-y-3 text-sm text-white/75">
                <div className="flex items-center justify-between rounded-lg bg-black/20 px-4 py-3">
                  <span>System Access</span>
                  <span className="font-semibold text-[#7ed957]">
                    Online
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-black/20 px-4 py-3">
                  <span>Last Sync</span>
                  <span className="font-semibold text-white">
                    Just now
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-black/20 px-4 py-3">
                  <span>Theme Accent</span>
                  <span className="flex items-center gap-2 font-semibold text-white">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: accent }}
                    />
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}