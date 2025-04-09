
import { motion } from 'framer-motion';
import MBTITypeIcon from '@/components/mbti/MBTITypeIcon';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { personalityDescriptions } from '@/utils/mbti';
import { type MBTIPersonalityType } from '@/utils/mbti/types';
import { ArrowRight } from 'lucide-react';

const MBTITypeGrid = () => {
  const navigate = useNavigate();
  
  // All 16 MBTI types
  const mbtiTypes: MBTIPersonalityType[] = [
    'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
    'ISTP', 'ISFP', 'INFP', 'INTP',
    'ESTP', 'ESFP', 'ENFP', 'ENTP',
    'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'
  ];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="w-full py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">The 16 MBTI Personality Types</h2>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {mbtiTypes.map((type) => {
          const typeInfo = personalityDescriptions[type];
          const careers = typeInfo.careers.slice(0, 2).join(", ") + 
            (typeInfo.careers.length > 2 ? "..." : "");
          
          return (
            <motion.div 
              key={type}
              variants={item}
              className="bg-card border rounded-lg p-4 flex flex-col items-center hover:border-primary/50 
                transition-all duration-300 cursor-pointer"
              onClick={() => navigate(`/chat?question=Tell me about ${type} personality type and career options`)}
            >
              <MBTITypeIcon type={type} size={20} />
              
              <h3 className="text-lg font-semibold mt-3 mb-1">{type}</h3>
              
              <p className="text-xs text-muted-foreground text-center mb-3 line-clamp-2">
                {typeInfo.description.split('.')[0]}.
              </p>
              
              <div className="text-xs text-primary/80 mt-auto">
                <span className="font-medium">Career examples:</span> {careers}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      
      <div className="mt-8 flex justify-center">
        <Button 
          onClick={() => navigate('/mbti')}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Take MBTI Assessment
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default MBTITypeGrid;
