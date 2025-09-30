import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import gamingHero from "@/assets/gaming-hero.jpg";
const Index = () => {
  const handleTelegramClick = () => {
    window.open("https://t.me/+HFpfg6t8QVQ2NjRl", "_blank");
  };
  return <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gaming-red/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gaming-orange/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Hero Image */}
        <div className="gaming-float">
          <img src={gamingHero} alt="RS BD KING 99 Gaming Character" className="w-full max-w-md mx-auto rounded-lg shadow-intense" />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gaming-red gaming-glow tracking-wider md:text-6xl">
          RS BD KING 99
        </h1>

        {/* Description in Bengali */}
        <div className="text-lg md:text-xl text-foreground max-w-3xl mx-auto space-y-3 text-center px-[3px]">
          <p className="leading-snug font-medium">শিখুন, প্র্যাকটিস করুন এবং আয় করুন – এক জায়গায় সবকিছু!</p>
          
          <p className="leading-snug font-medium">📌 আমাদের টেলিগ্রাম গ্রুপে যা পাচ্ছেন একদম ফ্রি:</p>
          
          <div className="space-y-1 leading-snug font-medium">
            <p>✓ লাইভ ট্রেডিং ক্লাস (বেসিক থেকে অ্যাডভান্সড)</p>
            <p>✓ ফিউচার সিগন্যাল ও রিয়েল-টাইম লাইভ সিগন্যাল</p>
            <p>✓ এক্সপার্ট গাইডলাইন ও মার্কেট বিশ্লেষণ</p>
            <p>✓ রিস্ক ম্যানেজমেন্ট টিপস ও স্ট্র্যাটেজি</p>
          </div>
          
          <p className="leading-snug font-medium">💰 লক্ষ্য: প্রতি মাসে ২০–৩০ হাজার টাকা আয়ের সুযোগ তৈরি করা</p>
          
          <p className="leading-snug font-medium">➡️ যারা ট্রেডিং শিখে নিজের আয় শুরু করতে চান, তাদের জন্য এটি সেরা জায়গা।</p>
          
          <p className="leading-snug font-medium">⚡️ টেলিগ্রাম গ্রুপে যোগ দিন এবং আপনার ট্রেডিং যাত্রা আজই শুরু করুন!</p>
        </div>

        {/* CTA Button */}
        <div className="py-8">
          <Button variant="telegram" size="lg" onClick={handleTelegramClick} className="gaming-glow hover:scale-105 transform transition-all duration-300 font-bold text-base">
            📱 Join Telegram Now 📱
          </Button>
        </div>

        {/* Countdown Timer */}
        <div className="py-8">
          <CountdownTimer />
        </div>

        {/* Footer */}
        
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-gaming-red rounded-full animate-pulse" />
      <div className="absolute top-20 right-20 w-1 h-1 bg-gaming-orange rounded-full animate-pulse delay-75" />
      <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-gaming-blue rounded-full animate-pulse delay-150" />
      <div className="absolute bottom-10 right-10 w-2 h-2 bg-gaming-purple rounded-full animate-pulse delay-300" />
    </div>;
};
export default Index;