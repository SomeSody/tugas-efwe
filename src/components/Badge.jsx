export default function Badge({ status }) {
    const style = {
    Active: "bg-blue-600 hover:bg-blue-700 text-white",
    Inactive: "bg-red-600 hover:bg-red-700 text-white",
    Pending: "bg-yellow-500 hover:bg-yellow-600 text-white",
    Cancelled: "bg-gray-500 hover:bg-gray-600 text-white",
    Completed: "bg-green-600 hover:bg-green-700 text-white",
    Gold: "bg-yellow-400 hover:bg-yellow-500 text-black",
    Silver: "bg-gray-300 hover:bg-gray-400 text-black",
    Bronze: "bg-amber-700 hover:bg-amber-800 text-white",
    };
    
    const statusStyle = style[status] || {
        background: "#333",
        color: "#aaa",
    };

  return (
    <span
      className={`${style[status]} px-4 ml-2 rounded-lg`}
    >
      {status}
    </span>
  );
}