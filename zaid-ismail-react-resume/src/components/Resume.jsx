const Resume = () => {
  return (
    <>
    <div className="w-full text-3xl text-center mb-4">
      <a 
        href="/path-to-your-resume.pdf" 
        download 
        className="bg-green-700 hover:bg-green-500 text-black font-bold py-2 px-4 transition-all"
      >
        Download Resume (.pdf)
      </a>
    </div>
    <div className="w-full max-w-7xl mx-auto p-8 flex flex-col md:flex-row gap-16 border border-green-400 bg-black shadow-md text-green-400 font-mono">
    
      <div className="w-full md:w-1/2 p-6 border border-green-300">
        <h2 className="text-3xl font-bold text-green-400 mb-4 text-glow">Work Experience</h2>
        
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-green-300">Intermediate Software Developer</h3>
          <p className="text-green-500 flex justify-between italic text-lg">
            <span>ThoroughTec Simulation</span>
            <span className="text-right">Jan 2023 - Present</span>
          </p>
          <ul className="list-disc list-inside text-green-400 mt-2 space-y-1">
            <li>Developed training simulators for surface and underground drill-rigs using Unity and C#.</li>
            <li>Worked on gameplay mechanics, vehicle tramming, drilling, bolting, and UI programming.</li>
            <li>Developed simulators for major mining clients like De Beers.</li>
            <li>Gained expertise in object-oriented and event-driven programming.</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-green-300">Open-Source Contributor</h3>
          <p className="text-green-500 flex justify-between italic text-lg">
            <span>Multiple Projects (GitHub)</span>
            <span className="text-right">Aug 2022 - Present</span>
          </p>
          <ul className="list-disc list-inside text-green-400 mt-2 space-y-1">
            <li>Refactored code in Xenia Xbox 360 emulator (C++).</li>
            <li>Fixed an alphabetical sorting bug in ShadPS4, a PS4 emulator.</li>
            <li>Refactored code in a Diablo source port.</li>
            <li>Updated icons on Oppia, Google’s open-source education platform.</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-green-300">Operations Engineer</h3>
          <p className="text-green-500 flex justify-between italic text-lg">
            <span>Tau Space</span>
            <span className="text-right">Sep 2022 - Dec 2022</span>
          </p>
          <ul className="list-disc list-inside text-green-400 mt-2 space-y-1">
            <li>Developed applications in Perl and Elixir for 5G network infrastructure.</li>
            <li>Automated monitoring tasks using Python.</li>
            <li>Worked with PostgreSQL databases to generate insights.</li>
            <li>Interfaced with telecom clients for business and system operations.</li>
          </ul>
        </div>
        
        <div className="mb-6">
            <h3 className="text-2xl font-semibold text-green-300">Back End Developer</h3>
            <p className="text-green-500 flex justify-between italic text-lg">
              <span>Syntax Co.</span>
              <span className="text-right">Feb 2021 - Apr 2021</span>
            </p>
            <ul className="list-disc list-inside text-green-400 mt-2 space-y-1">
              <li>Developed a car rental web application using Node.js, Express.js, and MongoDB.</li>
              <li>Completed the project within the client's two-month deadline.</li>
            </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-green-300">Freelance Cyber Security Research</h3>
          <p className="text-green-500 flex justify-between italic text-lg">
            <span>HackerOne</span>
            <span className="text-right">Jul 2020 - Oct 2020</span>
          </p>
          <ul className="list-disc list-inside text-green-400 mt-2 space-y-1">
            <li>Researched and tested vulnerabilities in Sony web applications.</li>
            <li>Discovered and reported a valid security vulnerability to Sony’s Disclosure Program.</li>
          </ul>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 p-6 border border-green-300">
        <h2 className="text-3xl font-bold text-green-400 mb-4 text-glow">Education</h2>
        
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-green-300">Bachelor of Science in Engineering (Honours), Civil Engineering</h3>
          <p className="text-green-500 flex justify-between italic text-lg">
            <span>University of KwaZulu-Natal</span>
            <span className="text-right">Jan 2017 - Dec 2021</span>
          </p>
          <ul className="list-disc list-inside text-green-400 mt-2 space-y-1">
            <li>Studied advanced mathematics, calculus, and statistical modeling.</li>
            <li>Completed a dissertation on flood attenuation using artificial wetlands.</li>
            <li>Designed a structural steel warehouse as part of a final-year project.</li>
          </ul>
        </div>
        
        <h2 className="text-3xl font-bold text-green-400 mb-4 text-glow">Certificates</h2>
        
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-green-300">Elixir and Phoenix: Real World Functional Programming</h3>
          <p className="text-green-500 flex justify-between italic text-lg">
            <span>Udemy</span>
            <span className="text-right">Oct 2022</span>
          </p>
          <ul className="list-disc list-inside text-green-400 mt-2 space-y-1">
            <li>Studied the Elixir programming language and Phoenix web framework.</li>
            <li>Developed functional programming expertise.</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-green-300">SQL and PostgreSQL: The Complete Developer’s Guide</h3>
          <p className="text-green-500 flex justify-between italic text-lg">
            <span>Udemy</span>
            <span className="text-right">Oct 2022</span>
          </p>
          <ul className="list-disc list-inside text-green-400 mt-2 space-y-1">
            <li>Learned SQL query writing for relational databases.</li>
            <li>Designed efficient database structures.</li>
          </ul>
        </div>
          
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-green-300">Machine Learning</h3>
          <p className="text-green-500 flex justify-between italic text-lg">
            <span>Stanford Online</span>
            <span className="text-right">Jun 2022</span>
          </p>
          <ul className="list-disc list-inside text-green-400 mt-2 space-y-1">
            <li>Studied supervised and unsupervised learning techniques.</li>
            <li>Implemented algorithms using Octave for numerical computation.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-green-300">AWS-DEV-13: Building Modern .NET Applications on AWS</h3>
          <p className="text-green-500 flex justify-between italic text-lg">
            <span>Amazon Web Services</span>
            <span className="text-right">Jan 2022</span>
          </p>
          <ul className="list-disc list-inside text-green-400 mt-2 space-y-1">
            <li>Gained familiarity with .NET and ASP.NET.</li>
            <li>Developed and deployed web applications using AWS services.</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-green-300">CS50’s Web Programming with Python and JavaScript</h3>
          <p className="text-green-500 flex justify-between italic text-lg">
            <span>Harvard Online</span>
            <span className="text-right">Mar 2021</span>
          </p>
          <ul className="list-disc list-inside text-green-400 mt-2 space-y-1">
            <li>Developed interactive web applications using Django and JavaScript.</li>
            <li>Built a stock trading web application using REST APIs.</li>
            <li>Gained experience in HTML, CSS, and SQL databases.</li>
          </ul>
        </div>

        <div className="mb-6">
            <h3 className="text-2xl font-semibold text-green-300">CS50’s Introduction to Computer Science</h3>
            <p className="text-green-500 flex justify-between italic text-lg">
            <span>Harvard Online</span>
            <span className="text-right">Jul 2020</span>
          </p>
            <ul className="list-disc list-inside text-green-400 mt-2 space-y-1">
              <li>Learned C and Python programming through practical assignments.</li>
              <li>Studied computer science fundamentals.</li>
              <li>Developed a blog web application using Flask.</li>
            </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Resume;
