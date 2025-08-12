import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);
  
  // Particle animation effect state
  const [particles, setParticles] = useState([]);
  
  // Generate random particles
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1
    }));
    
    setParticles(newParticles);
    
    const intervalId = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(p => ({
          ...p,
          x: (p.x + p.speedX + 100) % 100,
          y: (p.y + p.speedY + 100) % 100
        }))
      );
    }, 50);
    
    return () => clearInterval(intervalId);
  }, []);
  
  // Countdown timer to automatically redirect user
  useEffect(() => {
    if (countdown <= 0) {
      navigate('/');
      return;
    }
    
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  // Handle manual redirect
  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D1117] text-white relative overflow-hidden">
      {/* Floating particles */}
      {particles.map((particle, index) => (
        <div 
          key={index}
          className="absolute rounded-full bg-blue-500"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
        />
      ))}
      
      <div className="w-full max-w-2xl px-6 py-12 relative z-10">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              404
            </h1>
          </div>
          
          <h2 className="text-2xl md:text-3xl mb-6 font-light">
            <span className="text-purple-400">Oops!</span> Page not found
          </h2>
          
          <p className="text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="relative">
            <div className="h-1 w-full bg-gray-800 rounded-full mb-6 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                style={{ width: `${(countdown / 10) * 100}%`, transition: 'width 1s linear' }}
              />
            </div>
            
            <p className="text-sm text-gray-400 mb-8">
              Redirecting to homepage in <span className="text-cyan-400">{countdown}</span> seconds
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick= {handleRedirect}
              className="flex items-center mb-8 px-4 py-2 border border-gray-700 hover:bg-[#1A2333] transition-colors rounded-md text-[#f1f4f5]"
            >
            <img src="/images/white-arrow-left.svg" alt="arrow-left" className="text-white mr-1"/>
            Kembali
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;