
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

interface AnswerOptionProps {
  optionType: 'A' | 'B';
  optionText: string;
  isSelected: boolean;
  onClick: () => void;
  color: 'blue' | 'green';
  questionId: number; // Add the questionId prop
}

const AnswerOption = ({
  optionType,
  optionText,
  isSelected,
  onClick,
  color,
  questionId // Extract from props
}: AnswerOptionProps) => {
  // Track if this option has ever been selected to prevent styling issues
  const [hasBeenSelected, setHasBeenSelected] = useState(false);
  
  // Reset the internal state when isSelected changes (when moving between questions)
  useEffect(() => {
    if (isSelected) {
      setHasBeenSelected(true);
    } else {
      setHasBeenSelected(false);
    }
  }, [isSelected]);

  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.19, 1, 0.22, 1],
      } 
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.19, 1, 0.22, 1],
      } 
    },
  };

  // Base styles that don't have color effects - ensure text is visible in all themes
  const baseStyles = "bg-secondary/70 hover:shadow-md text-foreground";
  
  // Only apply selected styles when the option is actually selected
  const selectedStyles = isSelected
    ? (color === 'blue' 
        ? 'bg-white dark:bg-gray-800 border-2 border-blue-500 ring-2 ring-blue-300 dark:ring-blue-500 shadow-lg' 
        : 'bg-white dark:bg-gray-800 border-2 border-green-500 ring-2 ring-green-300 dark:ring-green-500 shadow-lg')
    : 'border border-primary/20';
  
  // Hover state styling (only for hover, not for selected state)
  const hoverStyles = !isSelected
    ? (color === 'blue' 
        ? 'hover:border-blue-500 hover:shadow-blue-500/30 active:bg-blue-50 active:text-blue-700 dark:hover:text-blue-300 dark:active:bg-blue-900/50' 
        : 'hover:border-green-500 hover:shadow-green-500/30 active:bg-green-50 active:text-green-700 dark:hover:text-green-300 dark:active:bg-green-900/50')
    : '';

  // Custom click handler to force style reset when needed
  const handleOptionClick = () => {
    onClick();
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={fadeVariants}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
    >
      <button
        onClick={handleOptionClick}
        className={`w-full h-full min-h-[150px] p-6 md:p-8 rounded-xl text-left flex flex-col justify-center transition-all duration-300 ${
          baseStyles
        } ${isSelected ? selectedStyles : 'border border-primary/20'} ${hoverStyles}`}
        key={`${optionType}-${isSelected}-${questionId}`} // Use questionId from props
      >
        <div className="flex items-start gap-4">
          <motion.div 
            animate={isSelected ? { 
              scale: [1, 1.2, 1],
              transition: { duration: 0.5 }
            } : {}}
            className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center ${
              isSelected 
                ? `bg-${color === 'blue' ? 'blue' : 'green'}-100 dark:bg-${color === 'blue' ? 'blue' : 'green'}-900/50 text-${color === 'blue' ? 'blue' : 'green'}-500 dark:text-${color === 'blue' ? 'blue' : 'green'}-300` 
                : 'border border-primary/50'
            }`}
          >
            {isSelected ? <CheckCircle className="h-5 w-5" /> : <span className="text-sm">{optionType}</span>}
          </motion.div>
          <span className="text-lg font-medium">{optionText}</span>
        </div>
      </button>
    </motion.div>
  );
};

export default AnswerOption;
