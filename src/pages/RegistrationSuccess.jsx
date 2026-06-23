import { CheckCircle2, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://chat.whatsapp.com/Jb9TrZILjSy0tjgQsN7rtm?s=cl&p=i&mlu=2&amv=2";

export default function RegistrationSuccess() {
  const handleJoin = () => {
    // Clear the guard flag — page is no longer accessible after joining
    sessionStorage.removeItem('registrationSuccess')
    window.open(WHATSAPP_LINK, '_blank', 'noopener,noreferrer')
  };


  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-8 md:p-12 relative overflow-hidden">
      {/* Ambient background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Card Wrapper - Responsive sizing and airy padding */}
      <div className="w-full max-w-md sm:max-w-lg rounded-2xl sm:rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 p-6 sm:p-10 md:p-12 text-center shadow-2xl relative z-10 flex flex-col items-center">
        
        {/* Animated Check Ring with extra separation */}
        <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4 sm:mb-6">
          <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-emerald-500/20">
            <CheckCircle2 className="h-8 w-8 sm:h-9 sm:w-9 text-emerald-400" />
          </div>
        </div>

        {/* Text Area - Uses space-y to completely eliminate dense stacking */}
        <div className="space-y-4 sm:space-y-5 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            You're All Set! 🎉
          </h1>
          
          <p className="text-base sm:text-xl text-slate-200 font-medium px-2">
            Your registration for the webinar is confirmed.
          </p>
          
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-sm mx-auto px-4">
            Don't miss out! Join our community channel below to access live links, digital resources, and event updates.
          </p>
        </div>

        {/* CTA Button - Enhanced hit-box size and responsive padding */}
        <button 
          onClick={handleJoin} 
          className="mt-8 sm:mt-10 w-full flex items-center justify-center gap-3 rounded-xl sm:rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-4 sm:py-5 px-6 text-base sm:text-lg shadow-xl shadow-emerald-500/10 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
        >
          <MessageCircle size={22} fill="currentColor" />
          Join WhatsApp Group
        </button>
        
      </div>
    </div>
  )

}