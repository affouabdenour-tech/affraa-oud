'use client';

import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  count?: number;
  className?: string;
}

export function StarRating({
  rating,
  size = 'sm',
  showValue = false,
  count,
  className,
}: StarRatingProps) {
  const sizes = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };
  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={cn(
              sizes[size],
              i <= Math.round(rating)
                ? 'fill-gold text-gold'
                : 'fill-muted text-muted-foreground/40',
            )}
          />
        ))}
      </div>
      {showValue && (
        <span className={cn('font-medium text-foreground', textSizes[size])}>
          {rating.toFixed(1)}
        </span>
      )}
      {count !== undefined && (
        <span className={cn('text-muted-foreground', textSizes[size])}>
          ({count})
        </span>
      )}
    </div>
  );
}
