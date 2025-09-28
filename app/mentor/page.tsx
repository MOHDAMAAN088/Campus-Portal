"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Users,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  Award,
  MessageSquare,
  FileText,
  Bell,
  Settings,
  GraduationCap,
  Star,
  Eye,
} from "lucide-react"

export default function MentorDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [selectedApplication, setSelectedApplication] = useState<number | null>(null)

  // Mock data
  const mentorProfile = {
    name: "Dr. Sarah Wilson",
    email: "sarah.wilson@university.edu",
    department: "Computer Science",
    experience: "12 years",
    studentsGuided: 45,
    avatar: "/mentor-profile.png",
    specializations: ["Software Engineering", "AI/ML", "Data Science"],
  }

  const pendingApplications = [
    {
      id: 1,
      student: {
        name: "Alex Johnson",
        email: "alex.johnson@university.edu",
        cgpa: "8.5",
        year: "4th Year",
        branch: "CSE",
        avatar: "/diverse-student-profiles.png",
      },
      position: "Frontend Developer Intern",
      company: "TechCorp Solutions",
      appliedDate: "2025-01-18",
      matchScore: 95,
      skills: ["React", "JavaScript", "CSS"],
      resume: "alex_johnson_resume.pdf",
      coverLetter: "I am passionate about frontend development and have built several projects using React...",
      status: "Pending Review",
    },
    {
      id: 2,
      student: {
        name: "Priya Sharma",
        email: "priya.sharma@university.edu",
        cgpa: "9.1",
        year: "3rd Year",
        branch: "CSE",
        avatar: "/diverse-student-profiles.png",
      },
      position: "Data Science Intern",
      company: "DataVision AI",
      appliedDate: "2025-01-17",
      matchScore: 88,
      skills: ["Python", "Machine Learning", "SQL"],
      resume: "priya_sharma_resume.pdf",
      coverLetter: "With a strong foundation in mathematics and programming, I am excited to apply my skills...",
      status: "Pending Review",
    },
    {
      id: 3,
      student: {
        name: "Rahul Kumar",
        email: "rahul.kumar@university.edu",
        cgpa: "8.2",
        year: "4th Year",
        branch: "CSE",
        avatar: "/diverse-student-profiles.png",
      },
      position: "Backend Developer",
      company: "InnovateLabs",
      appliedDate: "2025-01-16",
      matchScore: 82,
      skills: ["Node.js", "MongoDB", "Express"],
      resume: "rahul_kumar_resume.pdf",
      coverLetter: "I have experience building scalable backend systems and am eager to contribute...",
      status: "Pending Review",
    },
  ]

  const myStudents = [
    {
      id: 1,
      name: "Alex Johnson",
      branch: "CSE",
      year: "4th Year",
      cgpa: "8.5",
      applications: 5,
      interviews: 2,
      offers: 1,
      avatar: "/diverse-student-profiles.png",
      lastActivity: "Applied to TechCorp Solutions",
      progress: 75,
    },
    {
      id: 2,
      name: "Priya Sharma",
      branch: "CSE",
      year: "3rd Year",
      cgpa: "9.1",
      applications: 3,
      interviews: 1,
      offers: 0,
      avatar: "/diverse-student-profiles.png",
      lastActivity: "Interview scheduled with DataVision AI",
      progress: 60,
    },
    {
      id: 3,
      name: "Rahul Kumar",
      branch: "CSE",
      year: "4th Year",
      cgpa: "8.2",
      applications: 7,
      interviews: 3,
      offers: 2,
      avatar: "/diverse-student-profiles.png",
      lastActivity: "Offer received from InnovateLabs",
      progress: 90,
    },
  ]

  const handleApproval = (applicationId: number, approved: boolean) => {
    console.log(`Application ${applicationId} ${approved ? "approved" : "rejected"}`)
    // Handle approval/rejection logic
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "text-green-500"
    if (progress >= 60) return "text-yellow-500"
    return "text-red-500"
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
                Mentor Portal
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
                <AvatarImage src={mentorProfile.avatar || "/placeholder.svg"} />
                <AvatarFallback>SW</AvatarFallback>
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
                  <AvatarImage src={mentorProfile.avatar || "/placeholder.svg"} />
                  <AvatarFallback>SW</AvatarFallback>
                </Avatar>
                <CardTitle className="text-lg">{mentorProfile.name}</CardTitle>
                <CardDescription>{mentorProfile.department}</CardDescription>
                <Badge variant="secondary" className="mt-2">
                  {mentorProfile.experience} Experience
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Specializations</h4>
                    <div className="flex flex-wrap gap-1">
                      {mentorProfile.specializations.map((spec, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-center pt-4 border-t border-border/40">
                    <div className="text-2xl font-bold text-primary">{mentorProfile.studentsGuided}</div>
                    <div className="text-sm text-muted-foreground">Students Guided</div>
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
                <TabsTrigger value="approvals">Approvals</TabsTrigger>
                <TabsTrigger value="students">My Students</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              {/* Dashboard Tab */}
              <TabsContent value="dashboard" className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="glass-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Pending Reviews</p>
                          <p className="text-2xl font-bold">8</p>
                        </div>
                        <Clock className="w-8 h-8 text-yellow-500" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="glass-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Active Students</p>
                          <p className="text-2xl font-bold">15</p>
                        </div>
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="glass-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Approved Today</p>
                          <p className="text-2xl font-bold">5</p>
                        </div>
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="glass-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Success Rate</p>
                          <p className="text-2xl font-bold">92%</p>
                        </div>
                        <TrendingUp className="w-8 h-8 text-accent" />
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
                      {myStudents.slice(0, 3).map((student) => (
                        <div key={student.id} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={student.avatar || "/placeholder.svg"} />
                              <AvatarFallback>
                                {student.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{student.name}</p>
                              <p className="text-sm text-muted-foreground">{student.lastActivity}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`text-sm font-medium ${getProgressColor(student.progress)}`}>
                              {student.progress}% Complete
                            </div>
                            <Progress value={student.progress} className="w-20 h-2 mt-1" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Approvals Tab */}
              <TabsContent value="approvals" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Pending Approvals</h2>
                  <Badge variant="destructive" className="text-xs">
                    {pendingApplications.length} Pending
                  </Badge>
                </div>

                <div className="space-y-4">
                  {pendingApplications.map((application) => (
                    <Card key={application.id} className="glass-card">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-4">
                            <Avatar className="w-12 h-12">
                              <AvatarImage src={application.student.avatar || "/placeholder.svg"} />
                              <AvatarFallback>
                                {application.student.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold">{application.student.name}</h3>
                              <p className="text-muted-foreground text-sm">
                                {application.student.branch} • {application.student.year} • CGPA:{" "}
                                {application.student.cgpa}
                              </p>
                              <div className="mt-2">
                                <p className="font-medium">{application.position}</p>
                                <p className="text-sm text-muted-foreground">{application.company}</p>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center mb-2">
                              <Star className="w-4 h-4 text-yellow-500 mr-1" />
                              <span className="font-bold">{application.matchScore}%</span>
                            </div>
                            <p className="text-xs text-muted-foreground">Match Score</p>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Required Skills</h4>
                          <div className="flex flex-wrap gap-1">
                            {application.skills.map((skill, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Cover Letter</h4>
                          <p className="text-sm text-muted-foreground bg-muted/20 p-3 rounded-lg">
                            {application.coverLetter}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span>Applied: {application.appliedDate}</span>
                            <Button variant="ghost" size="sm" className="h-auto p-0">
                              <FileText className="w-4 h-4 mr-1" />
                              View Resume
                            </Button>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleApproval(application.id, false)}
                              className="text-red-500 border-red-500/20 hover:bg-red-500/10"
                            >
                              <XCircle className="w-4 h-4 mr-1" />
                              Reject
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => handleApproval(application.id, true)}
                              className="bg-green-500 hover:bg-green-600 text-white"
                            >
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Approve
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* My Students Tab */}
              <TabsContent value="students" className="space-y-6">
                <h2 className="text-2xl font-bold">My Students</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {myStudents.map((student) => (
                    <Card key={student.id} className="glass-card">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4 mb-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={student.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {student.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="font-semibold">{student.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {student.branch} • {student.year} • CGPA: {student.cgpa}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                          <div>
                            <div className="text-lg font-bold text-primary">{student.applications}</div>
                            <div className="text-xs text-muted-foreground">Applications</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-accent">{student.interviews}</div>
                            <div className="text-xs text-muted-foreground">Interviews</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-green-500">{student.offers}</div>
                            <div className="text-xs text-muted-foreground">Offers</div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Progress</span>
                            <span className={`text-sm font-medium ${getProgressColor(student.progress)}`}>
                              {student.progress}%
                            </span>
                          </div>
                          <Progress value={student.progress} className="h-2" />
                        </div>

                        <p className="text-sm text-muted-foreground mb-4">{student.lastActivity}</p>

                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            <MessageSquare className="w-4 h-4 mr-1" />
                            Message
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            <Eye className="w-4 h-4 mr-1" />
                            View Profile
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Analytics Tab */}
              <TabsContent value="analytics" className="space-y-6">
                <h2 className="text-2xl font-bold">Mentorship Analytics</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Award className="w-5 h-5 mr-2" />
                        Success Metrics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Placement Success Rate</span>
                          <span className="font-bold text-green-500">92%</span>
                        </div>
                        <Progress value={92} className="h-2" />

                        <div className="flex items-center justify-between">
                          <span className="text-sm">Average Interview Success</span>
                          <span className="font-bold text-blue-500">78%</span>
                        </div>
                        <Progress value={78} className="h-2" />

                        <div className="flex items-center justify-between">
                          <span className="text-sm">Student Satisfaction</span>
                          <span className="font-bold text-purple-500">96%</span>
                        </div>
                        <Progress value={96} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2" />
                        Monthly Overview
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Applications Reviewed</span>
                          <span className="font-bold">156</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Applications Approved</span>
                          <span className="font-bold text-green-500">142</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Students Placed</span>
                          <span className="font-bold text-primary">23</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Average Response Time</span>
                          <span className="font-bold">2.3 hours</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
