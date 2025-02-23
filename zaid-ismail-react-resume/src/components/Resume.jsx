const Resume = () => {
    return (
      <div className="w-full max-w-7xl mx-auto p-8 flex flex-col md:flex-row gap-16 border border-gray-300 rounded-lg shadow-md p-6">
      <div className="w-full md:w-1/2 p-6 border border-gray-300">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">Work Experience</h2>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">Software Engineer</h3>
          <p className="text-gray-600 flex justify-between italic text-lg">
            <span>Tech Solutions Inc.</span>
            <span className="text-right">January 2020 - Present</span>
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Developed web applications using React and Node.js</li>
            <li>Optimized database queries to improve performance</li>
            <li>Led a team of developers on multiple projects</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">Junior Developer</h3>
          <p className="text-gray-600 flex justify-between italic text-lg">
            <span>Innovate Labs</span>
            <span className="text-right">June 2018 - December 2019</span>
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Implemented new UI components using Vue.js</li>
            <li>Maintained and updated existing software applications</li>
            <li>Collaborated with designers and product managers</li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 border border-gray-300">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">Education</h2>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">Bachelor of Science in Computer Science</h3>
          <p className="text-gray-600 flex justify-between italic text-lg">
            <span>University of Example</span>
            <span className="text-right">2014 - 2018</span>
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Focused on software development and algorithms</li>
            <li>Completed a senior project on AI-driven web applications</li>
            <li>Member of the university coding club</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">Master of Science in Software Engineering</h3>
          <p className="text-gray-600 flex justify-between italic text-lg">
            <span>Tech University</span>
            <span className="text-right">2018 - 2020</span>
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Specialized in cloud computing and DevOps</li>
            <li>Published research on distributed systems</li>
            <li>Completed a thesis on scalable microservices</li>
          </ul>
        </div>
      </div>
    </div>
    )
};

export default Resume;