
import { Card, CardContent } from "@/components/ui/card";
import { Book, Users, Brain, Heart, CalendarCheck, Sparkles } from "lucide-react";

const MBTIDichotomies = () => {
  return (
    <div className="space-y-10 w-full">
      {/* Energy Direction Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-center">Energy Direction</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-blue-600/20 bg-blue-50/10 dark:bg-blue-900/5">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="flex flex-col items-center justify-center mb-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-2">
                  <Book className="h-5 w-5 text-blue-600" />
                </div>
                <h4 className="text-lg font-medium mb-1 text-blue-700 dark:text-blue-400">E: Extraversion</h4>
              </div>
              <p className="text-sm text-center">Energized by external world, social interaction, and activities. Expressive, outgoing, and breadth-focused.</p>
            </CardContent>
          </Card>

          <Card className="border-purple-600/20 bg-purple-50/10 dark:bg-purple-900/5">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="flex flex-col items-center justify-center mb-3">
                <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <h4 className="text-lg font-medium mb-1 text-purple-700 dark:text-purple-400">I: Introversion</h4>
              </div>
              <p className="text-sm text-center">Energized by internal world, reflection, and depth. Reserved, private, and depth-focused.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Information Processing Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-center">Information Processing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-amber-600/20 bg-amber-50/10 dark:bg-amber-900/5">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="flex flex-col items-center justify-center mb-3">
                <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-2">
                  <Sparkles className="h-5 w-5 text-amber-600" />
                </div>
                <h4 className="text-lg font-medium mb-1 text-amber-700 dark:text-amber-400">S: Sensing</h4>
              </div>
              <p className="text-sm text-center">Focuses on concrete details, facts, and practical reality. Present-oriented and sequential.</p>
            </CardContent>
          </Card>

          <Card className="border-green-600/20 bg-green-50/10 dark:bg-green-900/5">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="flex flex-col items-center justify-center mb-3">
                <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-2">
                  <Brain className="h-5 w-5 text-green-600" />
                </div>
                <h4 className="text-lg font-medium mb-1 text-green-700 dark:text-green-400">N: Intuition</h4>
              </div>
              <p className="text-sm text-center">Focuses on patterns, possibilities, and meanings. Future-oriented and conceptual.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Decision Making Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-center">Decision Making</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-blue-600/20 bg-blue-50/10 dark:bg-blue-900/5">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="flex flex-col items-center justify-center mb-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-2">
                  <Brain className="h-5 w-5 text-blue-600" />
                </div>
                <h4 className="text-lg font-medium mb-1 text-blue-700 dark:text-blue-400">T: Thinking</h4>
              </div>
              <p className="text-sm text-center">Makes decisions based on logic, consistency, and objective analysis.</p>
            </CardContent>
          </Card>

          <Card className="border-green-600/20 bg-green-50/10 dark:bg-green-900/5">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="flex flex-col items-center justify-center mb-3">
                <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-2">
                  <Heart className="h-5 w-5 text-green-600" />
                </div>
                <h4 className="text-lg font-medium mb-1 text-green-700 dark:text-green-400">F: Feeling</h4>
              </div>
              <p className="text-sm text-center">Makes decisions based on personal values and how actions affect others.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Lifestyle Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-center">Lifestyle</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-blue-600/20 bg-blue-50/10 dark:bg-blue-900/5">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="flex flex-col items-center justify-center mb-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-2">
                  <CalendarCheck className="h-5 w-5 text-blue-600" />
                </div>
                <h4 className="text-lg font-medium mb-1 text-blue-700 dark:text-blue-400">J: Judging</h4>
              </div>
              <p className="text-sm text-center">Prefers structure, plans, and organization. Decision-oriented.</p>
            </CardContent>
          </Card>

          <Card className="border-green-600/20 bg-green-50/10 dark:bg-green-900/5">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="flex flex-col items-center justify-center mb-3">
                <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-2">
                  <Sparkles className="h-5 w-5 text-green-600" />
                </div>
                <h4 className="text-lg font-medium mb-1 text-green-700 dark:text-green-400">P: Perceiving</h4>
              </div>
              <p className="text-sm text-center">Prefers flexibility, adaptability, and spontaneity. Options-oriented.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MBTIDichotomies;
