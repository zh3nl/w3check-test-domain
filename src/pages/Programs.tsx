
import { Link } from "react-router-dom";

const Programs = () => {
  const programs = [
    {
      name: "Bachelor of Science in Computer Science",
      duration: "4 years",
      tuition: "$45,000/year"
    },
    {
      name: "Master of Business Administration",
      duration: "2 years",
      tuition: "$65,000/year"
    },
    {
      name: "Doctor of Philosophy in Psychology",
      duration: "5-7 years",
      tuition: "$38,000/year"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-900">
                Prestige University
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-900 font-medium">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-900 font-medium">About</Link>
              <Link to="/programs" className="text-gray-700 hover:text-blue-900 font-medium">Academics</Link>
              <Link to="/admissions" className="text-gray-700 hover:text-blue-900 font-medium">Admissions</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-900 font-medium">Contact</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Academic Programs</h1>
          <p className="text-xl mt-4">Explore our comprehensive range of degree programs</p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Degree Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover world-class education opportunities across various disciplines, 
              designed to prepare you for success in your chosen career path.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{program.name}</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Duration:</strong> {program.duration}</p>
                  <p><strong>Tuition:</strong> {program.tuition}</p>
                </div>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          {/* Programs Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b">
              <h3 className="text-xl font-semibold text-gray-900">Program Overview</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Annual Tuition</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {programs.map((program, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {program.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {program.duration}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {program.tuition}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards your future. Explore our admissions process and 
            discover how you can become part of the Prestige University community.
          </p>
          <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block">
            Apply Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Prestige University</h3>
              <p className="text-gray-300 mb-4">
                123 University Avenue<br />
                Academic City, CA 94720<br />
                Phone: (555) 123-4567
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/programs" className="hover:text-white">Programs</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Library</a></li>
                <li><a href="#" className="hover:text-white">Student Portal</a></li>
                <li><a href="#" className="hover:text-white">Alumni</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Prestige University. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Programs;
