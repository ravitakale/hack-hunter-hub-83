import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarProvider } from "@/components/ui/sidebar";
import { OrganizationSidebar } from "@/components/OrganizationSidebar";
import { OrganizationNavbar } from "@/components/OrganizationNavbar";
import { 
  TrendingUp,
  TrendingDown,
  DollarSign,
  FileText,
  Users,
  Clock,
  AlertTriangle,
  CheckCircle,
  Target
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from "recharts";

const reportsOverTime = [
  { month: 'Jan', reports: 12, resolved: 8, critical: 2, high: 4, medium: 4, low: 2 },
  { month: 'Feb', reports: 18, resolved: 14, critical: 3, high: 6, medium: 6, low: 3 },
  { month: 'Mar', reports: 22, resolved: 18, critical: 4, high: 8, medium: 7, low: 3 },
  { month: 'Apr', reports: 28, resolved: 24, critical: 5, high: 10, medium: 9, low: 4 },
  { month: 'May', reports: 32, resolved: 26, critical: 6, high: 12, medium: 10, low: 4 },
  { month: 'Jun', reports: 26, resolved: 22, critical: 4, high: 9, medium: 9, low: 4 },
];

const severityDistribution = [
  { name: 'Critical', value: 24, color: '#ef4444' },
  { name: 'High', value: 49, color: '#f97316' },
  { name: 'Medium', value: 45, color: '#eab308' },
  { name: 'Low', value: 20, color: '#22c55e' },
];

const rewardsPaid = [
  { month: 'Jan', amount: 2400 },
  { month: 'Feb', amount: 3200 },
  { month: 'Mar', amount: 4100 },
  { month: 'Apr', amount: 5200 },
  { month: 'May', amount: 4800 },
  { month: 'Jun', amount: 3900 },
];

const topResearchers = [
  { name: 'Alice Johnson', reports: 24, earnings: 8900 },
  { name: 'John Doe', reports: 18, earnings: 6200 },
  { name: 'Jane Smith', reports: 16, earnings: 5800 },
  { name: 'Bob Wilson', reports: 14, earnings: 4200 },
  { name: 'Charlie Brown', reports: 10, earnings: 2800 },
];

const resolutionTime = [
  { timeRange: '< 1 day', count: 28 },
  { timeRange: '1-3 days', count: 45 },
  { timeRange: '4-7 days', count: 32 },
  { timeRange: '1-2 weeks', count: 18 },
  { timeRange: '> 2 weeks', count: 12 },
];

export default function OrganizationAnalytics() {
  const totalReports = reportsOverTime.reduce((sum, month) => sum + month.reports, 0);
  const totalResolved = reportsOverTime.reduce((sum, month) => sum + month.resolved, 0);
  const totalRewards = rewardsPaid.reduce((sum, month) => sum + month.amount, 0);
  const resolutionRate = ((totalResolved / totalReports) * 100).toFixed(1);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <OrganizationSidebar />
        
        <div className="flex-1 flex flex-col">
          <OrganizationNavbar />
          
          <main className="flex-1 p-6">
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h1 className="text-3xl font-bold">Analytics</h1>
                <p className="text-muted-foreground">
                  Track performance and insights for your bug bounty programs
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{totalReports}</div>
                    <div className="flex items-center text-xs text-green-600">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +12% from last month
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{resolutionRate}%</div>
                    <div className="flex items-center text-xs text-green-600">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +5% from last month
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Rewards</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${totalRewards.toLocaleString()}</div>
                    <div className="flex items-center text-xs text-red-600">
                      <TrendingDown className="h-3 w-3 mr-1" />
                      -8% from last month
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Avg Resolution Time</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3.2 days</div>
                    <div className="flex items-center text-xs text-green-600">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      -15% faster
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Reports Over Time */}
                <Card>
                  <CardHeader>
                    <CardTitle>Reports Over Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={reportsOverTime}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area 
                          type="monotone" 
                          dataKey="reports" 
                          stroke="#8884d8" 
                          fill="#8884d8" 
                          fillOpacity={0.6}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="resolved" 
                          stroke="#82ca9d" 
                          fill="#82ca9d" 
                          fillOpacity={0.6}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Severity Distribution */}
                <Card>
                  <CardHeader>
                    <CardTitle>Severity Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={severityDistribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {severityDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Rewards Paid */}
                <Card>
                  <CardHeader>
                    <CardTitle>Rewards Paid</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={rewardsPaid}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                        <Bar dataKey="amount" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Resolution Time Distribution */}
                <Card>
                  <CardHeader>
                    <CardTitle>Resolution Time Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={resolutionTime} layout="horizontal">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="timeRange" type="category" width={80} />
                        <Tooltip />
                        <Bar dataKey="count" fill="#82ca9d" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Top Researchers Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Top Researchers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topResearchers.map((researcher, index) => (
                      <div key={researcher.name} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-medium">{researcher.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {researcher.reports} reports submitted
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">${researcher.earnings.toLocaleString()}</p>
                          <p className="text-sm text-muted-foreground">Total earnings</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Performance Insights */}
              <Card>
                <CardHeader>
                  <CardTitle>Performance Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                        <TrendingUp className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Improved Response Time</h4>
                        <p className="text-sm text-muted-foreground">
                          Average response time decreased by 15% this month
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                        <Target className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Quality Reports</h4>
                        <p className="text-sm text-muted-foreground">
                          92% of reports are valid, above industry average
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                        <AlertTriangle className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Critical Issues</h4>
                        <p className="text-sm text-muted-foreground">
                          24 critical vulnerabilities found and patched
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}