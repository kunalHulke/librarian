import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center py-4 space-y-4 md:space-y-0">
            <div className="text-2xl font-bold text-gray-800">
              Library Management System
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <Link to="/login" className="btn btn-secondary">
                Sign In
              </Link>
              <Link to="/register" className="btn btn-primary">
                Join Library
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome to Our Library
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A comprehensive digital solution for managing library operations,
            book circulation, and member services with ease and efficiency.
          </p>
          <Link to="/login" className="btn btn-primary text-lg px-8 py-3">
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            System Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                For Members
              </h3>
              <p className="text-gray-600">
                Search and discover books, check availability, manage borrowed
                items, and track your reading history.
              </p>
            </div>
            <div className="card p-8 text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                For Librarians
              </h3>
              <p className="text-gray-600">
                Complete library operations including book management, member
                services, payment collection, and circulation control.
              </p>
            </div>
            <div className="card p-8 text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                For Owners
              </h3>
              <p className="text-gray-600">
                Business oversight with financial reports, asset tracking, and
                comprehensive analytics for informed decision making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Join our library community and experience seamless book management
          </p>
          <Link to="/register" className="btn bg-white text-gray-800 hover:bg-gray-100">
            Create Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            &copy; 2025 Library Management System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;