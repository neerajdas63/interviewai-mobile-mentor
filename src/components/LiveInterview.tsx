
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Mic, 
  MicOff, 
  Camera, 
  CameraOff, 
  Pause, 
  Square,
  ArrowLeft,
  Volume2,
  Eye,
  Brain,
  Clock,
  TrendingUp
} from 'lucide-react';

interface LiveInterviewProps {
  onComplete: () => void;
  onClose: () => void;
}

export const LiveInterview = ({ onComplete, onClose }: LiveInterviewProps) => {
  const [isRecording, setIsRecording] = useState(true);
  const [micEnabled, setMicEnabled] = useState(true);
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [confidence, setConfidence] = useState(78);
  const [eyeContact, setEyeContact] = useState(85);
  const [speechPace, setSpeechPace] = useState(72);

  // Mock interview progress
  useEffect(() => {
    if (isRecording) {
      const timer = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
        // Simulate real-time feedback changes
        setConfidence(prev => prev + Math.random() * 4 - 2);
        setEyeContact(prev => Math.max(0, Math.min(100, prev + Math.random() * 6 - 3)));
        setSpeechPace(prev => Math.max(0, Math.min(100, prev + Math.random() * 8 - 4)));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRecording]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const questions = [
    "Tell me about yourself and your background.",
    "What interests you most about this role?",
    "Describe a challenging project you've worked on.",
    "How do you handle pressure and deadlines?",
    "Where do you see yourself in 5 years?"
  ];

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Header Controls */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-black/50 backdrop-blur-sm">
        <div className="flex items-center justify-between p-4">
          <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center space-x-4 text-white">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">LIVE</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-mono">{formatTime(timeElapsed)}</span>
            </div>
          </div>

          <div className="text-white text-sm">
            Question {currentQuestion}/5
          </div>
        </div>
      </div>

      {/* AI Interviewer Section */}
      <div className="h-3/5 bg-gradient-to-br from-blue-900 to-purple-900 relative flex items-center justify-center">
        <div className="text-center space-y-4">
          {/* AI Avatar */}
          <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto border-4 border-white/30">
            <div className="text-6xl">👩‍💼</div>
          </div>
          
          {/* AI Interviewer Info */}
          <div className="text-white space-y-2">
            <h3 className="text-xl font-semibold">Priya Sharma</h3>
            <p className="text-blue-200">HR Manager • Friendly Interview Style</p>
          </div>

          {/* Current Question */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-md mx-4">
            <CardContent className="p-4">
              <p className="text-white text-center">
                "{questions[currentQuestion - 1]}"
              </p>
            </CardContent>
          </Card>

          {/* Speaking Indicator */}
          <div className="flex items-center justify-center space-x-2">
            <Volume2 className="w-5 h-5 text-green-400" />
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i}
                  className={`w-1 h-8 bg-green-400 rounded-full ${
                    i <= 3 ? 'animate-pulse' : 'opacity-30'
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* User Video Section */}
      <div className="h-2/5 bg-slate-800 relative flex items-center justify-center">
        {cameraEnabled ? (
          <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="w-24 h-24 bg-slate-600 rounded-full flex items-center justify-center">
                <div className="text-4xl">🧑‍💻</div>
              </div>
              <p className="text-white text-sm">You</p>
              
              {/* Real-time feedback indicators */}
              <div className="flex items-center justify-center space-x-4 mt-4">
                <div className="text-center">
                  <Eye className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                  <div className="text-xs text-blue-400">{Math.round(eyeContact)}%</div>
                  <div className="text-xs text-slate-400">Eye Contact</div>
                </div>
                <div className="text-center">
                  <Brain className="w-5 h-5 text-green-400 mx-auto mb-1" />
                  <div className="text-xs text-green-400">{Math.round(confidence)}%</div>
                  <div className="text-xs text-slate-400">Confidence</div>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                  <div className="text-xs text-purple-400">{Math.round(speechPace)}%</div>
                  <div className="text-xs text-slate-400">Speech Pace</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full bg-slate-700 flex items-center justify-center">
            <div className="text-center space-y-2">
              <CameraOff className="w-16 h-16 text-slate-500 mx-auto" />
              <p className="text-slate-400">Camera is off</p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4">
        <div className="flex items-center justify-center space-x-6">
          <Button
            variant={micEnabled ? "default" : "destructive"}
            size="lg"
            className="w-14 h-14 rounded-full"
            onClick={() => setMicEnabled(!micEnabled)}
          >
            {micEnabled ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
          </Button>
          
          <Button
            variant={cameraEnabled ? "default" : "destructive"}
            size="lg"
            className="w-14 h-14 rounded-full"
            onClick={() => setCameraEnabled(!cameraEnabled)}
          >
            {cameraEnabled ? <Camera className="w-6 h-6" /> : <CameraOff className="w-6 h-6" />}
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="w-14 h-14 rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20"
            onClick={() => setIsRecording(!isRecording)}
          >
            <Pause className="w-6 h-6" />
          </Button>
          
          <Button
            variant="destructive"
            size="lg"
            className="w-14 h-14 rounded-full"
            onClick={onComplete}
          >
            <Square className="w-6 h-6" />
          </Button>
        </div>
        
        {/* Interview Progress */}
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-white text-sm">
            <span>Interview Progress</span>
            <span>{currentQuestion}/5 Questions</span>
          </div>
          <Progress value={(currentQuestion / 5) * 100} className="h-2" />
        </div>
      </div>

      {/* Real-time Feedback Panel (Swipe up to reveal) */}
      <div className="absolute bottom-20 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-green-400 font-bold text-lg">{Math.round(confidence)}%</div>
            <div className="text-xs text-slate-300">Confidence</div>
          </div>
          <div>
            <div className="text-blue-400 font-bold text-lg">{Math.round(eyeContact)}%</div>
            <div className="text-xs text-slate-300">Eye Contact</div>
          </div>
          <div>
            <div className="text-purple-400 font-bold text-lg">{Math.round(speechPace)}%</div>
            <div className="text-xs text-slate-300">Speech Pace</div>
          </div>
        </div>
      </div>
    </div>
  );
};
