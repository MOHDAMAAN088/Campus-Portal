"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  MapPin,
  Calendar,
  Clock,
  Star,
  TrendingUp,
  BookOpen,
  Award,
  Send,
  Eye,
  Filter,
  Bell,
  Settings,
  GraduationCap,
  Building2,
  DollarSign,
  Target,
  ExternalLink,
} from "lucide-react"
import { Input } from "@/components/ui/input"

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")

  // Mock data
  const studentProfile = {
    name: "Alex Johnson",
    email: "alex.johnson@university.edu",
    university: "Tech University",
    branch: "Computer Science Engineering",
    year: "4th Year",
    cgpa: "8.5",
    avatar: "/diverse-student-profiles.png",
    skills: ["React", "Node.js", "Python", "Machine Learning", "SQL"],
    badges: ["Problem Solver", "Team Player", "Innovation Award"],
  }

  const recommendedJobs = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechCorp Solutions",
      location: "Bangalore, India",
      type: "Internship",
      duration: "6 months",
      stipend: "₹25,000/month",
      matchScore: 95,
      skills: ["React", "JavaScript", "CSS"],
      description: "Build modern web applications using React and TypeScript",
      posted: "2 days ago",
      applicants: 45,
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "InnovateLabs",
      location: "Hyderabad, India",
      type: "Full-time",
      duration: "Permanent",
      stipend: "₹8,00,000/year",
      matchScore: 88,
      skills: ["Python", "Django", "PostgreSQL"],
      description: "Develop scalable backend systems and APIs",
      posted: "1 week ago",
      applicants: 78,
    },
    {
      id: 3,
      title: "ML Engineer Intern",
      company: "DataVision AI",
      location: "Mumbai, India",
      type: "Internship",
      duration: "4 months",
      stipend: "₹30,000/month",
      matchScore: 82,
      skills: ["Python", "TensorFlow", "Machine Learning"],
      description: "Work on cutting-edge AI projects and model development",
      posted: "3 days ago",
      applicants: 32,
    },
  ]

  const skillGaps = [
    {
      skill: "Docker",
      importance: "High",
      demandScore: 85,
      learningPath: "DevOps Fundamentals Course",
      estimatedTime: "2 weeks",
    },
    {
      skill: "AWS",
      importance: "High",
      demandScore: 90,
      learningPath: "Cloud Computing Certification",
      estimatedTime: "1 month",
    },
    {
      skill: "TypeScript",
      importance: "Medium",
      demandScore: 75,
      learningPath: "Advanced JavaScript Course",
      estimatedTime: "1 week",
    },
  ]

  const applications = [
    {
      id: 1,
      company: "TechCorp Solutions",
      position: "Frontend Developer Intern",
      status: "Under Review",
      appliedDate: "2025-01-15",
      nextStep: "Technical Interview",
      scheduledDate: "2025-01-22",
    },
    {
      id: 2,
      company: "StartupXYZ",
      position: "Full Stack Developer",
      status: "Interview Scheduled",
      appliedDate: "2025-01-10",
      nextStep: "HR Round",
      scheduledDate: "2025-01-20",
    },
    {
      id: 3,
      company: "DataVision AI",
      position: "ML Engineer Intern",
      status: "Shortlisted",
      appliedDate: "2025-01-12",
      nextStep: "Coding Assessment",
      scheduledDate: "2025-01-25",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Under Review":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "Interview Scheduled":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      case "Shortlisted":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">CampusConnect</span>
              <Badge variant="outline" className="text-xs">
                Student Portal
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src={studentProfile.avatar || "/placeholder.svg"} />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="glass-card">
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={studentProfile.avatar || "/placeholder.svg"} />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <CardTitle className="text-lg">{studentProfile.name}</CardTitle>
                <CardDescription>{studentProfile.branch}</CardDescription>
                <Badge variant="secondary" className="mt-2">
                  CGPA: {studentProfile.cgpa}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {studentProfile.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Achievements</h4>
                    <div className="space-y-1">
                      {studentProfile.badges.map((badge, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <Award className="w-3 h-3 text-accent mr-2" />
                          {badge}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="jobs">Smart Match</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="skills">Skill Gaps</TabsTrigger>
              </TabsList>

              {/* Dashboard Tab */}
              <TabsContent value="dashboard" className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="glass-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Applications</p>
                          <p className="text-2xl font-bold">12</p>
                        </div>
                        <Send className="w-8 h-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="glass-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Interviews</p>
                          <p className="text-2xl font-bold">3</p>
                        </div>
                        <Calendar className="w-8 h-8 text-accent" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="glass-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Match Score</p>
                          <p className="text-2xl font-bold">85%</p>
                        </div>
                        <Target className="w-8 h-8 text-green-500" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {applications.slice(0, 3).map((app) => (
                        <div key={app.id} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Building2 className="w-5 h-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">{app.position}</p>
                              <p className="text-sm text-muted-foreground">{app.company}</p>
                            </div>
                          </div>
                          <Badge className={getStatusColor(app.status)}>{app.status}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Smart Match Tab */}
              <TabsContent value="jobs" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Recommended for You</h2>
                  <div className="flex items-center space-x-2">
                    <Input placeholder="Search jobs..." className="w-64" />
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {recommendedJobs.map((job) => (
                    <Card key={job.id} className="glass-card hover:border-primary/50 transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="text-lg font-semibold">{job.title}</h3>
                              <Badge variant="outline" className="text-xs">
                                {job.type}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-2">{job.company}</p>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {job.location}
                              </div>
                              <div className="flex items-center">
                                <DollarSign className="w-4 h-4 mr-1" />
                                {job.stipend}
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {job.duration}
                              </div>
                            </div>
                            <p className="text-sm mb-3">{job.description}</p>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {job.skills.map((skill, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="text-right ml-4">
                            <div className="flex items-center mb-2">
                              <Star className="w-4 h-4 text-yellow-500 mr-1" />
                              <span className="font-bold text-lg">{job.matchScore}%</span>
                            </div>
                            <p className="text-xs text-muted-foreground">Match Score</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span>Posted {job.posted}</span>
                            <span>{job.applicants} applicants</span>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-1" />
                              View Details
                            </Button>
                            <Button size="sm">
                              <Send className="w-4 h-4 mr-1" />
                              Quick Apply
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Applications Tab */}
              <TabsContent value="applications" className="space-y-6">
                <h2 className="text-2xl font-bold">My Applications</h2>
                <div className="space-y-4">
                  {applications.map((app) => (
                    <Card key={app.id} className="glass-card">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold">{app.position}</h3>
                            <p className="text-muted-foreground">{app.company}</p>
                          </div>
                          <Badge className={getStatusColor(app.status)}>{app.status}</Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Applied Date</p>
                            <p className="font-medium">{app.appliedDate}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Next Step</p>
                            <p className="font-medium">{app.nextStep}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Scheduled Date</p>
                            <p className="font-medium">{app.scheduledDate}</p>
                          </div>
                        </div>
                        <div className="flex justify-end mt-4">
                          <Button variant="outline" size="sm">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Skill Gaps Tab */}
              <TabsContent value="skills" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Skill Gap Analysis</h2>
                  <Badge variant="secondary">AI-Powered Insights</Badge>
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Skills in High Demand
                    </CardTitle>
                    <CardDescription>Based on current job market trends and your profile</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {skillGaps.map((skill, index) => (
                        <div key={index} className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <h4 className="font-medium">{skill.skill}</h4>
                              <Badge
                                variant={skill.importance === "High" ? "destructive" : "secondary"}
                                className="text-xs"
                              >
                                {skill.importance} Priority
                              </Badge>
                            </div>
                            <span className="text-sm font-medium">{skill.demandScore}% demand</span>
                          </div>
                          <Progress value={skill.demandScore} className="h-2" />
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center text-muted-foreground">
                              <BookOpen className="w-4 h-4 mr-1" />
                              {skill.learningPath}
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Clock className="w-4 h-4 mr-1" />
                              {skill.estimatedTime}
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="w-full bg-transparent">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Start Learning Path
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
