import { useEffect, useState } from "react";
import { auth } from "@/utils/firebaseClient";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import * as XLSX from "xlsx";

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  project: string;
  createdAt: string;
}

export default function Dashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/admin/login");
      } else {
        const res = await fetch("/api/leads");
        const data = await res.json();
        setLeads(data.leads);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(leads);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Leads");
    XLSX.writeFile(wb, "leads.xlsx");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4 sm:p-6 mt-20 w-full">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer w-full sm:w-auto"
        >
          Logout
        </button>
      </div>

      {/* Export Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={exportToExcel}
          className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer w-full sm:w-auto"
        >
          Export to Excel
        </button>
      </div>

      {/* Table Wrapper (Scroll on small screens) */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full border-collapse border border-gray-300 text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="border p-2">Name</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Project</th>
              <th className="border p-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-gray-50">
                <td className="border p-2">{lead.name}</td>
                <td className="border p-2">{lead.phone}</td>
                <td className="border p-2">{lead.email}</td>
                <td className="border p-2">{lead.project}</td>
                <td className="border p-2">
                  {new Date(lead.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
