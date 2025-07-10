import React from 'react'

const Callaction:React.FC = () =>{
    return(
        <>
       <div className="relative overflow-hidden bg-gradient-to-r from-neon_purple/80 to-fashion_pink/50 lg:py-16 py-8 lg:px-8 rounded-2xl shadow-2xl border-t-4 border-pink-500">              
            <div className="relative z-10 mx-auto text-center px-1">
                <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 font-anime">Ready to <span className="text-yellow-300">Go Plus Ultra</span>?</h2>
                <p className="text-lg lg:text-xl text-indigo-100 mb-8 ">Join 1M+ weebs enjoying ad-free anime. Start your <strong>7-day free trial</strong> today!</p>
                
                <button className="relative px-12 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full text-lg shadow-lg hover:shadow-yellow-400/40 transition-all hover:scale-105 group">
                            <span className="relative z-10">Start Watching Now</span>

                          
                            <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>

                        
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-sparkle"></div>
                </button>

                <div className="mt-6 flex items-center justify-center gap-2">
                    <span className="text-indigo-200 text-md">4.9/5 from 50K+ reviews</span>
                </div>
            </div>
        </div> 
        </>
    )
}

export default Callaction;