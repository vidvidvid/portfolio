function App() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50'>
        <div
          className='absolute inset-0 bg-cover bg-center opacity-10'
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
          }}
        />
        <div className='container mx-auto px-6 relative z-10'>
          <div className='text-center'>
            <h1 className='text-5xl md:text-7xl font-bold text-gray-900 mb-4'>
              VID XDDDD
            </h1>
            <p className='text-xl md:text-2xl nov-class mb-8'>
              Full Stack Developer & UI/UX Enthusiast
            </p>
            <div className='flex justify-center space-x-4'>
              <a
                href='#'
                className='p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors'
              ></a>
              <a
                href='#'
                className='p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors'
              ></a>
              <a
                href='#'
                className='p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors'
              ></a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
          <div className='flex flex-col md:flex-row items-center gap-12'>
            <div className='w-full md:w-1/2'>
              <img
                src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
                alt='Profile'
                className='rounded-lg shadow-xl w-full max-w-md mx-auto'
              />
            </div>
            <div className='w-full md:w-1/2 p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl shadow-lg'>
              <div>
                <h3 className='text-4xl mb-6 flex items-center font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text'>
                  Developer Profile
                </h3>

                <p className='text-gray-700 mb-8 leading-relaxed'>
                  I'm a passionate full-stack developer with 5 years of
                  experience building web applications. I specialize in React,
                  Node.js, and modern web technologies. When I'm not coding, you
                  can find me contributing to open-source projects or writing
                  technical blog posts.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='p-6 bg-white rounded-xl shadow-md transform hover:scale-105 transition-transform duration-200'>
                    <div className='flex items-center mb-4'>
                      <h3 className='font-bold text-lg text-purple-600'>
                        Frontend
                      </h3>
                    </div>
                    <p className='text-gray-600'>
                      React, TypeScript, Tailwind CSS
                    </p>
                  </div>

                  <div className='p-6 bg-white rounded-xl shadow-md transform hover:scale-105 transition-transform duration-200'>
                    <div className='flex items-center mb-4'>
                      <h3 className='font-bold text-lg text-pink-600'>
                        Backend
                      </h3>
                    </div>
                    <p className='text-gray-600'>
                      Node.js, Express, PostgreSQL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-20 bg-gray-50'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2'>
            Featured Projects
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'
              >
                <img
                  src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80`}
                  alt={`Project ${project}`}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-bold mb-2'>Project {project}</h3>
                  <p className='text-gray-600 mb-4'>
                    A brief description of the project and the technologies used
                    in its development.
                  </p>
                  <div className='flex justify-between items-center'>
                    <div className='flex space-x-2'>
                      <span className='px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm'>
                        React
                      </span>
                      <span className='px-2 py-1 bg-green-100 text-green-600 rounded text-sm'>
                        Node.js
                      </span>
                    </div>
                    <a
                      href='#'
                      className='text-blue-600 hover:text-blue-800'
                    ></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2'>
            Get In Touch
          </h2>
          <div className='max-w-2xl mx-auto'>
            <form className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  rows={4}
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                ></textarea>
              </div>
              <button
                type='submit'
                className='w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-8'>
        <div className='container mx-auto px-6 text-center'>
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
