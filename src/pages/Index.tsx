
import { Link } from "react-router-dom";

const Index = () => {
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
            <div className="md:hidden flex items-center">
              <button className="text-gray-700">☰</button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section - Missing alt text (WCAG violation) */}
      <section className="relative h-64 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
        <img src="/lovable-uploads/44735d5d-a00f-4f14-844b-bbeffe2b4621.png" className="absolute inset-0 w-full h-full object-cover" alt="Description of 44735d5d-a00f-4f14-844b-bbeffe2b4621" />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
        <div className="relative text-center text-white px-4 z-10">
          <h1 className="text-4xl font-bold mb-2">Our research improves lives</h1>
          <p className="text-lg mb-4 max-w-2xl mx-auto">
            At Prestige University, we're committed to advancing knowledge and making a positive impact through groundbreaking research and innovation.
          </p>
        </div>
      </section>

      {/* Research Highlights Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=200&fit=crop" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-lg font-semibold mb-2">Research with results</h3>
              <p className="text-gray-600 text-sm">Our interdisciplinary approach leads to breakthrough discoveries that benefit society.</p>
            </div>
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-lg font-semibold mb-2">Global recognition</h3>
              <p className="text-gray-600 text-sm">Our faculty and students are recognized worldwide for their contributions to science and society.</p>
            </div>
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-lg font-semibold mb-2">10 years of excellence</h3>
              <p className="text-gray-600 text-sm">A decade of groundbreaking research and academic achievement.</p>
            </div>
          </div>

          {/* Statistics - Poor color contrast (WCAG violation) */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">The #1 public research university in the U.S.</h2>
            <p style={{color: '#CCCCCC'}} className="text-lg mb-4">Leading innovation and discovery for over a century</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-600">50</div>
                <p className="text-sm">top 10 graduate programs</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <p className="text-sm">research centers and institutes</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <p className="text-sm">groundbreaking inventions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner - Orange like UC Berkeley */}
      <section className="bg-yellow-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Creating more venture-backed startups than any other university in the world</h2>
          {/* Empty link with no accessible name (WCAG violation) */}
          <a href="#" className="inline-block bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700"></a>
        </div>
      </section>

      {/* Recent Discoveries Section - Skipping heading levels (WCAG violation) */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Recent discoveries</h2>
          {/* Skipping from h2 to h4 - violation of proper heading hierarchy */}
          <h4 className="text-lg font-semibold mb-6">Breakthrough research from our faculty</h4>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-4 rounded shadow">
              <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&h=200&fit=crop" className="w-full h-32 object-cover rounded mb-3" />
              <h3 className="font-semibold text-sm mb-2">Advancing cancer treatment</h3>
              <p className="text-xs text-gray-600">New immunotherapy approaches show promising results in clinical trials.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=200&fit=crop" className="w-full h-32 object-cover rounded mb-3" />
              <h3 className="font-semibold text-sm mb-2">Quantum computing breakthrough</h3>
              <p className="text-xs text-gray-600">Researchers achieve new milestone in quantum error correction.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop" className="w-full h-32 object-cover rounded mb-3" />
              <h3 className="font-semibold text-sm mb-2">Climate change solutions</h3>
              <p className="text-xs text-gray-600">New carbon capture technology offers hope for reducing emissions.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded shadow">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" className="w-full h-32 object-cover rounded mb-3" />
              <h3 className="font-semibold text-sm mb-2">Artificial intelligence ethics</h3>
              <p className="text-xs text-gray-600">Developing frameworks for responsible AI development and deployment.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop" className="w-full h-32 object-cover rounded mb-3" />
              <h3 className="font-semibold text-sm mb-2">Neuroscience advances</h3>
              <p className="text-xs text-gray-600">Understanding brain function at unprecedented resolution.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=200&fit=crop" className="w-full h-32 object-cover rounded mb-3" />
              <h3 className="font-semibold text-sm mb-2">Sustainable energy</h3>
              <p className="text-xs text-gray-600">Revolutionary battery technology for renewable energy storage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Academics</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">Our comprehensive academic programs prepare students for leadership in their chosen fields. With world-class faculty and cutting-edge research opportunities, we provide an unparalleled educational experience.</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=250&fit=crop" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-lg font-semibold mb-2">Undergraduate programs</h3>
              <p className="text-gray-600 text-sm">Over 100 undergraduate majors across diverse fields of study.</p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=250&fit=crop" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-lg font-semibold mb-2">Graduate programs</h3>
              <p className="text-gray-600 text-sm">World-renowned graduate programs leading to advanced degrees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Life Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Student life</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">Life at Prestige University extends far beyond the classroom. Our vibrant campus community offers countless opportunities for personal growth, leadership development, and lifelong friendships.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=200&fit=crop" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-lg font-semibold mb-2">Housing options</h3>
              <p className="text-gray-600 text-sm">Diverse residential communities that foster learning and growth.</p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-lg font-semibold mb-2">Student organizations</h3>
              <p className="text-gray-600 text-sm">Over 1,000 student organizations covering every interest and passion.</p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-lg font-semibold mb-2">Athletics and recreation</h3>
              <p className="text-gray-600 text-sm">Championship athletics and world-class recreational facilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Take a Tour Section */}
      <section className="relative py-16 bg-blue-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Take a tour</h2>
          {/* Button with focus outline removed (WCAG violation) */}
          <button 
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            style={{outline: 'none'}}
          >
            Schedule a visit
          </button>
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

export default Index;
