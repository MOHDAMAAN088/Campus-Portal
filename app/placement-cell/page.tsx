"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "@/hooks/use-toast"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"
import {
  Users,
  Building2,
  Award,
  Calendar,
  Bell,
  Settings,
  GraduationCap,
  Target,
  DollarSign,
  Clock,
  Star,
  Filter,
  Download,
  Eye,
  Plus,
  Edit,
  Trash2,
} from "lucide-react"

export default function PlacementCellDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isAddCompanyOpen, setIsAddCompanyOpen] = useState(false)
  const [isScheduleEventOpen, setIsScheduleEventOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const [companyForm, setCompanyForm] = useState({
    name: "",
    industry: "",
    positions: "",
    avgSalary: "",
    description: "",
  })

  const [eventForm, setEventForm] = useState({
    title: "",
    company: "",
    date: "",
    time: "",
    type: "",
    positions: "",
  })

  // Mock data for charts with sky blue theme colors
  const placementData = [
    { month: "Jan", placed: 45, target: 50 },
    { month: "Feb", placed: 52, target: 55 },
    { month: "Mar", placed: 48, target: 50 },
    { month: "Apr", placed: 61, target: 60 },
    { month: "May", placed: 55, target: 55 },
    { month: "Jun", placed: 67, target: 65 },
  ]

  const companyData = [
    { name: "TechCorp", value: 35, color: "#0ea5e9" }, // sky-500
    { name: "DataVision", value: 28, color: "#0284c7" }, // sky-600
    { name: "InnovateLabs", value: 22, color: "#0369a1" }, // sky-700
    { name: "CloudSys", value: 15, color: "#075985" }, // sky-800
  ]

  const salaryData = [
    { range: "3-5 LPA", count: 45 },
    { range: "5-8 LPA", count: 38 },
    { range: "8-12 LPA", count: 25 },
    { range: "12-15 LPA", count: 12 },
    { range: "15+ LPA", count: 8 },
  ]

  const departmentData = [
    { department: "CSE", placed: 89, total: 120, percentage: 74 },
    { department: "ECE", placed: 67, total: 95, percentage: 71 },
    { department: "ME", placed: 45, total: 80, percentage: 56 },
    { department: "EEE", placed: 52, total: 85, percentage: 61 },
    { department: "Civil", placed: 34, total: 70, percentage: 49 },
  ]

  const [topRecruiters, setTopRecruiters] = useState([
    {
      id: 1,
      name: "TechCorp Solutions",
      logo: "/tech-company-logo.jpg",
      hired: 35,
      avgSalary: "8.5 LPA",
      positions: ["Software Engineer", "Data Analyst", "Product Manager"],
      industry: "Technology",
      description: "Leading technology company focused on innovative solutions",
    },
    {
      id: 2,
      name: "DataVision AI",
      logo: "/tech-company-logo.jpg",
      hired: 28,
      avgSalary: "9.2 LPA",
      positions: ["ML Engineer", "Data Scientist", "AI Researcher"],
      industry: "Artificial Intelligence",
      description: "AI-first company building the future of data analytics",
    },
    {
      id: 3,
      name: "InnovateLabs",
      logo: "/tech-company-logo.jpg",
      hired: 22,
      avgSalary: "7.8 LPA",
      positions: ["Backend Developer", "DevOps Engineer", "QA Engineer"],
      industry: "Software Development",
      description: "Innovation-driven software development company",
    },
  ])

  const [upcomingEvents, setUpcomingEvents] = useState([
    {
      id: 1,
      title: "TechCorp Campus Drive",
      company: "TechCorp Solutions",
      date: "2025-01-25",
      time: "10:00 AM",
      type: "Campus Drive",
      positions: 15,
    },
    {
      id: 2,
      title: "DataVision Pre-Placement Talk",
      company: "DataVision AI",
      date: "2025-01-28",
      time: "2:00 PM",
      type: "PPT",
      positions: 8,
    },
    {
      id: 3,
      title: "InnovateLabs Technical Interview",
      company: "InnovateLabs",
      date: "2025-01-30",
      time: "9:00 AM",
      type: "Interview",
      positions: 12,
    },
  ])

  const recentPlacements = [
    {
      id: 1,
      student: "Alex Johnson",
      company: "TechCorp Solutions",
      position: "Software Engineer",
      salary: "12 LPA",
      date: "2025-01-18",
      avatar: "/diverse-student-profiles.png",
    },
    {
      id: 2,
      student: "Priya Sharma",
      company: "DataVision AI",
      position: "Data Scientist",
      salary: "14 LPA",
      date: "2025-01-17",
      avatar: "/diverse-student-profiles.png",
    },
    {
      id: 3,
      student: "Rahul Kumar",
      company: "InnovateLabs",
      position: "Backend Developer",
      salary: "10 LPA",
      date: "2025-01-16",
      avatar: "/diverse-student-profiles.png",
    },
  ]

  const handleAddCompany = () => {
    if (!companyForm.name || !companyForm.industry) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    const newCompany = {
      id: topRecruiters.length + 1,
      name: companyForm.name,
      industry: companyForm.industry,
      positions: companyForm.positions.split(",").map((p) => p.trim()),
      avgSalary: companyForm.avgSalary,
      description: companyForm.description,
      logo: "/tech-company-logo.jpg",
      hired: 0,
    }

    setTopRecruiters([...topRecruiters, newCompany])
    setCompanyForm({
      name: "",
      industry: "",
      positions: "",
      avgSalary: "",
      description: "",
    })
    setIsAddCompanyOpen(false)

    toast({
      title: "Success",
      description: "Company added successfully!",
    })
  }

  const handleScheduleEvent = () => {
    if (!eventForm.title || !eventForm.company || !eventForm.date) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    const newEvent = {
      id: upcomingEvents.length + 1,
      ...eventForm,
      positions: Number.parseInt(eventForm.positions) || 0,
    }

    setUpcomingEvents([...upcomingEvents, newEvent])
    setEventForm({
      title: "",
      company: "",
      date: "",
      time: "",
      type: "",
      positions: "",
    })
    setIsScheduleEventOpen(false)

    toast({
      title: "Success",
      description: "Event scheduled successfully!",
    })
  }

  const handleDeleteCompany = (companyId: number) => {
    setTopRecruiters(topRecruiters.filter((company) => company.id !== companyId))
    toast({
      title: "Success",
      description: "Company removed successfully!",
    })
  }

  const handleDeleteEvent = (eventId: number) => {
    setUpcomingEvents(upcomingEvents.filter((event) => event.id !== eventId))
    toast({
      title: "Success",
      description: "Event cancelled successfully!",
    })
  }

  const exportReport = () => {
    // Simulate report generation
    toast({
      title: "Success",
      description: "Report exported successfully!",
    })
  }

  const filteredCompanies = topRecruiters.filter(
    (company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      {/* Header */}
      <header className="border-b border-sky-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-sky-600">CampusConnect</span>
              <Badge variant="outline" className="text-xs border-sky-300 text-sky-600">
                Placement Cell
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hover-sky">
                <Bell className="w-4 h-4 text-sky-600" />
              </Button>
              <Button variant="ghost" size="sm" className="hover-sky">
                <Settings className="w-4 h-4 text-sky-600" />
              </Button>
              <Avatar className="w-8 h-8 ring-2 ring-sky-200">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-sky-100 text-sky-600">PC</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 bg-white border border-sky-200">
            <TabsTrigger value="overview" className="data-[state=active]:bg-sky-500 data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-sky-500 data-[state=active]:text-white">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="companies" className="data-[state=active]:bg-sky-500 data-[state=active]:text-white">
              Companies
            </TabsTrigger>
            <TabsTrigger value="students" className="data-[state=active]:bg-sky-500 data-[state=active]:text-white">
              Students
            </TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-sky-500 data-[state=active]:text-white">
              Events
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="glass-card hover-sky">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-sky-600">Total Students</p>
                      <p className="text-2xl font-bold text-sky-800">1,247</p>
                    </div>
                    <Users className="w-8 h-8 text-sky-500" />
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-card hover-sky">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-green-600">Placed Students</p>
                      <p className="text-2xl font-bold text-green-800">892</p>
                    </div>
                    <Award className="w-8 h-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-card hover-sky">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-blue-600">Placement Rate</p>
                      <p className="text-2xl font-bold text-blue-800">71.5%</p>
                    </div>
                    <Target className="w-8 h-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-card hover-sky">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-cyan-600">Avg. Package</p>
                      <p className="text-2xl font-bold text-cyan-800">8.2 LPA</p>
                    </div>
                    <DollarSign className="w-8 h-8 text-cyan-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Placement Trends */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-sky-800">Placement Trends</CardTitle>
                  <CardDescription className="text-sky-600">Monthly placement vs targets</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={placementData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e0f2fe" />
                      <XAxis dataKey="month" stroke="#0369a1" />
                      <YAxis stroke="#0369a1" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #0ea5e9",
                          borderRadius: "8px",
                        }}
                      />
                      <Bar dataKey="placed" fill="#0ea5e9" name="Placed" />
                      <Bar dataKey="target" fill="#10b981" name="Target" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Company Distribution */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-sky-800">Top Recruiting Companies</CardTitle>
                  <CardDescription className="text-sky-600">Distribution of placements by company</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={companyData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}`}
                      >
                        {companyData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #0ea5e9",
                          borderRadius: "8px",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Department Performance */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-sky-800">Department-wise Placement Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {departmentData.map((dept) => (
                    <div key={dept.department} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 text-sm font-medium text-sky-700">{dept.department}</div>
                        <div className="text-sm text-sky-600">
                          {dept.placed}/{dept.total} students
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Progress value={dept.percentage} className="w-32 h-2" />
                        <div className="w-12 text-sm font-medium text-right text-sky-700">{dept.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Placements */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-sky-800">Recent Placements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPlacements.map((placement) => (
                    <div
                      key={placement.id}
                      className="flex items-center justify-between p-3 bg-sky-50 rounded-lg hover-sky"
                    >
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-10 h-10 ring-2 ring-sky-200">
                          <AvatarImage src={placement.avatar || "/placeholder.svg"} />
                          <AvatarFallback className="bg-sky-100 text-sky-600">
                            {placement.student
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sky-800">{placement.student}</p>
                          <p className="text-sm text-sky-600">
                            {placement.position} at {placement.company}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">{placement.salary}</div>
                        <div className="text-xs text-sky-500">{placement.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-sky-800">Detailed Analytics</h2>
              <Button
                variant="outline"
                onClick={exportReport}
                className="border-sky-200 text-sky-600 hover:bg-sky-50 bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>

            {/* Salary Distribution */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-sky-800">Salary Distribution</CardTitle>
                <CardDescription className="text-sky-600">
                  Number of students placed in different salary ranges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salaryData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0f2fe" />
                    <XAxis type="number" stroke="#0369a1" />
                    <YAxis dataKey="range" type="category" width={80} stroke="#0369a1" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #0ea5e9",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="count" fill="#0ea5e9" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Placement Timeline */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-sky-800">Placement Timeline</CardTitle>
                <CardDescription className="text-sky-600">Placement progress over the academic year</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={placementData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0f2fe" />
                    <XAxis dataKey="month" stroke="#0369a1" />
                    <YAxis stroke="#0369a1" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #0ea5e9",
                        borderRadius: "8px",
                      }}
                    />
                    <Line type="monotone" dataKey="placed" stroke="#0ea5e9" strokeWidth={2} />
                    <Line type="monotone" dataKey="target" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Key Insights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="glass-card hover-sky">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-sky-800">Highest Package</h3>
                    <Star className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div className="text-2xl font-bold text-green-600">₹45 LPA</div>
                  <p className="text-sm text-sky-600">Offered by TechGiant Inc.</p>
                </CardContent>
              </Card>
              <Card className="glass-card hover-sky">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-sky-800">Top Performer</h3>
                    <Award className="w-5 h-5 text-sky-500" />
                  </div>
                  <div className="text-lg font-bold text-sky-700">CSE Department</div>
                  <p className="text-sm text-sky-600">74% placement rate</p>
                </CardContent>
              </Card>
              <Card className="glass-card hover-sky">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-sky-800">Avg. Time to Place</h3>
                    <Clock className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="text-2xl font-bold text-blue-700">21 days</div>
                  <p className="text-sm text-sky-600">From application to offer</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Companies Tab */}
          <TabsContent value="companies" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-sky-800">Partner Companies</h2>
              <div className="flex space-x-2">
                <div className="relative">
                  <Input
                    placeholder="Search companies..."
                    className="w-64 border-sky-200 focus:border-sky-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Dialog open={isAddCompanyOpen} onOpenChange={setIsAddCompanyOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-sky-500 hover:bg-sky-600">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Company
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-sky-800">Add New Company</DialogTitle>
                      <DialogDescription className="text-sky-600">
                        Add a new partner company to the placement portal.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="companyName" className="text-sky-700">
                            Company Name
                          </Label>
                          <Input
                            id="companyName"
                            placeholder="e.g. TechCorp Solutions"
                            value={companyForm.name}
                            onChange={(e) => setCompanyForm({ ...companyForm, name: e.target.value })}
                            className="border-sky-200 focus:border-sky-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="industry" className="text-sky-700">
                            Industry
                          </Label>
                          <Input
                            id="industry"
                            placeholder="e.g. Technology"
                            value={companyForm.industry}
                            onChange={(e) => setCompanyForm({ ...companyForm, industry: e.target.value })}
                            className="border-sky-200 focus:border-sky-500"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="positions" className="text-sky-700">
                            Open Positions (comma-separated)
                          </Label>
                          <Input
                            id="positions"
                            placeholder="e.g. Software Engineer, Data Analyst"
                            value={companyForm.positions}
                            onChange={(e) => setCompanyForm({ ...companyForm, positions: e.target.value })}
                            className="border-sky-200 focus:border-sky-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="avgSalary" className="text-sky-700">
                            Average Salary
                          </Label>
                          <Input
                            id="avgSalary"
                            placeholder="e.g. 8.5 LPA"
                            value={companyForm.avgSalary}
                            onChange={(e) => setCompanyForm({ ...companyForm, avgSalary: e.target.value })}
                            className="border-sky-200 focus:border-sky-500"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="description" className="text-sky-700">
                          Company Description
                        </Label>
                        <Textarea
                          id="description"
                          placeholder="Brief description about the company..."
                          value={companyForm.description}
                          onChange={(e) => setCompanyForm({ ...companyForm, description: e.target.value })}
                          className="border-sky-200 focus:border-sky-500"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        variant="outline"
                        onClick={() => setIsAddCompanyOpen(false)}
                        className="border-sky-200 text-sky-600"
                      >
                        Cancel
                      </Button>
                      <Button onClick={handleAddCompany} className="bg-sky-500 hover:bg-sky-600">
                        Add Company
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="space-y-4">
              {filteredCompanies.map((company) => (
                <Card key={company.id} className="glass-card hover-sky">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-sky-100 rounded-lg flex items-center justify-center">
                          <Building2 className="w-8 h-8 text-sky-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-sky-800">{company.name}</h3>
                          <p className="text-sm text-sky-600 mb-2">{company.industry}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-sky-600">
                            <span>{company.hired} students hired</span>
                            <span>Avg. Salary: {company.avgSalary}</span>
                          </div>
                          <p className="text-sm text-sky-600 mt-2">{company.description}</p>
                          <div className="mt-3">
                            <p className="text-sm font-medium mb-2 text-sky-700">Open Positions:</p>
                            <div className="flex flex-wrap gap-1">
                              {company.positions.map((position, index) => (
                                <Badge key={index} variant="secondary" className="text-xs bg-sky-100 text-sky-700">
                                  {position}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-sky-200 text-sky-600 hover:bg-sky-50 bg-transparent"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View Details
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-sky-200 text-sky-600 hover:bg-sky-50 bg-transparent"
                        >
                          <Edit className="w-4 h-4 mr-1" />
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteCompany(company.id)}
                          className="border-red-200 text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Students Tab */}
          <TabsContent value="students" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-sky-800">Student Management</h2>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-sky-200 text-sky-600 hover:bg-sky-50 bg-transparent"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={exportReport}
                  className="border-sky-200 text-sky-600 hover:bg-sky-50 bg-transparent"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            {/* Student Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="glass-card hover-sky">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-sky-600">1,247</div>
                  <div className="text-sm text-sky-500">Total Students</div>
                </CardContent>
              </Card>
              <Card className="glass-card hover-sky">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-green-600">892</div>
                  <div className="text-sm text-green-500">Placed</div>
                </CardContent>
              </Card>
              <Card className="glass-card hover-sky">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-yellow-600">245</div>
                  <div className="text-sm text-yellow-500">In Process</div>
                </CardContent>
              </Card>
              <Card className="glass-card hover-sky">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-red-600">110</div>
                  <div className="text-sm text-red-500">Unplaced</div>
                </CardContent>
              </Card>
            </div>

            {/* Department Performance Table */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-sky-800">Department-wise Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-sky-200">
                        <th className="text-left py-3 px-4 text-sky-700">Department</th>
                        <th className="text-left py-3 px-4 text-sky-700">Total Students</th>
                        <th className="text-left py-3 px-4 text-sky-700">Placed</th>
                        <th className="text-left py-3 px-4 text-sky-700">Placement %</th>
                        <th className="text-left py-3 px-4 text-sky-700">Avg. Package</th>
                        <th className="text-left py-3 px-4 text-sky-700">Highest Package</th>
                      </tr>
                    </thead>
                    <tbody>
                      {departmentData.map((dept) => (
                        <tr key={dept.department} className="border-b border-sky-100 hover:bg-sky-50">
                          <td className="py-3 px-4 font-medium text-sky-800">{dept.department}</td>
                          <td className="py-3 px-4 text-sky-700">{dept.total}</td>
                          <td className="py-3 px-4 text-sky-700">{dept.placed}</td>
                          <td className="py-3 px-4">
                            <Badge
                              variant={dept.percentage > 70 ? "default" : "secondary"}
                              className={
                                dept.percentage > 70 ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                              }
                            >
                              {dept.percentage}%
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-sky-700">₹{(Math.random() * 5 + 6).toFixed(1)} LPA</td>
                          <td className="py-3 px-4 text-green-600 font-medium">
                            ₹{(Math.random() * 20 + 15).toFixed(0)} LPA
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-sky-800">Placement Events</h2>
              <Dialog open={isScheduleEventOpen} onOpenChange={setIsScheduleEventOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-sky-500 hover:bg-sky-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Event
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-sky-800">Schedule New Event</DialogTitle>
                    <DialogDescription className="text-sky-600">
                      Schedule a new placement event or company visit.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="eventTitle" className="text-sky-700">
                          Event Title
                        </Label>
                        <Input
                          id="eventTitle"
                          placeholder="e.g. TechCorp Campus Drive"
                          value={eventForm.title}
                          onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                          className="border-sky-200 focus:border-sky-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="eventCompany" className="text-sky-700">
                          Company
                        </Label>
                        <Select
                          value={eventForm.company}
                          onValueChange={(value) => setEventForm({ ...eventForm, company: value })}
                        >
                          <SelectTrigger className="border-sky-200 focus:border-sky-500">
                            <SelectValue placeholder="Select company" />
                          </SelectTrigger>
                          <SelectContent>
                            {topRecruiters.map((company) => (
                              <SelectItem key={company.id} value={company.name}>
                                {company.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="eventDate" className="text-sky-700">
                          Date
                        </Label>
                        <Input
                          id="eventDate"
                          type="date"
                          value={eventForm.date}
                          onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                          className="border-sky-200 focus:border-sky-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="eventTime" className="text-sky-700">
                          Time
                        </Label>
                        <Input
                          id="eventTime"
                          type="time"
                          value={eventForm.time}
                          onChange={(e) => setEventForm({ ...eventForm, time: e.target.value })}
                          className="border-sky-200 focus:border-sky-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="eventType" className="text-sky-700">
                          Event Type
                        </Label>
                        <Select
                          value={eventForm.type}
                          onValueChange={(value) => setEventForm({ ...eventForm, type: value })}
                        >
                          <SelectTrigger className="border-sky-200 focus:border-sky-500">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Campus Drive">Campus Drive</SelectItem>
                            <SelectItem value="PPT">Pre-Placement Talk</SelectItem>
                            <SelectItem value="Interview">Interview</SelectItem>
                            <SelectItem value="Assessment">Assessment</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="eventPositions" className="text-sky-700">
                        Number of Positions
                      </Label>
                      <Input
                        id="eventPositions"
                        type="number"
                        placeholder="e.g. 15"
                        value={eventForm.positions}
                        onChange={(e) => setEventForm({ ...eventForm, positions: e.target.value })}
                        className="border-sky-200 focus:border-sky-500"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setIsScheduleEventOpen(false)}
                      className="border-sky-200 text-sky-600"
                    >
                      Cancel
                    </Button>
                    <Button onClick={handleScheduleEvent} className="bg-sky-500 hover:bg-sky-600">
                      Schedule Event
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {/* Upcoming Events */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-sky-800">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div
                      key={event.id}
                      className="flex items-center justify-between p-4 bg-sky-50 rounded-lg hover-sky"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-sky-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sky-800">{event.title}</h3>
                          <p className="text-sm text-sky-600">
                            {event.company} • {event.date} at {event.time}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <Badge variant="outline" className="border-sky-300 text-sky-600 bg-sky-50">
                            {event.type}
                          </Badge>
                          <p className="text-sm text-sky-500 mt-1">{event.positions} positions</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-sky-200 text-sky-600 hover:bg-sky-50 bg-transparent"
                          >
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteEvent(event.id)}
                            className="border-red-200 text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Event Calendar */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-sky-800">Event Calendar</CardTitle>
                <CardDescription className="text-sky-600">Monthly view of all placement activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 text-center">
                  {/* Calendar header */}
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="p-2 font-medium text-sm text-sky-600">
                      {day}
                    </div>
                  ))}
                  {/* Calendar days */}
                  {Array.from({ length: 35 }, (_, i) => {
                    const day = i - 6
                    const hasEvent = [18, 25, 28, 30].includes(day)
                    return (
                      <div
                        key={i}
                        className={`p-2 text-sm border border-sky-200 rounded hover-sky cursor-pointer ${
                          day > 0 && day <= 31 ? "bg-white text-sky-700" : "bg-sky-50 text-sky-400"
                        } ${hasEvent ? "bg-sky-100 border-sky-300 font-medium" : ""}`}
                      >
                        {day > 0 && day <= 31 ? day : ""}
                        {hasEvent && <div className="w-1 h-1 bg-sky-500 rounded-full mx-auto mt-1"></div>}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
