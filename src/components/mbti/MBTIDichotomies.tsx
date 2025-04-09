
import { motion } from 'framer-motion';
import { 
  User, 
  Lightbulb, 
  Heart, 
  Calendar,
  BookOpen,
  Target,
  Brain
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Define the dichotomy structure
interface Dichotomy {
  title: string;
  firstOption: {
    letter: string;
    name: string;
    description: string;
    icon: React.ReactNode;
  };
  secondOption: {
    letter: string;
    name: string;
    description: string;
    icon: React.ReactNode;
  };
}

const MBTIDichotomies = () => {
  const dichotomies: Dichotomy[] = [
    {
      title: "Energy Source",
      firstOption: {
        letter: "E",
        name: "Extraversion",
        description: "Focuses outward on people and things. Energized by social interaction.",
        icon: <User className="h-5 w-5" />
      },
      secondOption: {
        letter: "I",
        name: "Introversion",
        description: "Focuses inward on ideas and impressions. Energized by time alone or with few people.",
        icon: <User className="h-5 w-5" />
      }
    },
    {
      title: "Information Gathering",
      firstOption: {
        letter: "S",
        name: "Sensing",
        description: "Prefers concrete, practical information gathered through the five senses.",
        icon: <BookOpen className="h-5 w-5" />
      },
      secondOption: {
        letter: "N",
        name: "Intuition",
        description: "Prefers abstract possibilities, patterns, and meanings beyond the senses.",
        icon: <Lightbulb className="h-5 w-5" />
      }
    },
    {
      title: "Decision Making",
      firstOption: {
        letter: "T",
        name: "Thinking",
        description: "Makes decisions based on logic, consistency, and objective analysis.",
        icon: <Target className="h-5 w-5" />
      },
      secondOption: {
        letter: "F",
        name: "Feeling",
        description: "Makes decisions based on personal values and how actions affect others.",
        icon: <Heart className="h-5 w-5" />
      }
    },
    {
      title: "Lifestyle",
      firstOption: {
        letter: "J",
        name: "Judging",
        description: "Prefers structure, plans, and organization. Decision-oriented.",
        icon: <Calendar className="h-5 w-5" />
      },
      secondOption: {
        letter: "P",
        name: "Perceiving",
        description: "Prefers flexibility, adaptability, and spontaneity. Options-oriented.",
        icon: <Calendar className="h-5 w-5" />
      }
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Brain className="mr-2 h-5 w-5 text-blue-500" />
        Four MBTI Dichotomies
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dichotomies.map((dichotomy, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{dichotomy.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 border rounded-lg bg-secondary/20">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 p-1 rounded-full mr-2">
                      {dichotomy.firstOption.icon}
                    </div>
                    <div>
                      <span className="font-bold">{dichotomy.firstOption.letter}</span>: {dichotomy.firstOption.name}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{dichotomy.firstOption.description}</p>
                </div>
                
                <div className="p-3 border rounded-lg bg-secondary/20">
                  <div className="flex items-center mb-2">
                    <div className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 p-1 rounded-full mr-2">
                      {dichotomy.secondOption.icon}
                    </div>
                    <div>
                      <span className="font-bold">{dichotomy.secondOption.letter}</span>: {dichotomy.secondOption.name}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{dichotomy.secondOption.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default MBTIDichotomies;
