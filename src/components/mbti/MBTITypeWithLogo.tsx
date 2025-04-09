
import React from 'react';
import { User, Briefcase, Book, Lightbulb, Heart, Target, Brain, Compass } from 'lucide-react';
import { type MBTIPersonalityType } from '@/utils/mbti/types';

interface MBTITypeWithLogoProps {
  type: MBTIPersonalityType;
  name: string;
  className?: string;
}

const MBTITypeWithLogo: React.FC<MBTITypeWithLogoProps> = ({ type, name, className = "" }) => {
  // Function to determine the icon based on the MBTI type
  const getTypeIcon = (mbtiType: MBTIPersonalityType) => {
    // First letter: E/I (Extraversion/Introversion)
    const energySource = mbtiType.charAt(0);
    
    // Second letter: S/N (Sensing/iNtuition)
    const informationGathering = mbtiType.charAt(1);
    
    // Third letter: T/F (Thinking/Feeling)
    const decisionMaking = mbtiType.charAt(2);
    
    // Fourth letter: J/P (Judging/Perceiving)
    const lifestyle = mbtiType.charAt(3);
    
    // Assign icons based on personality temperament groups
    if (informationGathering === 'N' && decisionMaking === 'T') {
      // NT - Analysts (INTJ, INTP, ENTJ, ENTP)
      return <Brain className="h-5 w-5 text-blue-500" />;
    } else if (informationGathering === 'N' && decisionMaking === 'F') {
      // NF - Diplomats (INFJ, INFP, ENFJ, ENFP)
      return <Heart className="h-5 w-5 text-purple-500" />;
    } else if (informationGathering === 'S' && lifestyle === 'J') {
      // SJ - Sentinels (ISTJ, ISFJ, ESTJ, ESFJ)
      return <Briefcase className="h-5 w-5 text-green-500" />;
    } else {
      // SP - Explorers (ISTP, ISFP, ESTP, ESFP)
      return <Compass className="h-5 w-5 text-amber-500" />;
    }
  };

  // Get background color based on MBTI type group
  const getTypeBgColor = (mbtiType: MBTIPersonalityType) => {
    const informationGathering = mbtiType.charAt(1);
    const decisionMaking = mbtiType.charAt(2);
    const lifestyle = mbtiType.charAt(3);
    
    if (informationGathering === 'N' && decisionMaking === 'T') {
      return 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200';
    } else if (informationGathering === 'N' && decisionMaking === 'F') {
      return 'bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200';
    } else if (informationGathering === 'S' && lifestyle === 'J') {
      return 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200';
    } else {
      return 'bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200';
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`p-2 rounded-full ${getTypeBgColor(type)}`}>
        {getTypeIcon(type)}
      </div>
      <div>
        <div className="font-semibold">{type}</div>
        <div className="text-xs text-muted-foreground">{name}</div>
      </div>
    </div>
  );
};

export default MBTITypeWithLogo;
