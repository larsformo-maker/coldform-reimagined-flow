
import { Separator } from '@/components/ui/separator';

interface SectionBreakProps {
  variant?: 'line' | 'gradient' | 'dots';
  className?: string;
}

const SectionBreak = ({ variant = 'gradient', className = '' }: SectionBreakProps) => {
  if (variant === 'line') {
    return (
      <div className={`py-16 ${className}`}>
        <Separator className="max-w-xs mx-auto bg-border" />
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className={`py-16 flex justify-center space-x-2 ${className}`}>
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        <div className="w-2 h-2 bg-green-400/60 rounded-full"></div>
        <div className="w-2 h-2 bg-green-400/30 rounded-full"></div>
      </div>
    );
  }

  return (
    <div className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-background px-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBreak;
