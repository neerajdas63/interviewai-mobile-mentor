
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  User, 
  Settings, 
  Bell, 
  Shield, 
  Award, 
  FileText,
  HelpCircle,
  LogOut,
  Edit,
  ChevronRight,
  Crown,
  Calendar,
  BarChart3,
  Target
} from 'lucide-react';

export const ProfileView = () => {
  const userStats = {
    totalInterviews: 53,
    averageScore: 87,
    currentStreak: 5,
    achievements: 12
  };

  const menuItems = [
    { icon: User, label: 'Edit Profile', description: 'Update your personal information', hasChevron: true },
    { icon: FileText, label: 'Resume Analysis', description: 'Get AI feedback on your resume', hasChevron: true },
    { icon: Bell, label: 'Notifications', description: 'Manage your notification preferences', hasChevron: true },
    { icon: Shield, label: 'Privacy & Security', description: 'Control your data and privacy', hasChevron: true },
    { icon: HelpCircle, label: 'Help & Support', description: 'Get help and contact support', hasChevron: true },
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Profile Header */}
      <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              P
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h2 className="text-xl font-bold text-slate-800">Priya Sharma</h2>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 border-yellow-200">
                  <Crown className="w-3 h-3 mr-1" />
                  Pro
                </Badge>
              </div>
              <p className="text-slate-600 text-sm mb-2">Software Developer • 3 years exp</p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span className="text-slate-600">Joined Jan 2024</span>
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4 mt-4">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-700">{userStats.totalInterviews}</div>
              <div className="text-xs text-slate-600">Interviews</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-700">{userStats.averageScore}%</div>
              <div className="text-xs text-slate-600">Avg Score</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-orange-700">{userStats.currentStreak}</div>
              <div className="text-xs text-slate-600">Day Streak</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-700">{userStats.achievements}</div>
              <div className="text-xs text-slate-600">Badges</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Subscription Status */}
      <Card className="border-2 border-yellow-200 bg-yellow-50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-yellow-800">Premium Plan</div>
                <div className="text-sm text-yellow-700">Unlimited interviews • Advanced analytics</div>
              </div>
            </div>
            <Button variant="outline" size="sm" className="border-yellow-300 text-yellow-700 hover:bg-yellow-100">
              Manage
            </Button>
          </div>
          
          <div className="mt-3 p-3 bg-yellow-100 rounded-lg">
            <div className="flex justify-between items-center text-sm">
              <span className="text-yellow-700">Next billing: April 15, 2024</span>
              <Badge variant="secondary" className="bg-yellow-200 text-yellow-800">
                ₹399/month
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Menu Items */}
      <div className="space-y-2">
        {menuItems.map((item, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-800">{item.label}</div>
                    <div className="text-sm text-slate-600">{item.description}</div>
                  </div>
                </div>
                {item.hasChevron && <ChevronRight className="w-5 h-5 text-slate-400" />}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-yellow-500" />
            <span>Recent Achievements</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="text-2xl">🏆</div>
            <div className="flex-1">
              <div className="font-medium text-green-800">Technical Master</div>
              <div className="text-sm text-green-600">Completed 10 technical interviews</div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-700">New</Badge>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-2xl">🎯</div>
            <div className="flex-1">
              <div className="font-medium text-blue-800">Consistency Pro</div>
              <div className="text-sm text-blue-600">5-day practice streak</div>
            </div>
            <Badge variant="outline">Earned</Badge>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="text-2xl">⭐</div>
            <div className="flex-1">
              <div className="font-medium text-purple-800">High Scorer</div>
              <div className="text-sm text-purple-600">Scored 90+ in 3 interviews</div>
            </div>
            <Badge variant="outline">Earned</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Quick Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-slate-800">Push Notifications</div>
              <div className="text-sm text-slate-600">Get notified about practice reminders</div>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-slate-800">Email Reports</div>
              <div className="text-sm text-slate-600">Weekly progress reports via email</div>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-slate-800">Auto-record Sessions</div>
              <div className="text-sm text-slate-600">Automatically record interview sessions</div>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Sign Out */}
      <Card className="border-2 border-red-200 bg-red-50">
        <CardContent className="p-4">
          <Button variant="ghost" className="w-full text-red-700 hover:bg-red-100">
            <LogOut className="w-5 h-5 mr-2" />
            Sign Out
          </Button>
        </CardContent>
      </Card>

      {/* App Version */}
      <div className="text-center text-sm text-slate-500 pb-4">
        InterviewAI Pro v2.1.0
      </div>
    </div>
  );
};
