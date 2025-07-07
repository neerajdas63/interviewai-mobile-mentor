
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Building, 
  Briefcase, 
  Users,
  Clock,
  Star,
  Play,
  Settings,
  Target,
  TrendingUp
} from 'lucide-react';

interface PracticeModeProps {
  onStartInterview: () => void;
}

export const PracticeMode = ({ onStartInterview }: PracticeModeProps) => {
  const industryModules = [
    {
      id: 'it',
      title: 'IT & Software',
      icon: Code,
      description: 'Technical interviews, coding challenges, system design',
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700',
      questions: 250,
      difficulty: 'All Levels'
    },
    {
      id: 'banking',
      title: 'Banking & Finance',
      icon: Building,
      description: 'Financial analysis, risk assessment, customer scenarios',
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-700',
      questions: 180,
      difficulty: 'Intermediate'
    },
    {
      id: 'government',
      title: 'Government Jobs',
      icon: Briefcase,
      description: 'Current affairs, ethics, administrative scenarios',
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-700',
      questions: 320,
      difficulty: 'All Levels'
    },
    {
      id: 'hr',
      title: 'HR & Management',
      icon: Users,
      description: 'Leadership, people management, organizational behavior',
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-700',
      questions: 150,
      difficulty: 'Advanced'
    }
  ];

  const practiceTypes = [
    {
      title: 'Quick Practice',
      description: '15-minute focused session',
      icon: Clock,
      time: '15 min',
      color: 'bg-green-500'
    },
    {
      title: 'Skill Assessment',
      description: 'Comprehensive evaluation',
      icon: Target,
      time: '45 min',
      color: 'bg-blue-500'
    },
    {
      title: 'Mock Interview',
      description: 'Full interview simulation',
      icon: Star,
      time: '60 min',
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-slate-800">Practice Mode</h2>
        <p className="text-slate-600">Choose your industry and start practicing</p>
      </div>

      {/* Practice Types */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-800">Quick Start</h3>
        <div className="grid grid-cols-1 gap-3">
          {practiceTypes.map((type, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-200 cursor-pointer"
                  onClick={onStartInterview}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${type.color} rounded-xl flex items-center justify-center`}>
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{type.title}</h4>
                      <p className="text-sm text-slate-600">{type.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary">{type.time}</Badge>
                    <Play className="w-5 h-5 text-slate-400 mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Industry Modules */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-800">Industry Modules</h3>
        <div className="grid grid-cols-1 gap-4">
          {industryModules.map((module) => (
            <Card key={module.id} 
                  className={`border-2 ${module.borderColor} ${module.bgColor} hover:shadow-lg transition-all duration-200 cursor-pointer`}
                  onClick={onStartInterview}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${module.color} rounded-xl flex items-center justify-center`}>
                      <module.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className={`text-lg ${module.textColor}`}>{module.title}</CardTitle>
                      <CardDescription className="text-sm">{module.description}</CardDescription>
                    </div>
                  </div>
                  <Play className={`w-5 h-5 ${module.textColor}`} />
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className={`text-lg font-bold ${module.textColor}`}>{module.questions}</div>
                      <div className="text-xs text-slate-500">Questions</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-sm font-medium ${module.textColor}`}>{module.difficulty}</div>
                      <div className="text-xs text-slate-500">Difficulty</div>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    className={`${module.color} hover:opacity-90 text-white`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onStartInterview();
                    }}
                  >
                    Start
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Practice */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <span>Recent Practice</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-slate-100">
            <div>
              <div className="font-medium text-sm">Technical Interview - React</div>
              <div className="text-xs text-slate-500">Yesterday, 30 min</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-green-600">85%</div>
              <div className="text-xs text-slate-500">Score</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between py-2 border-b border-slate-100">
            <div>
              <div className="font-medium text-sm">Banking - Customer Service</div>
              <div className="text-xs text-slate-500">2 days ago, 45 min</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-blue-600">78%</div>
              <div className="text-xs text-slate-500">Score</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between py-2">
            <div>
              <div className="font-medium text-sm">HR - Leadership Scenarios</div>
              <div className="text-xs text-slate-500">3 days ago, 60 min</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-purple-600">92%</div>
              <div className="text-xs text-slate-500">Score</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
