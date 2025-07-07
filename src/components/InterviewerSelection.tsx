
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play, Star, User, Briefcase, Code, Users } from 'lucide-react';

interface InterviewerSelectionProps {
  onSelect: () => void;
  onClose: () => void;
}

export const InterviewerSelection = ({ onSelect, onClose }: InterviewerSelectionProps) => {
  const interviewers = [
    {
      id: 'priya',
      name: 'Priya Sharma',
      role: 'Friendly HR Manager',
      personality: 'Warm and encouraging, builds confidence',
      avatar: '👩‍💼',
      specialty: 'Behavioral & Cultural Fit',
      experience: '8+ years',
      rating: 4.8,
      description: 'Perfect for first-time interviews and confidence building',
      color: 'bg-green-50 border-green-200',
      accent: 'text-green-700'
    },
    {
      id: 'arjun',
      name: 'Arjun Patel',
      role: 'Technical Lead',
      personality: 'Deep technical focus, problem-solving oriented',
      avatar: '👨‍💻',
      specialty: 'Technical & System Design',
      experience: '10+ years',
      rating: 4.9,
      description: 'Ideal for software engineering and technical roles',
      color: 'bg-blue-50 border-blue-200',
      accent: 'text-blue-700'
    },
    {
      id: 'meera',
      name: 'Meera Gupta',
      role: 'Senior Manager',
      personality: 'Strategic thinking, leadership assessment',
      avatar: '👩‍💼',
      specialty: 'Leadership & Strategy',
      experience: '12+ years',
      rating: 4.7,
      description: 'Best for managerial and senior positions',
      color: 'bg-purple-50 border-purple-200',
      accent: 'text-purple-700'
    },
    {
      id: 'rajesh',
      name: 'Rajesh Kumar',
      role: 'Stress Interviewer',
      personality: 'Pressure situations, quick thinking challenges',
      avatar: '👨‍💼',
      specialty: 'High-Pressure Scenarios',
      experience: '15+ years',
      rating: 4.6,
      description: 'For advanced preparation and stress testing',
      color: 'bg-orange-50 border-orange-200',
      accent: 'text-orange-700'
    }
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <Button variant="ghost" size="sm" onClick={onClose} className="p-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h2 className="text-xl font-bold text-slate-800">Choose Your AI Interviewer</h2>
          <p className="text-sm text-slate-600">Select the interviewer that matches your needs</p>
        </div>
      </div>

      {/* Interviewer Cards */}
      <div className="space-y-4">
        {interviewers.map((interviewer) => (
          <Card key={interviewer.id} 
                className={`border-2 ${interviewer.color} hover:shadow-lg transition-all duration-200 cursor-pointer`}
                onClick={onSelect}>
            <CardHeader className="pb-3">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl border-2 border-slate-200">
                  {interviewer.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <CardTitle className={`text-lg ${interviewer.accent}`}>
                      {interviewer.name}
                    </CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{interviewer.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {interviewer.role}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {interviewer.experience}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{interviewer.personality}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-slate-700 mb-1">Specialty</div>
                  <div className={`text-sm ${interviewer.accent} font-medium`}>
                    {interviewer.specialty}
                  </div>
                </div>
                
                <div className="bg-white/80 rounded-lg p-3 border border-slate-200">
                  <p className="text-sm text-slate-600">{interviewer.description}</p>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-2 text-sm text-slate-500">
                    <User className="w-4 h-4" />
                    <span>AI-Powered Interviewer</span>
                  </div>
                  <Button 
                    className={`${interviewer.accent.replace('text-', 'bg-').replace('-700', '-600')} hover:opacity-90 text-white`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelect();
                    }}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Select
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Interview Settings Preview */}
      <Card className="border-2 border-slate-200 bg-slate-50">
        <CardContent className="p-4">
          <div className="text-center space-y-2">
            <h4 className="font-medium text-slate-800">Interview Settings</h4>
            <div className="flex items-center justify-center space-x-4 text-sm text-slate-600">
              <div className="flex items-center space-x-1">
                <Briefcase className="w-4 h-4" />
                <span>IT Industry</span>
              </div>
              <div className="flex items-center space-x-1">
                <Badge variant="outline" className="text-xs">30 min</Badge>
              </div>
              <div className="flex items-center space-x-1">
                <Badge variant="outline" className="text-xs">Intermediate</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
