import { handleAuth } from "@/app/actions/handle-auth";
import { auth } from "@/app/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth()

  console.log("Session:", session);

  if(!session) {
    return redirect("/login")
  }


  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Dashboard</h2>
        <p className="text-gray-500">
          Welcome to your dashboard! Here you can manage your account and settings.
        </p>

        {
          session?.user && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">User Information</h3>
              <p><strong>Name:</strong> {session.user.name}</p>
              <p><strong>Email:</strong> {session.user.email}</p>
            </div>
          )
        }

        {
          session?.user?.email && (
            <button
              className="w-full px-4 py-2 mt-4 text-white bg-red-600 rounded hover:bg-red-700"
             onClick={handleAuth}
            >
              Logout
            </button>
          )
        }

        <Link href="/pagamentos">Pagamentos</Link>
      </div>
    </div>
  );
}