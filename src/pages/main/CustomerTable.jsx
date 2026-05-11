import { useState } from "react";

const SAMPLE_DATA = [
  { id: 1, username: "User1", email: "user@gmail.com", phone: "9870543210", status: "Active", createdAt: "2023-03-12 12:24:22 AM", updatedAt: "2023-03-12 12:24:22 AM" },
  { id: 2, username: "User2", email: "user@gmail.com", phone: "9870543210", status: "Inactive", createdAt: "2023-03-12 12:24:22 AM", updatedAt: "2023-03-12 12:24:22 AM" },
  { id: 3, username: "User3", email: "user@gmail.com", phone: "9870543210", status: "Active", createdAt: "2023-03-12 12:24:22 AM", updatedAt: "2023-03-12 12:24:22 AM" },
  { id: 4, username: "demo", email: "demo@ymail.com", phone: "9870543210", status: "Active", createdAt: "2023-03-12 12:24:22 AM", updatedAt: "2023-03-12 12:26:22 AM" },
  { id: 5, username: "specific123", email: "specific123@gmail.com", phone: "9870543210", status: "Active", createdAt: "2023-03-12 12:24:22 AM", updatedAt: "2023-03-12 12:24:22 AM" },
];

const ITEMS_PER_PAGE = 5;

export default function UserTable({ data = SAMPLE_DATA }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const paginated = data.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div style={{ background: "#141414", minHeight: "100vh", padding: "32px", fontFamily: "sans-serif", color: "#fff" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
        <h1 style={{ fontSize: "22px", fontWeight: 600, margin: 0 }}>Users</h1>
        <button
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "7px 16px",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span style={{ fontSize: "18px", lineHeight: 1 }}>+</span> Add Now
        </button>
      </div>

      {/* Filter Tab */}
      <div style={{ marginBottom: "16px" }}>
        <span
          style={{
            background: "#2563eb",
            color: "#fff",
            borderRadius: "6px",
            padding: "5px 14px",
            fontSize: "13px",
            fontWeight: 500,
          }}
        >
          All ({data.length})
        </span>
      </div>

      {/* Table */}
      <div style={{ borderRadius: "10px", overflow: "hidden", border: "1px solid #2a2a2a" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", background: "#1a1a1a" }}>
          <thead>
            <tr style={{ background: "#222", borderBottom: "1px solid #2a2a2a" }}>
              {["ID", "USERNAME", "EMAIL", "PHONE", "STATUS", "CREATE DATE", "UPDATE DATE", "MODIFY"].map((col) => (
                <th
                  key={col}
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#888",
                    letterSpacing: "0.04em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginated.map((item, index) => (
              <tr
                key={item.id}
                style={{
                  borderBottom: index < paginated.length - 1 ? "1px solid #232323" : "none",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#202020")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <td style={{ padding: "14px 16px", fontSize: "14px", color: "#bbb" }}>{item.id}</td>
                <td style={{ padding: "14px 16px", fontSize: "14px", color: "#fff", fontWeight: 500 }}>{item.username}</td>
                <td style={{ padding: "14px 16px", fontSize: "14px", color: "#bbb" }}>{item.email}</td>
                <td style={{ padding: "14px 16px", fontSize: "14px", color: "#bbb" }}>{item.phone}</td>
                <td style={{ padding: "14px 16px" }}>
                  <span
                    style={{
                      background: item.status === "Active" ? "#166534" : "#7f1d1d",
                      color: item.status === "Active" ? "#4ade80" : "#fca5a5",
                      borderRadius: "5px",
                      padding: "3px 12px",
                      fontSize: "12px",
                      fontWeight: 600,
                      display: "inline-block",
                    }}
                  >
                    {item.status}
                  </span>
                </td>
                <td style={{ padding: "14px 16px", fontSize: "13px", color: "#888", whiteSpace: "nowrap" }}>{item.createdAt}</td>
                <td style={{ padding: "14px 16px", fontSize: "13px", color: "#888", whiteSpace: "nowrap" }}>{item.updatedAt}</td>
                <td style={{ padding: "14px 16px" }}>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {/* Edit */}
                    <button
                      style={{
                        background: "#1e293b",
                        border: "1px solid #334155",
                        borderRadius: "6px",
                        width: "32px",
                        height: "32px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        color: "#94a3b8",
                      }}
                      title="Edit"
                    >
                      <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </button>
                    {/* Delete */}
                    <button
                      style={{
                        background: "#3b1111",
                        border: "1px solid #7f1d1d",
                        borderRadius: "6px",
                        width: "32px",
                        height: "32px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        color: "#f87171",
                      }}
                      title="Delete"
                    >
                      <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
                        <path d="M10 11v6M14 11v6" />
                        <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "24px" }}>
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          style={{
            background: "transparent",
            border: "1px solid #333",
            borderRadius: "6px",
            width: "32px",
            height: "32px",
            color: currentPage === 1 ? "#555" : "#fff",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ‹
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "6px",
              border: page === currentPage ? "none" : "1px solid #333",
              background: page === currentPage ? "#2563eb" : "transparent",
              color: page === currentPage ? "#fff" : "#aaa",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: page === currentPage ? 600 : 400,
            }}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          style={{
            background: "transparent",
            border: "1px solid #333",
            borderRadius: "6px",
            width: "32px",
            height: "32px",
            color: currentPage === totalPages ? "#555" : "#fff",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ›
        </button>
      </div>
    </div>
  );
}