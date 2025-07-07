
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Play, 
  Calendar, 
  Award,
  TrendingUp,
  Target,
  CheckCircle,
  Zap,
  Star,
  Clock
} from 'lucide-react';

interface DashboardProps {
  onStartPractice: () => void;
}

export const Dashboard = ({ onStartPractice }: DashboardProps) => {
  return (
    <div className="p-4 space-y-6">
      {/* Greeting Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold mb-1">Good morning, Priya! 👋</h2>
            <p className="text-blue-100">Ready to ace your next interview?</p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1 mb-1">
              <Zap className="w-4 h-4 text-orange-300" />
              <span className="text-sm font-medium">5-day streak</span>
            </div>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              🔥 On Fire!
            </Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">85%</div>
            <div className="text-xs text-blue-100">Confidence</div>
          </div>
          <div>
            <div className="text-2xl font-bold">12</div>
            <div className="text-xs text-blue-100">Interviews</div>
          </div>
          <div>
            <div className="text-2xl font-bold">4.6</div>
            <div className="text-xs text-blue-100">Avg Score</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">Quick Actions</h3>
        
        <div className="grid grid-cols-2 gap-3">
          <Button 
            onClick={onStartPractice}
            className="h-20 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 flex flex-col items-center justify-center space-y-2 text-white border-0"
          >
            <Play className="w-6 h-6" />
            <span className="text-sm font-medium">Start Practice</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-20 border-2 border-orange-200 bg-orange-50 hover:bg-orange-100 flex flex-col items-center justify-center space-y-2 text-orange-700"
          >
            <Calendar className="w-6 h-6" />
            <span className="text-sm font-medium">Schedule Live</span>
          </Button>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            className="h-16 border-2 border-purple-200 bg-purple-50 hover:bg-purple-100 flex items-center justify-center space-x-2 text-purple-700"
          >
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm font-medium">View Report</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-16 border-2 border-blue-200 bg-blue-50 hover:bg-blue-100 flex items-center justify-center space-x-2 text-blue-700"
          >
            <Target className="w-5 h-5" />
            <span className="text-sm font-medium">Daily Challenge</span>
          </Button>
        </div>
      </div>

      {/* Progress Overview */}
      <Card className="border-2 border-slate-100">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center space-x-2">
            <Award className="w-5 h-5 text-yellow-500" />
            <span>Your Progress</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-600">Overall Improvement</span>
              <span className="font-medium text-green-600">+23% this week</span>
            </div>
            <Progress value={78} className="h-2" />
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Communication</span>
              <div className="flex items-center space-x-2">
                <Progress value={85} className="w-20 h-2" />
                <span className="text-sm font-medium">85%</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Technical</span>
              <div className="flex items-center space-x-2">
                <Progress value={72} className="w-20 h-2" />
                <span className="text-sm font-medium">72%</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Behavioral</span>
              <div className="flex items-center space-x-2">
                <Progress value={90} className="w-20 h-2" />
                <span className="text-sm font-medium">90%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">Recommended for You</h3>
        
        <Card className="border-l-4 border-l-orange-500 bg-orange-50/50">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800 mb-1">Practice SQL Questions</h4>
                <p className="text-sm text-slate-600 mb-2">Improve your database knowledge for technical interviews</p>
                <Badge variant="secondary" className="text-xs">15 min</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-blue-500 bg-blue-50/50">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800 mb-1">TCS Interview Pattern</h4>
                <p className="text-sm text-slate-600 mb-2">Prepare for TCS-specific interview questions and format</p>
                <Badge variant="secondary" className="text-xs">30 min</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Achievements */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Recent Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                🏆
              </div>
              <div>
                <div className="font-medium text-sm">Technical Master</div>
                <div className="text-xs text-slate-500">Completed 10 technical interviews</div>
              </div>
            </div>
            <Badge variant="outline" className="text-xs">New</Badge>
          </div>
          
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                🎯
              </div>
              <div>
                <div className="font-medium text-sm">Consistency Pro</div>
                <div className="text-xs text-slate-500">5-day practice streak</div>
              </div>
            </div>
            <Badge variant="outline" className="text-xs">Earned</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
