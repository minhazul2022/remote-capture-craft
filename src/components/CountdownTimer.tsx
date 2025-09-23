import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate?: Date;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 1
  });

  useEffect(() => {
    // If no target date provided, just animate the seconds
    if (!targetDate) {
      const timer = setInterval(() => {
        setTimeLeft(prev => ({
          ...prev,
          seconds: prev.seconds === 59 ? 0 : prev.seconds + 1
        }));
      }, 1000);
      return () => clearInterval(timer);
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex items-center justify-center space-x-2 text-gaming-red font-bold text-xl">
      <div className="flex flex-col items-center">
        <span className="text-3xl gaming-glow">{formatNumber(timeLeft.days)}</span>
        <span className="text-xs text-muted-foreground">DAYS</span>
      </div>
      <span className="text-2xl">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl gaming-glow">{formatNumber(timeLeft.hours)}</span>
        <span className="text-xs text-muted-foreground">HOURS</span>
      </div>
      <span className="text-2xl">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl gaming-glow">{formatNumber(timeLeft.minutes)}</span>
        <span className="text-xs text-muted-foreground">MINUTES</span>
      </div>
      <span className="text-2xl">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl gaming-glow">{formatNumber(timeLeft.seconds)}</span>
        <span className="text-xs text-muted-foreground">SECONDS</span>
      </div>
    </div>
  );
};