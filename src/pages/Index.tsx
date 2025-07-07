
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  Video, 
  BarChart3, 
  User, 
  Target, 
  Calendar, 
  Award,
  TrendingUp,
  Camera,
  Mic,
  Brain,
  Briefcase,
  Building,
  Code,
  Users,
  Star,
  Clock,
  CheckCircle,
  Zap
} from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Dashboard } from '@/components/Dashboard';
import { PracticeMode } from '@/components/PracticeMode';
import { LiveInterview } from '@/components/LiveInterview';
import { ProgressView } from '@/components/ProgressView';
import { ProfileView } from '@/components/ProfileView';
import { InterviewerSelection } from '@/components/InterviewerSelection';
import { InterviewAnalysis } from '@/components/InterviewAnalysis';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showInterviewerSelection, setShowInterviewerSelection] = useState(false);
  const [showLiveInterview, setShowLiveInterview] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const renderContent = () => {
    if (showAnalysis) {
      return <InterviewAnalysis onClose={() => setShowAnalysis(false)} />;
    }
    
    if (showLiveInterview) {
      return <LiveInterview onComplete={() => {
        setShowLiveInterview(false);
        setShowAnalysis(true);
      }} onClose={() => setShowLiveInterview(false)} />;
    }
    
    if (showInterviewerSelection) {
      return <InterviewerSelection 
        onSelect={() => {
          setShowInterviewerSelection(false);
          setShowLiveInterview(true);
        }}
        onClose={() => setShowInterviewerSelection(false)}
      />;
    }

    switch (activeTab) {
      case 'home':
        return <Dashboard onStartPractice={() => setShowInterviewerSelection(true)} />;
      case 'practice':
        return <PracticeMode onStartInterview={() => setShowInterviewerSelection(true)} />;
      case 'live':
        return <LiveInterview onComplete={() => setShowAnalysis(true)} onClose={() => setActiveTab('home')} />;
      case 'progress':
        return <ProgressView />;
      case 'profile':
        return <ProfileView />;
      default:
        return <Dashboard onStartPractice={() => setShowInterviewerSelection(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                InterviewAI Pro
              </h1>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
              Premium
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto pb-20">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
