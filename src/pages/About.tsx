
import { Link } from "react-router-dom";

const About = () => {
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
          <h1 className="text-4xl font-bold">About Prestige University</h1>
          <p className="text-xl mt-4">Discover our rich history and commitment to excellence</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              At Prestige University, we are dedicated to fostering intellectual growth, 
              promoting innovative research, and preparing students to become leaders in 
              their chosen fields. Our commitment extends beyond the classroom to create 
              a transformative educational experience that shapes the future.
            </p>
          </div>
          
          {/* Accessibility Violation: Skip from h2 to h4 */}
          <h4 className="text-xl font-semibold text-gray-900 mb-4">Founded in Excellence</h4>
          
          {/* Accessibility Violation: Poor color contrast */}
          <p style={{ color: '#CCCCCC' }} className="text-lg mb-8">
            This paragraph demonstrates poor color contrast that makes it difficult to read 
            for users with visual impairments or in bright lighting conditions.
          </p>
        </div>
      </section>

      {/* Two Column Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A Legacy of Innovation</h3>
              <p className="text-gray-600 mb-6">
                Since our founding in 1885, Prestige University has been at the forefront 
                of educational innovation. Our campus spans 2,000 acres and houses 
                state-of-the-art facilities that support both undergraduate and graduate 
                programs across multiple disciplines.
              </p>
              <p className="text-gray-600 mb-6">
                We pride ourselves on maintaining small class sizes with a student-to-faculty 
                ratio of 12:1, ensuring personalized attention and meaningful mentorship 
                opportunities for every student.
              </p>
              {/* Accessibility Violation: Empty link with no accessible name */}
              <a href="#" className="text-blue-600 hover:text-blue-800">Read more</a>
            </div>
            <div>
              {/* Accessibility Violation: Image without alt text */}
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">15,000+</div>
              <p className="text-gray-600">Students</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">1,200+</div>
              <p className="text-gray-600">Faculty</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">50+</div>
              <p className="text-gray-600">Degree Programs</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">$2.1B</div>
              <p className="text-gray-600">Research Funding</p>
            </div>
          </div>
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

export default About;
