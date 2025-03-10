import { useState, useEffect } from "react";

const About = () => {
  const bootSequence = [
    "[ OK ] Initializing system...",
    "[ OK ] Loading kernel modules...",
    "[ OK ] Mounting file systems...",
    "[ OK ] Establishing network connections...",
    "[ OK ] Verifying security protocols...",
    "[ OK ] Checking disk integrity...",
    "[ OK ] Starting system services...",
    "[ OK ] Running diagnostics...",
    "[ OK ] System ready.",
    "Enter Zaid Ismail's website",
    "###################",
    "Check out my GitHub:", 
    "https://github.com/zaidismail",
    "###################",
    "And my LinkedIn:", 
    "https://www.linkedin.com/in/zaid-ismail-0957a61b1/"
  ];

  const [displayText, setDisplayText] = useState([""]);
  const typingSpeed = 5; // Adjust speed (lower = faster)
  const lineDelay = 500; // Delay before the next line appears

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let newDisplayText = [""];

    const interval = setInterval(() => {
      if (lineIndex < bootSequence.length) {
        if (charIndex < bootSequence[lineIndex].length) {
          newDisplayText[lineIndex] += bootSequence[lineIndex][charIndex];
          setDisplayText([...newDisplayText]);
          charIndex++;
        } else {
          lineIndex++;
          charIndex = 0;
          if (lineIndex < bootSequence.length) {
            newDisplayText.push("");
            setTimeout(() => {}, lineDelay);
          }
        }
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto text-left p-8 min-h-screen bg-black text-green-400 font-mono">
      {displayText.map((line, index) => (
        <p key={index} className="text-lg mb-1">
          {line.includes("https") ? (
            <a href={line} target="_blank" rel="noopener noreferrer" className="underline">{line}</a>
          ) : (
            line
          )}
          {index === displayText.length - 1 && <span className="animate-blink">█</span>}
        </p>
      ))}
    </div>
  );
};

export default About;