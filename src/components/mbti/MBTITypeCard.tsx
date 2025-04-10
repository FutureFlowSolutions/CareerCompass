
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import MBTITypeIcon from './MBTITypeIcon';

interface MBTITypeCardProps {
  type: string;
  name: string;
  careers: string[];
  colorClass: string;
}

const MBTITypeCard = ({ type, name, careers, colorClass }: MBTITypeCardProps) => {
  return (
    <Card className={`bg-card border dark:border-${colorClass}-900/50 shadow-sm`}>
      <CardHeader className="pb-2">
        <div className="flex items-center">
          <div className="mr-4">
            <MBTITypeIcon type={type as any} size={20} />
          </div>
          <div>
            <CardTitle className="text-lg">
              {type}
              <div className="text-sm font-normal text-muted-foreground">{name}</div>
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="font-medium mb-2">Common Career Fits:</CardDescription>
        <div className="flex flex-wrap gap-2">
          {careers.map((career, idx) => (
            <span 
              key={idx} 
              className={`inline-block bg-${colorClass}-100 dark:bg-${colorClass}-900/30 text-${colorClass}-700 dark:text-${colorClass}-300 px-2 py-1 rounded-md text-xs mb-1`}
            >
              {career}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MBTITypeCard;
