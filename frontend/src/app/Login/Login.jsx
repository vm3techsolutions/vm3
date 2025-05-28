import Link from 'next/link'

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4" id='Login'>
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter your password" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link href="#SignUp" className="text-blue-600 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}
