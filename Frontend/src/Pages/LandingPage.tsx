import { useNavigate } from "react-router-dom";
import { Logo } from "../icons/Logo_Landingpage"

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 flex flex-col items-center justify-center relative overflow-hidden">
     
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
        
       
        <div className="absolute top-20 left-20 text-6xl opacity-10 animate-bounce">📺</div>
        <div className="absolute top-40 right-32 text-5xl opacity-10 animate-bounce delay-1000">🐦</div>
        <div className="absolute bottom-32 left-32 text-5xl opacity-10 animate-bounce delay-2000">📷</div>
        <div className="absolute bottom-20 right-20 text-6xl opacity-10 animate-bounce delay-500">🎵</div>
        <div className="absolute top-60 left-1/2 text-4xl opacity-10 animate-bounce delay-1500">📄</div>
        <div className="absolute bottom-60 right-1/3 text-4xl opacity-10 animate-bounce delay-3000">🔗</div>
      </div>

    
      <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
       
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="transform hover:scale-110 transition-transform duration-300">
            <Logo />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl">
            Brain Hub
          </h1>
        </div>

        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Bookmark Everything, Browse Nothing
        </h2>
        
     
        <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light max-w-4xl mx-auto leading-relaxed">
        Don’t waste time scrolling through every platform to find your favorite content — bookmark and save videos, tweets, articles, and more effortlessly in one place!
          <span className="text-blue-400 font-semibold"> YouTube, Twitter, Instagram, TikTok ,Facebook</span> all your favorite ,all here 
          <span className="text-purple-400 font-semibold"> Never open platforms again and again</span> — everything you love is right here.
        </p>

     
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">🔐 Secure & Simple Authentication</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">👤</div>
              <h4 className="text-lg font-semibold text-white mb-2">Quick Signup</h4>
              <p className="text-gray-300 text-sm">Create account in 30 seconds with username email and password</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🔑</div>
              <h4 className="text-lg font-semibold text-white mb-2">Secure Login</h4>
              <p className="text-gray-300 text-sm">JWT-based authentication keeps your data safe</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20 hover:bg-blue-500/20 transition-all duration-300 hover:scale-105">
            <div className="text-5xl mb-4">⏰</div>
            <h3 className="text-2xl font-bold text-white mb-3">No More Scrolling</h3>
            <p className="text-gray-300 text-lg">Stop endless browsing. Your bookmarks are organized and ready.</p>
            <div className="text-blue-400 font-semibold text-xl mt-2">Save 1+ hours/day</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20 hover:bg-purple-500/20 transition-all duration-300 hover:scale-105">
            <div className="text-5xl mb-4">🔖</div>
            <h3 className="text-2xl font-bold text-white mb-3">Smart Bookmarks</h3>
            <p className="text-gray-300 text-lg">Paste link, add caption, categorize - your content is saved forever.</p>
            <div className="text-purple-400 font-semibold text-xl mt-2">One-Click Save</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105">
            <div className="text-5xl mb-4">🚫</div>
            <h3 className="text-2xl font-bold text-white mb-3"> save your favorite reels, videos, tweets, and more in one place.</h3>
            <p className="text-gray-300 text-lg">Forget reopening every platform just to find what you love — save your favorite reels, videos, tweets, and more in one place.</p>
            <div className="text-cyan-400 font-semibold text-xl mt-2">All-in-One</div>
          </div>
        </div>

   
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-4 text-center">Bookmark from Every Platform</h3>
          <p className="text-gray-300 text-lg text-center mb-8">No need to open these apps anymore - save everything here!</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-6 border border-red-400/30 hover:bg-red-500/30 transition-all duration-300 hover:scale-110 text-center">
              <div className="text-5xl mb-3">📺</div>
              <p className="text-white font-bold text-lg">YouTube</p>
              <p className="text-red-300 text-sm">Videos</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30 hover:bg-blue-500/30 transition-all duration-300 hover:scale-110 text-center">
              <div className="text-5xl mb-3">🐦</div>
              <p className="text-white font-bold text-lg">Twitter</p>
              <p className="text-blue-300 text-sm">Tweets</p>
            </div>
            <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-pink-400/30 hover:bg-pink-500/30 transition-all duration-300 hover:scale-110 text-center">
              <div className="text-5xl mb-3">📷</div>
              <p className="text-white font-bold text-lg">Instagram</p>
              <p className="text-pink-300 text-sm">Posts/Reels</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/20 to-black/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-500/30 hover:bg-gray-800/30 transition-all duration-300 hover:scale-110 text-center">
              <div className="text-5xl mb-3">🎵</div>
              <p className="text-white font-bold text-lg">TikTok</p>
              <p className="text-gray-300 text-sm">Videos</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30 hover:bg-green-500/30 transition-all duration-300 hover:scale-110 text-center">
              <div className="text-5xl mb-3">📄</div>
              <p className="text-white font-bold text-lg">Articles</p>
              <p className="text-green-300 text-sm">News</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 hover:bg-purple-500/30 transition-all duration-300 hover:scale-110 text-center">
              <div className="text-5xl mb-3">🔗</div>
              <p className="text-white font-bold text-lg">Any Link</p>
              <p className="text-purple-300 text-sm">Everything</p>
            </div>
          </div>
        </div>

        
        <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border border-indigo-400/20 mb-16">
          <h3 className="text-3xl font-bold text-white mb-4 text-center">How Bookmarking Works</h3>
          <p className="text-gray-300 text-lg text-center mb-8">Simple 3-step process to never lose content again</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white shadow-lg">1</div>
              <h4 className="text-xl font-semibold text-white mb-3">Find & Copy</h4>
              <p className="text-gray-300">Find content on any platform and copy the link</p>
              <div className="mt-4 text-blue-400 font-semibold">📱 Any Platform</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white shadow-lg">2</div>
              <h4 className="text-xl font-semibold text-white mb-3">Paste & Describe</h4>
              <p className="text-gray-300">Paste link in Second Brain and add your caption</p>
              <div className="mt-4 text-purple-400 font-semibold">✍️ Add Notes</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white shadow-lg">3</div>
              <h4 className="text-xl font-semibold text-white mb-3">Never Open Again</h4>
              <p className="text-gray-300">Access all your bookmarks without opening apps</p>
              <div className="mt-4 text-cyan-400 font-semibold">🚫 No More Apps</div>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <button
            onClick={() => navigate("/signup")}
            className="group relative px-12 py-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold rounded-2xl text-xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>Start Bookmarking Now</span>
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={() => navigate("/signin")}
            className="px-12 py-6 bg-transparent border-2 border-blue-400/50 text-white font-semibold rounded-2xl text-xl hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 backdrop-blur-sm"
          >
            Sign In
          </button>
        </div>

     
        <div className="text-center">
          <p className="text-gray-300 text-xl mb-6 font-semibold">
            Join thousands of users who stopped wasting time on social media
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-gray-400">
            <span className="flex items-center gap-2">✅ <span className="text-white">Free forever</span></span>
            <span className="flex items-center gap-2">✅ <span className="text-white">No ads</span></span>
            <span className="flex items-center gap-2">✅ <span className="text-white">Privacy first</span></span>
            <span className="flex items-center gap-2">✅ <span className="text-white">Secure</span></span>
          </div>
        </div>
      </div>

      
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-32 fill-white/5" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </div>
  );
}
