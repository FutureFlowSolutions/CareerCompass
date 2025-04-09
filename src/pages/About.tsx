import TransitionLayout from "@/components/TransitionLayout";
import Navbar from "@/components/Navbar";
import MBTITypeInfo from "@/components/MBTITypeInfo";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Compass, Lightbulb, Share2, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TeamSection from "@/components/reviews/TeamSection";

const About = () => {
  return (
    <TransitionLayout>
      <Navbar />
      <main className="container max-w-5xl px-4 pt-24 pb-16">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-4"
          >
            About Career Compass
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Discover your ideal career path aligned with your personality using our MBTI assessment
            and AI-powered career guidance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground">
              At Career Compass, we believe that finding the right career is about more than just skills and qualifications—it's about finding a path that aligns with who you are. Our mission is to help students and young professionals discover career paths that match their personality traits, interests, and strengths.
            </p>
            <p className="text-muted-foreground">
              By combining scientifically-backed personality assessments with AI-powered career guidance, we provide personalized recommendations that lead to more fulfilling career choices and greater long-term satisfaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">How It Works</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                  <Brain className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium">Take the MBTI Assessment</h3>
                  <p className="text-sm text-muted-foreground">Answer a series of questions to discover your MBTI personality type.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                  <Target className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium">Get Personalized Career Matches</h3>
                  <p className="text-sm text-muted-foreground">Receive career recommendations matched to your personality type and preferences.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                  <Compass className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium">Explore Career Paths</h3>
                  <p className="text-sm text-muted-foreground">Learn about educational requirements, salary expectations, and growth opportunities.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                  <Lightbulb className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium">Get AI-Powered Guidance</h3>
                  <p className="text-sm text-muted-foreground">Chat with our AI assistant for personalized advice and answers to your career questions.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Understanding MBTI Personalities</h2>
          <MBTITypeInfo />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <TeamSection />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <h2 className="text-2xl font-bold mb-4">Start Your Career Journey Today</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Discover career paths that align with your personality and help you thrive in your professional life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/mbti">
                Take the MBTI Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/chat">
                Chat with Career Assistant
                <Share2 className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </main>
    </TransitionLayout>
  );
};

export default About;
