import { cn } from '@/lib/utils';
import { MoveRight } from 'lucide-react';

const Dataset = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex justify-between items-center', className)} {...props} />
);

const DatasetLabel = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('inline-flex items-center gap-2 text-muted-foreground', className)} {...props} />
);

const DatasetValue = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('inline-flex gap-2 items-center text-foreground', className)} {...props} />
);

const DatasetEndValue = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex gap-2', className)} {...props}>
    <MoveRight size={18} strokeWidth={1.25} className="text-muted-foreground" />
    {children}
  </div>
);

export { Dataset, DatasetLabel, DatasetValue, DatasetEndValue };
