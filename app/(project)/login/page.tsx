import { handleAuth } from "@/app/actions/handle-auth";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form action={handleAuth}>
          <button type="submit">
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  )
}