import { useState } from 'react'

export default function App() {
  const [expandedProject, setExpandedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Pennsylvania Grid Modernization",
      category: "Infrastructure",
      description: "Upgraded electrical grid infrastructure across Pennsylvania using QGIS spatial analysis.",
      technologies: ["QGIS", "Power Flow Analysis", "GIS Mapping"],
      results: "15% efficiency gain, 100+ substations analyzed",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663483126481/fceqH9jmASkqf4AnMtLgrA/qgis-power-grid-map-EqAUxs5vD2aM9QuLMscFWA.webp"
    },
    {
      id: 2,
      title: "Solar Farm Site Selection",
      category: "Renewable Energy",
      description: "Identified optimal locations for utility-scale solar farms using multi-criteria GIS analysis.",
      technologies: ["QGIS", "Multi-Criteria Analysis", "Solar Irradiance Data"],
      results: "250 MW capacity identified, 8 optimal sites",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663483126481/fceqH9jmASkqf4AnMtLgrA/solar-site-analysis-AZbWZ8vkCLyMfrzG4vFKNZ.webp"
    },
    {
      id: 3,
      title: "Utility Network Optimization",
      category: "Power Systems",
      description: "Optimized electrical distribution network for reduced losses and improved reliability.",
      technologies: ["Python", "GIS", "Network Analysis"],
      results: "8% loss reduction, improved fault detection",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663483126481/fceqH9jmASkqf4AnMtLgrA/network-optimization-Ze9CjMpC6mW2ATkWSUCSzv.webp"
    },
    {
      id: 4,
      title: "Renewable Energy Integration",
      category: "Smart Grid",
      description: "Integrated renewable energy sources into existing power grid with QGIS planning tools.",
      technologies: ["QGIS", "Grid Modeling", "Data Analysis"],
      results: "40% renewable penetration achieved",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663483126481/fceqH9jmASkqf4AnMtLgrA/power-system-diagram-RnAHqxMZdBS2hcX5n3AzrV.webp"
    },
    {
      id: 5,
      title: "Infrastructure Resilience Assessment",
      category: "Risk Analysis",
      description: "Assessed electrical infrastructure vulnerability to climate impacts using GIS analysis.",
      technologies: ["GIS Analysis", "Climate Data", "Risk Modeling"],
      results: "3 critical areas identified, mitigation strategies developed",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663483126481/fceqH9jmASkqf4AnMtLgrA/load-flow-chart-NbpjhK72HG94hcfEmNwzBp.webp"
    },
    {
      id: 6,
      title: "Smart Grid Implementation",
      category: "IoT & Automation",
      description: "Developed smart grid solutions with real-time monitoring and automated controls.",
      technologies: ["IoT", "GIS", "Real-time Analytics"],
      results: "Real-time monitoring deployed, 24/7 system health tracking",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663483126481/fceqH9jmASkqf4AnMtLgrA/renewable-integration-RWn9WcNNZdoUYWvMob4dY7.webp"
    }
  ]

  const qgisTimeline = [
    { year: "2017", milestone: "Grid Mapping Project", achievement: "100+ substations analyzed" },
    { year: "2018", milestone: "Solar Site Analysis", achievement: "MW output estimates" },
    { year: "2019", milestone: "Utility Network Optimization", achievement: "20% loss reduction" },
    { year: "2020", milestone: "Renewable Energy Planning", achievement: "Long-term strategy" },
    { year: "2021", milestone: "Infrastructure Assessment", achievement: "Risk evaluations" },
    { year: "2022", milestone: "Climate Resilience Analysis", achievement: "Adaptation strategies" },
    { year: "2023", milestone: "Smart Grid Implementation", achievement: "IoT integration" },
    { year: "2024", milestone: "Advanced GIS Analytics", achievement: "Predictive insights" }
  ]

  const skills = [
    { name: "Power Systems", level: 95 },
    { name: "QGIS / GIS", level: 98 },
    { name: "Python Programming", level: 90 },
    { name: "Data Analysis", level: 98 },
    { name: "Machine Learning", level: 85 },
    { name: "Grid Optimization", level: 90 },
    { name: "Renewable Energy Planning", level: 100 },
    { name: "Network Analysis", level: 90 }
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">⚡</span>
            </div>
            <span className="font-bold text-lg" style={{ fontFamily: 'Sora' }}>Jeramie Wooters</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</a>
            <a href="#qgis" className="text-sm font-medium hover:text-primary transition-colors">QGIS</a>
            <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">Skills</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-50 rounded-full">
              <span className="text-sm font-medium text-primary">📍 York, PA</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Sora' }}>
              Electrical Engineer & Geospatial Strategist
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Specialized in power systems analysis, renewable energy integration, and GIS-based infrastructure planning. 
              7+ years of QGIS expertise combined with advanced electrical engineering knowledge.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition">
                View Projects
              </a>
              <a href="#contact" className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-blue-50 transition">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Sora' }}>Featured Demo</h2>
          <p className="text-lg text-gray-600 mb-12">
            Watch a demonstration of QGIS-based electrical engineering analysis and smart grid technology.
          </p>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/az1wbce5gyk"
              title="QGIS Smart Grid Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm text-gray-600">Publications</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$2.03M</div>
              <p className="text-sm text-gray-600">Grants Awarded</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">7+</div>
              <p className="text-sm text-gray-600">Years QGIS</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Sora' }}>Featured Projects</h2>
          <p className="text-lg text-gray-600 mb-12">
            Comprehensive electrical engineering and GIS projects showcasing technical expertise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Sora' }}>{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="inline-block px-3 py-1 bg-blue-50 text-primary text-xs font-medium rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {expandedProject === project.id && (
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm font-semibold text-primary mb-2">Key Results:</p>
                      <p className="text-sm text-gray-700">{project.results}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QGIS Timeline */}
      <section id="qgis" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Sora' }}>7 Years of QGIS Expertise</h2>
          <p className="text-lg text-gray-600 mb-12">
            Progressive development of GIS capabilities in electrical engineering and infrastructure planning.
          </p>

          <div className="space-y-4">
            {qgisTimeline.map((item, idx) => (
              <div key={idx} className="flex gap-6 pb-6 border-b border-gray-200 last:border-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    {item.year}
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'Sora' }}>{item.milestone}</h3>
                  <p className="text-gray-600">{item.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Sora' }}>Technical Skills & Expertise</h2>
          <p className="text-lg text-gray-600 mb-12">
            Comprehensive technical capabilities across electrical engineering, GIS, and data analysis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  <span className="text-sm text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-primary-dark text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Sora' }}>Get in Touch</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Interested in discussing electrical engineering projects, GIS applications, or research collaboration?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:contact@jeramiewooters.dev" className="px-6 py-3 bg-white text-primary-dark rounded-lg font-medium hover:bg-blue-50 transition">
              Send Email
            </a>
            <a href="#" className="px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-primary-dark transition">
              LinkedIn
            </a>
            <a href="#" className="px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-primary-dark transition">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4" style={{ fontFamily: 'Sora' }}>Jeramie Wooters</h3>
              <p className="text-sm text-gray-600">
                Electrical Engineer & Geospatial Strategist specializing in power systems and GIS applications.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4" style={{ fontFamily: 'Sora' }}>Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#qgis" className="hover:text-primary transition-colors">QGIS Experience</a></li>
                <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4" style={{ fontFamily: 'Sora' }}>Contact</h3>
              <p className="text-sm text-gray-600">
                York, PA<br />
                contact@jeramiewooters.dev
              </p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2024 Jeramie Wooters. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
