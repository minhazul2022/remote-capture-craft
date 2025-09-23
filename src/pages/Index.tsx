import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import gamingHero from "@/assets/gaming-hero.jpg";

const Index = () => {
  const handleTelegramClick = () => {
    window.open("https://t.me/+CW3-HkrdUjE5NzZl", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gaming-red/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gaming-orange/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Hero Image */}
        <div className="gaming-float">
          <img
            src={gamingHero}
            alt="RS BD KING 99 Gaming Character"
            className="w-full max-w-md mx-auto rounded-lg shadow-intense"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-gaming-red gaming-glow tracking-wider">
          RS BD KING 99
        </h1>

        {/* Description in Bengali */}
        <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed font-medium">
          সম্পূর্ণ ফ্রিতে ট্রেডিং শিখে প্রতি মাসে ২০ থেকে ৩০ হাজার টাকা ইনকাম করতে এখনই জয়েন হয়ে যান আমাদের টেলিগ্রাম গ্রুপে
        </p>

        {/* CTA Button */}
        <div className="py-8">
          <Button
            variant="telegram"
            size="lg"
            onClick={handleTelegramClick}
            className="gaming-glow hover:scale-105 transform transition-all duration-300"
          >
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
    </div>
  );
};

export default Index;
