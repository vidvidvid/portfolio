const DeveloperProfile = () => {
  return (
    <div className='w-full md:w-1/2 p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl shadow-lg'>
      <h3 className='text-4xl mb-6 flex items-center font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text'>
        Drug naslov
      </h3>

      <p className='text-gray-700 mb-8 leading-relaxed'>
        I'm a passionate full-stack developer with 5 years of experience
        building web applications. I specialize in React, Node.js, and modern
        web technologies. When I'm not coding, you can find me contributing to
        open-source projects or writing technical blog posts.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='p-6 bg-white rounded-xl shadow-md transform hover:scale-105 transition-transform duration-200'>
          <div className='flex items-center mb-4'>
            <h3 className='font-bold text-lg text-purple-600'>Frontend</h3>
          </div>
          <p className='text-gray-600'>React, TypeScript, Tailwind CSS</p>
        </div>

        <div className='p-6 bg-white rounded-xl shadow-md transform hover:scale-105 transition-transform duration-200'>
          <div className='flex items-center mb-4'>
            <h3 className='font-bold text-lg text-pink-600'>Backend</h3>
          </div>
          <p className='text-gray-600'>Node.js, Express, PostgreSQL</p>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;
