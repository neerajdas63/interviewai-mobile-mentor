
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Award, 
  Calendar, 
  Target,
  BarChart3,
  Clock,
  Star,
  CheckCircle,
  ArrowUp,
  Brain,
  MessageSquare,
  Eye
} from 'lucide-react';

export const ProgressView = () => {
  const monthlyData = [
    { month: 'Jan', interviews: 8, avgScore: 72 },
    { month: 'Feb', interviews: 12, avgScore: 78 },
    { month: 'Mar', interviews: 15, avgScore: 85 },
    { month: 'Apr', interviews: 18, avgScore: 87 }
  ];

  const skillProgress = [
    { skill: 'Communication', current: 88, previous: 76, change: 12 },
    { skill: 'Technical', current: 82, previous: 69, change: 13 },
    { skill: 'Behavioral', current: 89, previous: 81, change: 8 },
    { skill: 'Confidence', current: 78, previous: 65, change: 13 }
  ];

  const achievements = [
    { icon: '🏆', title: 'Technical Master', description: '10 technical interviews completed', date: '2 days ago', new: true },
    { icon: '🎯', title: 'Consistency Pro', description: '5-day practice streak', date: '1 week ago', new: false },
    { icon: '⭐', title: 'High Scorer', description: 'Scored 90+ in 3 interviews', date: '2 weeks ago', new: false },
    { icon: '🚀', title: 'Fast Learner', description: '25% improvement in 1 month', date: '3 weeks ago', new: false }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-slate-800">Your Progress</h2>
        <p className="text-slate-600">Track your interview preparation journey</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="border-2 border-green-200 bg-green-50">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-green-700">87%</div>
            <div className="text-sm text-green-600">Avg Score</div>
            <div className="flex items-center justify-center space-x-1 mt-1">
              <ArrowUp className="w-3 h-3 text-green-600" />
              <span className="text-xs text-green-600">+15% this month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200 bg-blue-50">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-blue-700">53</div>
            <div className="text-sm text-blue-600">Interviews</div>
            <div className="flex items-center justify-center space-x-1 mt-1">
              <ArrowUp className="w-3 h-3 text-blue-600" />
              <span className="text-xs text-blue-600">+18 this month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-purple-500" />
            <span>Monthly Performance</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 text-sm font-medium text-slate-600">{data.month}</div>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{data.interviews} interviews</span>
                      <span className="font-medium">{data.avgScore}% avg</span>
                    </div>
                    <Progress value={data.avgScore} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Skill Improvement */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="w-5 h-5 text-green-500" />
            <span>Skill Improvement</span>
          </CardTitle>
          <CardDescription>Your progress across different skill areas</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {skillProgress.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{skill.skill}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-slate-600">{skill.previous}% → {skill.current}%</span>
                  <Badge variant="secondary" className="text-green-700 bg-green-100">
                    +{skill.change}%
                  </Badge>
                </div>
              </div>
              <Progress value={skill.current} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-yellow-500" />
            <span>Achievements</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{achievement.icon}</div>
                <div>
                  <div className="font-medium text-slate-800">{achievement.title}</div>
                  <div className="text-sm text-slate-600">{achievement.description}</div>
                </div>
              </div>
              <div className="text-right">
                {achievement.new && <Badge variant="secondary" className="mb-1">New</Badge>}
                <div className="text-xs text-slate-500">{achievement.date}</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Study Streak */}
      <Card className="border-2 border-orange-200 bg-orange-50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🔥</div>
              <div>
                <div className="font-bold text-orange-800">5-Day Streak</div>
                <div className="text-sm text-orange-600">Keep it up!</div>
              </div>
            </div>
            <Badge variant="secondary" className="bg-orange-100 text-orange-700">
              Streak Master
            </Badge>
          </div>
          
          <div className="grid grid-cols-7 gap-1 mb-4">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
              <div key={index} className="text-center">
                <div className="text-xs text-orange-600 mb-1">{day}</div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                  index < 5 ? 'bg-orange-500 text-white' : 'bg-orange-200 text-orange-500'
                }`}>
                  {index < 5 ? '✓' : ''}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="text-sm text-orange-700">
              Practice today to maintain your streak!
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Goals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-blue-500" />
            <span>Weekly Goals</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">Complete 5 practice interviews</span>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              5/5 ✓
            </Badge>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 border-2 border-blue-500 rounded-full"></div>
              <span className="text-sm font-medium">Improve technical score by 5%</span>
            </div>
            <Badge variant="outline">3% so far</Badge>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 border-2 border-purple-500 rounded-full"></div>
              <span className="text-sm font-medium">Practice system design</span>
            </div>
            <Badge variant="outline">Pending</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
