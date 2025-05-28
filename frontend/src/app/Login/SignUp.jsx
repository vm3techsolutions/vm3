import Link from 'next/link'

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4" id='SignUp'>
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none" placeholder="Enter your name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none" placeholder="Create a password" />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="#Login" className="text-green-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  )
}
