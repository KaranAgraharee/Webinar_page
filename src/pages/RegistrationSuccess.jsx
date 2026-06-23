import { CheckCircle2, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://chat.whatsapp.com/Jb9TrZILjSy0tjgQsN7rtm?s=cl&p=i&mlu=2&amv=2";

export default function RegistrationSuccess() {
  const handleJoin = () => {
    // window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0318] via-[#14052D] to-[#22073D] flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      {/* Card */}
      <div className="relative w-full max-w-md sm:max-w-lg rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl animate-in fade-in duration-500">

        {/* Success Icon */}
        <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-green-500/15">
          <CheckCircle2 className="h-9 w-9 sm:h-11 sm:w-11 text-green-400" />
        </div>

        {/* Heading */}
        <div className="mt-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            Registration Successful 🎉
          </h1>

          <p className="mt-3 text-sm sm:text-base text-white/70 leading-7 max-w-sm mx-auto">
            You're all set! Join our WhatsApp community to receive your
            webinar link and important updates.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 space-y-4">

          <div className="flex items-center gap-3">
            <span className="text-xl">📹</span>
            <span className="text-sm sm:text-base text-white/80">
              Webinar Link
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xl">🔔</span>
            <span className="text-sm sm:text-base text-white/80">
              Live Updates & Reminders
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xl">🎁</span>
            <span className="text-sm sm:text-base text-white/80">
              Bonus Resources
            </span>
          </div>

        </div>

        {/* Button */}
        <button
          // onClick={handleJoin}
          className="
            mt-8
            w-full
            flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-[#25D366]
            py-3.5
            sm:py-4
            text-base
            sm:text-lg
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-[#1EBE5D]
            hover:scale-[1.02]
            active:scale-95
            shadow-lg
            shadow-green-500/20
          "
        >
          <MessageCircle size={22} />
          Join WhatsApp Group
        </button>

        {/* Footer */}
        <p className="mt-5 text-center text-xs sm:text-sm text-white/40">
          See you inside 🚀
        </p>
      </div>
    </div>
  );
}