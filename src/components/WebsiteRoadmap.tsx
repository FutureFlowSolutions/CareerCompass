
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Brain, 
  MessageSquare, 
  Star, 
  ArrowRight,
  User,
  BookOpen,
  GraduationCap,
  Briefcase
} from 'lucide-react';

const WebsiteRoadmap = () => {
  const steps = [
    {
      id: 1,
      title: "Take MBTI Assessment",
      description: "Complete a series of questions to discover your personality type",
      icon: <Brain className="h-8 w-8" />,
      color: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "text-blue-700 dark:text-blue-300",
      path: "/mbti"
    },
    {
      id: 2,
      title: "Explore Career Matches",
      description: "View career options that match your personality type",
      icon: <Compass className="h-8 w-8" />,
      color: "bg-purple-100 dark:bg-purple-900/30",
      textColor: "text-purple-700 dark:text-purple-300",
      path: "/"
    },
    {
      id: 3,
      title: "Chat with Career Assistant",
      description: "Get personalized guidance from our AI career advisor",
      icon: <MessageSquare className="h-8 w-8" />,
      color: "bg-green-100 dark:bg-green-900/30",
      textColor: "text-green-700 dark:text-green-300",
      path: "/chat"
    },
    {
      id: 4,
      title: "Share Feedback",
      description: "Help us improve our platform with your thoughts",
      icon: <Star className="h-8 w-8" />,
      color: "bg-amber-100 dark:bg-amber-900/30",
      textColor: "text-amber-700 dark:text-amber-300",
      path: "/feedback"
    }
  ];

  return (
    <div className="w-full py-6">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center w-full max-w-[280px]"
            >
              <div className={`flex flex-col items-center justify-center rounded-lg p-5 ${step.color} ${step.textColor} mb-4`}>
                <div className="mb-2 bg-white/70 dark:bg-gray-800/70 rounded-full p-3">
                  {step.icon}
                </div>
                <h3 className="text-lg font-medium text-center">{step.title}</h3>
                <p className="text-sm mt-2 text-center">{step.description}</p>
              </div>
            </motion.div>

            {index < steps.length - 1 && (
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.25, duration: 0.5 }}
                viewport={{ once: true }}
                className="hidden md:block"
              >
                <ArrowRight className="h-6 w-6 mx-2 text-muted-foreground" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WebsiteRoadmap;
