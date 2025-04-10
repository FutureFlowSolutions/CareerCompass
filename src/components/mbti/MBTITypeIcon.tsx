
import React from 'react';
import { BookOpen, Lightbulb, Heart, Wrench, Users, Compass, Brain, Code, Presentation, Zap, Award, BarChart4 } from 'lucide-react';
import type { MBTIPersonalityType } from '@/utils/mbti/types';

interface MBTITypeIconProps {
  type: MBTIPersonalityType | string;
  size?: number;
  className?: string;
}

// Map each MBTI type to a specific icon and color scheme
const typeConfigs: Record<string, { 
  icon: React.ReactNode; 
  color: string; 
  bgColor: string;
  label: string;
}> = {
  'ISTJ': { 
    icon: <BookOpen strokeWidth={1.5} />, 
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
    label: 'RESPONSIBLE REALIST'
  },
  'ISFJ': { 
    icon: <Heart strokeWidth={1.5} />,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
    label: 'PRACTICAL HELPER'
  },
  'INFJ': { 
    icon: <Lightbulb strokeWidth={1.5} />,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100 dark:bg-amber-900/30',
    label: 'INSIGHTFUL VISIONARY'
  },
  'INTJ': { 
    icon: <Brain strokeWidth={1.5} />,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100 dark:bg-amber-900/30',
    label: 'CONCEPTUAL PLANNER'
  },
  'ISTP': { 
    icon: <Wrench strokeWidth={1.5} />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    label: 'LOGICAL PRAGMATIST'
  },
  'ISFP': { 
    icon: <Award strokeWidth={1.5} />,
    color: 'text-red-600',
    bgColor: 'bg-red-100 dark:bg-red-900/30',
    label: 'VERSATILE SUPPORTER'
  },
  'INFP': { 
    icon: <Heart strokeWidth={1.5} />,
    color: 'text-red-600',
    bgColor: 'bg-red-100 dark:bg-red-900/30',
    label: 'THOUGHTFUL IDEALIST'
  },
  'INTP': { 
    icon: <Code strokeWidth={1.5} />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    label: 'OBJECTIVE ANALYST'
  },
  'ESTP': { 
    icon: <Zap strokeWidth={1.5} />,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    label: 'ENERGETIC PROBLEM-SOLVER'
  },
  'ESFP': { 
    icon: <Users strokeWidth={1.5} />,
    color: 'text-green-600',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    label: 'ENTHUSIASTIC IMPROVISER'
  },
  'ENFP': { 
    icon: <Compass strokeWidth={1.5} />,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
    label: 'IMAGINATIVE MOTIVATOR'
  },
  'ENTP': { 
    icon: <Lightbulb strokeWidth={1.5} />,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
    label: 'ENTERPRISING EXPLORER'
  },
  'ESTJ': { 
    icon: <BarChart4 strokeWidth={1.5} />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    label: 'EFFICIENT ORGANIZER'
  },
  'ESFJ': { 
    icon: <Users strokeWidth={1.5} />,
    color: 'text-red-600',
    bgColor: 'bg-red-100 dark:bg-red-900/30',
    label: 'SUPPORTIVE CONTRIBUTOR'
  },
  'ENFJ': { 
    icon: <Heart strokeWidth={1.5} />,
    color: 'text-red-600',
    bgColor: 'bg-red-100 dark:bg-red-900/30',
    label: 'COMPASSIONATE FACILITATOR'
  },
  'ENTJ': { 
    icon: <Presentation strokeWidth={1.5} />,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
    label: 'DECISIVE STRATEGIST'
  }
};

const MBTITypeIcon = ({ type, size = 24, className = '' }: MBTITypeIconProps) => {
  // Default config if type doesn't match
  const defaultConfig = { 
    icon: <Users strokeWidth={1.5} />, 
    color: 'text-blue-500',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    label: 'PERSONALITY TYPE'
  };

  const config = typeConfigs[type] || defaultConfig;
  
  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`${config.bgColor} ${config.color} rounded-full p-5 mb-2`} style={{ width: size * 2.5, height: size * 2.5 }}>
        <div className="flex items-center justify-center h-full w-full">
          {React.cloneElement(config.icon as React.ReactElement, { size })}
        </div>
      </div>
      <div className="text-xs font-medium uppercase tracking-wider">{config.label}</div>
    </div>
  );
};

export default MBTITypeIcon;
