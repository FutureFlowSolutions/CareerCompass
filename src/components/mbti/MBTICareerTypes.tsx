
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import MBTITypeCard from './MBTITypeCard';

const MBTICareerTypes = () => {
  const mbtiTypes = [
    {
      type: "ISTJ",
      name: "The Inspector",
      careers: ["Accountant", "Auditor", "Financial Analyst", "Project Manager", "Military Officer"]
    },
    {
      type: "ISFJ",
      name: "The Protector",
      careers: ["Nurse", "Teacher", "Social Worker", "HR Specialist", "Librarian"]
    },
    {
      type: "INFJ",
      name: "The Counselor",
      careers: ["Therapist", "Writer", "HR Manager", "Professor", "Healthcare Worker"]
    },
    {
      type: "INTJ",
      name: "The Architect",
      careers: ["Scientist", "Engineer", "Strategic Planner", "Software Developer", "Business Analyst"]
    },
    {
      type: "ISTP",
      name: "The Craftsman",
      careers: ["Engineer", "Mechanic", "Pilot", "Surgeon", "Software Developer"]
    },
    {
      type: "ISFP",
      name: "The Artist",
      careers: ["Graphic Designer", "Fashion Designer", "Chef", "Veterinarian", "Physical Therapist"]
    },
    {
      type: "INFP",
      name: "The Mediator",
      careers: ["Writer", "Counselor", "Artist", "Psychologist", "HR Specialist"]
    },
    {
      type: "INTP",
      name: "The Thinker",
      careers: ["Scientist", "Software Developer", "Professor", "Analyst", "Architect"]
    },
    {
      type: "ESTP",
      name: "The Persuader",
      careers: ["Entrepreneur", "Sales Representative", "Marketer", "Police Officer", "Paramedic"]
    },
    {
      type: "ESFP",
      name: "The Entertainer",
      careers: ["Event Planner", "Sales Representative", "Teacher", "Hospitality Manager", "Personal Trainer"]
    },
    {
      type: "ENFP",
      name: "The Champion",
      careers: ["Journalist", "Counselor", "Marketing Specialist", "Public Relations", "Teacher"]
    },
    {
      type: "ENTP",
      name: "The Debater",
      careers: ["Entrepreneur", "Lawyer", "Marketing Director", "Software Developer", "Management Consultant"]
    },
    {
      type: "ESTJ",
      name: "The Director",
      careers: ["Manager", "Military Officer", "Financial Advisor", "Judge", "School Principal"]
    },
    {
      type: "ESFJ",
      name: "The Caregiver",
      careers: ["Nurse", "Teacher", "HR Specialist", "Social Worker", "Sales Representative"]
    },
    {
      type: "ENFJ",
      name: "The Teacher",
      careers: ["Teacher", "HR Manager", "Counselor", "Sales Manager", "Marketing Director"]
    },
    {
      type: "ENTJ",
      name: "The Commander",
      careers: ["Executive", "Lawyer", "Management Consultant", "University Professor", "Entrepreneur"]
    }
  ];

  // Map personality types to consistent tab colors
  const typeColorMap = {
    analysts: "blue", // NT types (INTJ, INTP, ENTJ, ENTP)
    diplomats: "purple", // NF types (INFJ, INFP, ENFJ, ENFP)
    sentinels: "green", // SJ types (ISTJ, ISFJ, ESTJ, ESFJ)
    explorers: "amber" // SP types (ISTP, ISFP, ESTP, ESFP)
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Briefcase className="mr-2 h-5 w-5 text-blue-500" />
        The 16 MBTI Types and Career Fits
      </h3>
      
      <Tabs defaultValue="analysts" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="analysts">Analysts (NT)</TabsTrigger>
          <TabsTrigger value="diplomats">Diplomats (NF)</TabsTrigger>
          <TabsTrigger value="sentinels">Sentinels (SJ)</TabsTrigger>
          <TabsTrigger value="explorers">Explorers (SP)</TabsTrigger>
        </TabsList>
        
        <TabsContent value="analysts" className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mbtiTypes.filter(t => ['INTJ', 'INTP', 'ENTJ', 'ENTP'].includes(t.type)).map((type, index) => (
              <MBTITypeCard 
                key={index} 
                type={type.type} 
                name={type.name} 
                careers={type.careers} 
                colorClass="blue"
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="diplomats" className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mbtiTypes.filter(t => ['INFJ', 'INFP', 'ENFJ', 'ENFP'].includes(t.type)).map((type, index) => (
              <MBTITypeCard 
                key={index} 
                type={type.type} 
                name={type.name} 
                careers={type.careers} 
                colorClass="purple"
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="sentinels" className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mbtiTypes.filter(t => ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'].includes(t.type)).map((type, index) => (
              <MBTITypeCard 
                key={index} 
                type={type.type} 
                name={type.name} 
                careers={type.careers} 
                colorClass="green"
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="explorers" className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mbtiTypes.filter(t => ['ISTP', 'ISFP', 'ESTP', 'ESFP'].includes(t.type)).map((type, index) => (
              <MBTITypeCard 
                key={index} 
                type={type.type} 
                name={type.name} 
                careers={type.careers} 
                colorClass="amber"
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default MBTICareerTypes;
