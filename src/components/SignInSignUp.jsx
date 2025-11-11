import React, { useState } from 'react';

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 p-8 overflow-hidden">

      {/* Achtergrond bollen */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Linksboven */}
        <div className="absolute top-30 left-60 w-64 h-64 rounded-full bg-yellow-400/30 filter blur-3xl animate-blob"></div>

        {/* Rechtsonder */}
        <div className="absolute bottom-30 right-60 w-64 h-64 rounded-full bg-purple-400/30 filter blur-3xl animate-blob animation-delay-2000"></div>

        {/* Achter het formulier */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 rounded-full bg-pink-400/20 filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Hoofd container */}
      <div className="relative max-w-md w-full p-8 bg-blue-950/60 rounded-2xl 
                      shadow-[0_20px_50px_rgba(0,29,61,0.7)] 
                      backdrop-blur-xl border border-blue-800/50 z-10">

        {/* Titel */}
        <h2 className="text-3xl font-extrabold text-yellow-300 text-center mb-2">
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </h2>
        <p className="text-blue-200 text-center mb-8">
          {isSignUp ? 'Join our community today' : 'Sign in to continue your journey'}
        </p>

        {/* Formulier */}
        <form className="relative z-10 space-y-4">
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 bg-blue-900/30 rounded-xl border border-blue-700/50 
                         text-white placeholder-blue-300/50 outline-none 
                         focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent 
                         transition-all"
            />
          )}
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-4 bg-blue-900/30 rounded-xl border border-blue-700/50 
                       text-white placeholder-blue-300/50 outline-none 
                       focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent 
                       transition-all"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 bg-blue-900/30 rounded-xl border border-blue-700/50 
                       text-white placeholder-blue-300/50 outline-none 
                       focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent 
                       transition-all"
          />

          <button
            type="button"
            className="group w-full p-4 mt-4 bg-gradient-to-r from-yellow-500 to-yellow-400 
                       text-blue-950 rounded-xl font-bold shadow-lg 
                       hover:shadow-yellow-400/40 overflow-hidden 
                       transform transform-style-3d hover:-translate-y-0.5 hover:scale-105 
                       hover:translate-z-20 transition-all duration-300 relative"
            onClick={() => {
              if (isSignUp) {
                // logica voor Create Account
              } else {
                // logica voor Sign in
              }
            }}
          >
            <span className="relative z-10">{isSignUp ? 'Create Account' : 'Sign in'}</span>
            <span className="absolute inset-0 bg-yellow-500/20 group-hover:bg-yellow-400/30 
                             rounded-xl transition-colors pointer-events-none"></span>
          </button>
        </form>

        {/* Sign In / Sign Up toggle */}
        <div className="flex justify-center mt-5">
          <span className="text-blue-200/80">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          </span>
          <span
            className="text-yellow-300 font-bold cursor-pointer hover:text-yellow-400 ml-1 transition-colors"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </span>
        </div>

        {/* Or continue with */}
        <div className="mt-8 pt-6 border-t border-blue-800/30 text-center space-y-4">
          <p className="text-blue-200/70 text-sm">Or continue with</p>
          <div className="flex justify-center gap-4">
            <button className="p-3 bg-blue-900/40 rounded-lg hover:bg-blue-800/50 transition-colors text-yellow-400 hover:text-yellow-300">
              <i className="bx bxl-google text-2xl"></i>
            </button>
            <button className="p-3 bg-blue-900/40 rounded-lg hover:bg-blue-800/50 transition-colors text-yellow-400 hover:text-yellow-300">
              <i className="bx bxl-apple text-2xl"></i>
            </button>
            <button className="p-3 bg-blue-900/40 rounded-lg hover:bg-blue-800/50 transition-colors text-yellow-400 hover:text-yellow-300">
              <i className="bx bxl-facebook text-2xl"></i>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SignInSignUp;
