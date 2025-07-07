
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft,
  TrendingUp,
  Award,
  Target,
  Brain,
  Mic,
  Eye,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Star,
  Download,
  Share,
  BarChart3,
  BookOpen,
  Lightbulb
} from 'lucide-react';

interface InterviewAnalysisProps {
  onClose: () => void;
}

export const InterviewAnalysis = ({ onClose }: InterviewAnalysisProps) => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const overallScore = 85;
  const skillScores = {
    communication: 88,
    technical: 82,
    behavioral: 89,
    confidence: 78,
    eyeContact: 85,
    speechPace: 75
  };

  const strengths = [
    { skill: 'Communication', score: 88, improvement: '+12%' },
    { skill: 'Problem Solving', score: 85, improvement: '+8%' },
    { skill: 'Behavioral Responses', score: 89, improvement: '+15%' }
  ];

  const improvements = [
    { area: 'Technical Depth', current: 82, target: 90, gap: 8 },
    { area: 'Speech Pace', current: 75, target: 85, gap: 10 },
    { area: 'Confidence Level', current: 78, target: 88, gap: 10 }
  ];

  const recommendations = [
    {
      title: 'Practice SQL Advanced Concepts',
      description: 'Focus on complex joins, subqueries, and optimization',
      priority: 'High',
      time: '2-3 hours',
      color: 'bg-red-50 border-red-200 text-red-700'
    },
    {
      title: 'Improve Speaking Pace',
      description: 'Practice speaking at a moderate, consistent pace',
      priority: 'Medium',
      time: '30 min daily',
      color: 'bg-yellow-50 border-yellow-200 text-yellow-700'
    },
    {
      title: 'Confidence Building Exercises',
      description: 'Mock interviews and public speaking practice',
      priority: 'Medium',
      time: '1 hour weekly',
      color: 'bg-blue-50 border-blue-200 text-blue-700'
    }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" onClick={onClose} className="p-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h2 className="text-xl font-bold text-slate-800">Interview Analysis</h2>
            <p className="text-sm text-slate-600">Technical Interview • 30 minutes</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Report
          </Button>
        </div>
      </div>

      {/* Overall Score */}
      <Card className="border-2 border-green-200 bg-green-50">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <div className="relative inline-flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-8 border-green-200 flex items-center justify-center bg-white">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">{overallScore}</div>
                  <div className="text-sm text-green-600">Overall Score</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Excellent Performance! 🎉</h3>
              <p className="text-green-700">
                You've shown strong technical skills and communication abilities. 
                Ready for most technical interviews.
              </p>
            </div>

            <div className="flex items-center justify-center space-x-6">
              <div className="text-center">
                <Award className="w-6 h-6 text-yellow-500 mx-auto mb-1" />
                <div className="text-sm font-medium">Top 15%</div>
                <div className="text-xs text-slate-500">Percentile</div>
              </div>
              <div className="text-center">
                <Star className="w-6 h-6 text-purple-500 mx-auto mb-1" />
                <div className="text-sm font-medium">4.2/5</div>
                <div className="text-xs text-slate-500">Industry Avg</div>
              </div>
              <div className="text-center">
                <TrendingUp className="w-6 h-6 text-blue-500 mx-auto mb-1" />
                <div className="text-sm font-medium">+18%</div>
                <div className="text-xs text-slate-500">Improvement</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Analysis Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="action">Action Plan</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          {/* Skill Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-blue-500" />
                <span>Skill Breakdown</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(skillScores).map(([skill, score]) => (
                <div key={skill} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium capitalize">
                      {skill.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="text-sm font-bold text-slate-700">{score}%</span>
                  </div>
                  <Progress value={score} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Strengths */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-green-700">
                <CheckCircle className="w-5 h-5" />
                <span>Key Strengths</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <div>
                      <div className="font-medium text-green-800">{strength.skill}</div>
                      <div className="text-sm text-green-600">Score: {strength.score}%</div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      {strength.improvement}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Skill Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Communication */}
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-blue-500" />
                  <span>Communication Skills</span>
                  <Badge variant="secondary">{skillScores.communication}%</Badge>
                </h4>
                <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Clear articulation and structure</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Good use of technical terminology</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                    <span className="text-sm">Could improve pacing in complex explanations</span>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-purple-500" />
                  <span>Technical Knowledge</span>
                  <Badge variant="secondary">{skillScores.technical}%</Badge>
                </h4>
                <div className="bg-purple-50 p-4 rounded-lg space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Strong fundamentals in React and JavaScript</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                    <span className="text-sm">Database optimization concepts need improvement</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                    <span className="text-sm">System design patterns could be stronger</span>
                  </div>
                </div>
              </div>

              {/* Behavioral */}
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center space-x-2">
                  <Target className="w-5 h-5 text-green-500" />
                  <span>Behavioral Response</span>
                  <Badge variant="secondary">{skillScores.behavioral}%</Badge>
                </h4>
                <div className="bg-green-50 p-4 rounded-lg space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Excellent STAR method usage</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Strong leadership examples</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Good cultural fit responses</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Real-time Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Eye className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-700">{skillScores.eyeContact}%</div>
                  <div className="text-sm text-blue-600">Eye Contact</div>
                  <div className="text-xs text-slate-500 mt-1">Maintained good eye contact throughout</div>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Mic className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-700">{skillScores.confidence}%</div>
                  <div className="text-sm text-green-600">Voice Confidence</div>
                  <div className="text-xs text-slate-500 mt-1">Clear and confident tone</div>
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h4 className="font-medium text-orange-800 mb-2">Speech Pattern Analysis</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Speaking Pace</span>
                    <span className="text-sm font-medium">{skillScores.speechPace}% optimal</span>
                  </div>
                  <Progress value={skillScores.speechPace} className="h-2" />
                  <p className="text-xs text-orange-700">
                    Try to slow down slightly during technical explanations for better clarity.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="action" className="space-y-4">
          {/* Areas for Improvement */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-orange-500" />
                <span>Priority Improvements</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {improvements.map((item, index) => (
                <div key={index} className="p-4 border border-slate-200 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-slate-800">{item.area}</h4>
                    <Badge variant="outline">{item.gap} point gap</Badge>
                  </div>
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Current: {item.current}%</span>
                        <span>Target: {item.target}%</span>
                      </div>
                      <Progress value={(item.current / item.target) * 100} className="h-2" />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="w-5 h-5 text-purple-500" />
                <span>Personalized Recommendations</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recommendations.map((rec, index) => (
                <Card key={index} className={`border-2 ${rec.color.split(' ')[1]} ${rec.color.split(' ')[0]}`}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className={`font-medium ${rec.color.split(' ')[2]}`}>{rec.title}</h4>
                      <Badge variant="outline" className="text-xs">{rec.priority}</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">{rec.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <BookOpen className="w-4 h-4 text-slate-500" />
                        <span className="text-sm text-slate-500">{rec.time}</span>
                      </div>
                      <Button size="sm" variant="outline">
                        Start Learning
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardContent className="p-4">
              <h4 className="font-semibold text-blue-800 mb-3">Your Next Steps</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <span className="text-sm">Complete the SQL practice module (2-3 hours)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <span className="text-sm">Schedule another mock interview in 1 week</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <span className="text-sm">Practice system design fundamentals</span>
                </div>
              </div>
              
              <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                Schedule Next Practice Session
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
