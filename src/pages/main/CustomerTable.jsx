import { useState, useEffect, useRef } from "react";
import PageHeader from "../../components/PageHeader";
import Badge from "../../components/Badge";
import FilterTab from "../../components/Filter";
import Table from "../../components/Table";
import TableRow from "../../components/TableRow";
import TableCell from "../../components/TableCell";
import IconButton from "../../components/IconButton";
import Pagination from "../../components/Pagination";
import EditIcon from "../../components/EditIcon";
import DeleteIcon from "../../components/DeleteIcon";
import Avatar from "../../components/Avatar";
import Footer from "../../components/Footer";

const COLUMNS = [
  { key: "customer_id", label: "ID" },
  { key: "customer_name", label: "USERNAME" },
  { key: "avatar", label: "AVATAR" },
  { key: "email", label: "EMAIL" },
  { key: "phone", label: "PHONE" },
  { key: "status", label: "STATUS" },
  { key: "loyalty", label: "LOYALTY" },
  { key: "actions", label: "MODIFY" },
];

const ITEMS_PER_PAGE = 5;

export default function UserTable({ data = SAMPLE_DATA }) {
  // useState
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");

  // useRef
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  useEffect(() => {
    console.log("Tab aktif:", activeTab);
  }, [activeTab]);

  const filteredData = data.filter((item) => {
    const matchStatus =
      activeTab === "all"
        ? true
        : item.status.toLowerCase() === activeTab;

    const matchSearch =
      item.customer_name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.email
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchStatus && matchSearch;
  });

  const totalPages = Math.ceil(
    filteredData.length / ITEMS_PER_PAGE
  );

  const paginated = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const tabs = [
    {
      key: "all",
      label: "All",
      count: data.length,
    },
    {
      key: "active",
      label: "Active",
      count: data.filter(
        (d) => d.status === "Active"
      ).length,
    },
    {
      key: "inactive",
      label: "Inactive",
      count: data.filter(
        (d) => d.status === "Inactive"
      ).length,
    },
  ];

  const handleEdit = (item) => {
    console.log("Edit:", item);
  };

  const handleDelete = (item) => {
    console.log("Delete:", item);
  };

  return (
    <div
      style={{
        background: "#141414",
        minHeight: "100vh",
        padding: "32px",
        fontFamily: "sans-serif",
        color: "#fff",
      }}
    >
      <PageHeader title="Users" />

      <FilterTab
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={(key) => {
          setActiveTab(key);
          setCurrentPage(1);
        }} />

      <div style={{ margin: "16px 0" }}>
        <input
          ref={searchRef}
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          style={{
            width: "300px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #444",
            background: "#1e1e1e",
            color: "#fff",
            outline: "none",
          }} />
      </div>

      <Table columns={COLUMNS}>
        {paginated.map((item, index) => (
          <TableRow key={item.customer_id} isLast={index === paginated.length - 1}>
            <TableCell>{item.customer_id}</TableCell>
            <TableCell style={{ color: "#fff", fontWeight: 500 }}>
              {item.customer_name}
            </TableCell>
            <TableCell>
              <Avatar name={item.customer_name} />
            </TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.phone}</TableCell>
            <TableCell>
              <Badge status={item.status} />
            </TableCell>
            <TableCell>
              <Badge status={item.loyalty} />
            </TableCell>
            
            <TableCell>
              <div style={{ display: "flex", gap: "8px" }}>
                <IconButton
                  icon={<EditIcon />}
                  variant="secondary"
                  title="Edit"
                  onClick={() => handleEdit(item)}
                />
                <IconButton
                  icon={<DeleteIcon />}
                  variant="danger"
                  title="Delete"
                  onClick={() => handleDelete(item)}
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </Table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage} />

      <Footer />
    </div>
  );
}