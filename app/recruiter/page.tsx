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
  Building2,
  Users,
  Briefcase,
  TrendingUp,
  Plus,
  Eye,
  Edit,
  Trash2,
  Calendar,
  MapPin,
  DollarSign,
  Clock,
  Star,
  Search,
  Bell,
  Settings,
  GraduationCap,
  CheckCircle,
  XCircle,
} from "lucide-react"

export default function RecruiterDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isCreateJobOpen, setIsCreateJobOpen] = useState(false)
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const [jobForm, setJobForm] = useState({
    title: "",
    department: "",
    location: "",
    type: "",
    salary: "",
    description: "",
    requirements: "",
  })

  const [jobPostings, setJobPostings] = useState([
    {
      id: 1,
      title: "Frontend Developer Intern",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Internship",
      salary: "₹25,000 - ₹35,000",
      postedDate: "2025-01-15",
      applications: 45,
      shortlisted: 12,
      interviewed: 5,
      status: "Active",
      description: "We are looking for a passionate frontend developer intern to join our team...",
      requirements: ["React", "JavaScript", "CSS", "HTML"],
      experience: "0-1 years",
    },
    {
      id: 2,
      title: "Data Science Intern",
      department: "Analytics",
      location: "Mumbai, India",
      type: "Internship",
      salary: "₹30,000 - ₹40,000",
      postedDate: "2025-01-12",
      applications: 38,
      shortlisted: 15,
      interviewed: 8,
      status: "Active",
      description: "Join our data science team to work on cutting-edge ML projects...",
      requirements: ["Python", "Machine Learning", "SQL", "Statistics"],
      experience: "0-2 years",
    },
    {
      id: 3,
      title: "Backend Developer",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      salary: "₹8,00,000 - ₹12,00,000",
      postedDate: "2025-01-10",
      applications: 67,
      shortlisted: 20,
      interviewed: 12,
      status: "Active",
      description: "We need an experienced backend developer to build scalable systems...",
      requirements: ["Node.js", "MongoDB", "Express", "AWS"],
      experience: "2-4 years",
    },
  ])

  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex.johnson@university.edu",
      university: "IIT Delhi",
      branch: "Computer Science",
      year: "4th Year",
      cgpa: "8.5",
      avatar: "/diverse-student-profiles.png",
      appliedFor: "Frontend Developer Intern",
      appliedDate: "2025-01-18",
      status: "Under Review",
      matchScore: 95,
      skills: ["React", "JavaScript", "CSS", "Node.js"],
      experience: "2 internships",
      projects: 5,
      resume: "alex_johnson_resume.pdf",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya.sharma@university.edu",
      university: "IIT Bombay",
      branch: "Computer Science",
      year: "3rd Year",
      cgpa: "9.1",
      avatar: "/diverse-student-profiles.png",
      appliedFor: "Data Science Intern",
      appliedDate: "2025-01-17",
      status: "Shortlisted",
      matchScore: 88,
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
      experience: "1 internship",
      projects: 7,
      resume: "priya_sharma_resume.pdf",
    },
    {
      id: 3,
      name: "Rahul Kumar",
      email: "rahul.kumar@university.edu",
      university: "NIT Warangal",
      branch: "Computer Science",
      year: "4th Year",
      cgpa: "8.2",
      avatar: "/diverse-student-profiles.png",
      appliedFor: "Backend Developer",
      appliedDate: "2025-01-16",
      status: "Interview Scheduled",
      matchScore: 82,
      skills: ["Node.js", "MongoDB", "Express", "Docker"],
      experience: "3 internships",
      projects: 8,
      resume: "rahul_kumar_resume.pdf",
    },
  ])

  const handleCreateJob = () => {
    if (!jobForm.title || !jobForm.department || !jobForm.location) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    const newJob = {
      id: jobPostings.length + 1,
      ...jobForm,
      requirements: jobForm.requirements.split(",").map((s) => s.trim()),
      postedDate: new Date().toISOString().split("T")[0],
      applications: 0,
      shortlisted: 0,
      interviewed: 0,
      status: "Active",
      experience: "0-2 years",
    }

    setJobPostings([...jobPostings, newJob])
    setJobForm({
      title: "",
      department: "",
      location: "",
      type: "",
      salary: "",
      description: "",
      requirements: "",
    })
    setIsCreateJobOpen(false)

    toast({
      title: "Success",
      description: "Job posting created successfully!",
    })
  }

  const handleDeleteJob = (jobId: number) => {
    setJobPostings(jobPostings.filter((job) => job.id !== jobId))
    toast({
      title: "Success",
      description: "Job posting deleted successfully!",
    })
  }

  const handleCandidateAction = (candidateId: number, action: string) => {
    setCandidates(
      candidates.map((candidate) => {
        if (candidate.id === candidateId) {
          let newStatus = candidate.status
          switch (action) {
            case "shortlist":
              newStatus = "Shortlisted"
              break
            case "interview":
              newStatus = "Interview Scheduled"
              break
            case "reject":
              newStatus = "Rejected"
              break
          }
          return { ...candidate, status: newStatus }
        }
        return candidate
      }),
    )

    toast({
      title: "Success",
      description: `Candidate ${action}ed successfully!`,
    })
  }

  const filteredCandidates = candidates.filter((candidate) => {
    const matchesSearch =
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.appliedFor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || candidate.status.toLowerCase().includes(filterStatus.toLowerCase())
    return matchesSearch && matchesFilter
  })

  const recruiterProfile = {
    name: "John Smith",
    email: "john.smith@techcorp.com",
    company: "TechCorp Solutions",
    position: "Senior Talent Acquisition Manager",
    avatar: "/professional-recruiter.jpg",
    companyLogo: "/tech-company-logo.jpg",
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "text-green-500"
      case "Under Review":
        return "text-yellow-500"
      case "Shortlisted":
        return "text-blue-500"
      case "Interview Scheduled":
        return "text-purple-500"
      default:
        return "text-muted-foreground"
    }
  }

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Active":
        return "default"
      case "Under Review":
        return "secondary"
      case "Shortlisted":
        return "outline"
      case "Interview Scheduled":
        return "destructive"
      default:
        return "secondary"
    }
  }

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
                Recruiter Portal
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
                <AvatarImage src="/professional-recruiter.jpg" />
                <AvatarFallback className="bg-sky-100 text-sky-600">JS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="glass-card hover-sky">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-sky-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-sky-600" />
                </div>
                <CardTitle className="text-lg text-sky-800">John Smith</CardTitle>
                <CardDescription className="text-sky-600">Senior Talent Acquisition Manager</CardDescription>
                <Badge variant="secondary" className="mt-2 bg-sky-100 text-sky-700">
                  TechCorp Solutions
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center pt-4 border-t border-sky-200">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xl font-bold text-sky-600">12</div>
                        <div className="text-xs text-sky-500">Active Jobs</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-blue-600">156</div>
                        <div className="text-xs text-blue-500">Total Applications</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4 bg-white border border-sky-200">
                <TabsTrigger
                  value="dashboard"
                  className="data-[state=active]:bg-sky-500 data-[state=active]:text-white"
                >
                  Dashboard
                </TabsTrigger>
                <TabsTrigger value="jobs" className="data-[state=active]:bg-sky-500 data-[state=active]:text-white">
                  Job Postings
                </TabsTrigger>
                <TabsTrigger
                  value="candidates"
                  className="data-[state=active]:bg-sky-500 data-[state=active]:text-white"
                >
                  Candidates
                </TabsTrigger>
                <TabsTrigger
                  value="analytics"
                  className="data-[state=active]:bg-sky-500 data-[state=active]:text-white"
                >
                  Analytics
                </TabsTrigger>
              </TabsList>

              {/* Dashboard Tab */}
              <TabsContent value="dashboard" className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="glass-card hover-sky">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-sky-600">Active Jobs</p>
                          <p className="text-2xl font-bold text-sky-800">12</p>
                        </div>
                        <Briefcase className="w-8 h-8 text-sky-500" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="glass-card hover-sky">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-blue-600">Total Applications</p>
                          <p className="text-2xl font-bold text-blue-800">156</p>
                        </div>
                        <Users className="w-8 h-8 text-blue-500" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="glass-card hover-sky">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-cyan-600">Shortlisted</p>
                          <p className="text-2xl font-bold text-cyan-800">47</p>
                        </div>
                        <Star className="w-8 h-8 text-cyan-500" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="glass-card hover-sky">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-green-600">Hired</p>
                          <p className="text-2xl font-bold text-green-800">23</p>
                        </div>
                        <TrendingUp className="w-8 h-8 text-green-500" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Job Postings */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sky-800">Recent Job Postings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {jobPostings.slice(0, 3).map((job) => (
                        <div
                          key={job.id}
                          className="flex items-center justify-between p-4 bg-sky-50 rounded-lg hover-sky"
                        >
                          <div className="flex-1">
                            <h3 className="font-semibold text-sky-800">{job.title}</h3>
                            <p className="text-sm text-sky-600">
                              {job.department} • {job.location} • {job.type}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-sky-700">{job.applications} Applications</div>
                            <div className="text-xs text-sky-500">{job.shortlisted} Shortlisted</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Job Postings Tab */}
              <TabsContent value="jobs" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-sky-800">Job Postings</h2>
                  <Dialog open={isCreateJobOpen} onOpenChange={setIsCreateJobOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-sky-500 hover:bg-sky-600">
                        <Plus className="w-4 h-4 mr-2" />
                        Create Job
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-sky-800">Create New Job Posting</DialogTitle>
                        <DialogDescription className="text-sky-600">
                          Fill in the details to create a new job posting for your company.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="title" className="text-sky-700">
                              Job Title
                            </Label>
                            <Input
                              id="title"
                              placeholder="e.g. Frontend Developer"
                              value={jobForm.title}
                              onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
                              className="border-sky-200 focus:border-sky-500"
                            />
                          </div>
                          <div>
                            <Label htmlFor="department" className="text-sky-700">
                              Department
                            </Label>
                            <Select
                              value={jobForm.department}
                              onValueChange={(value) => setJobForm({ ...jobForm, department: value })}
                            >
                              <SelectTrigger className="border-sky-200 focus:border-sky-500">
                                <SelectValue placeholder="Select department" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="engineering">Engineering</SelectItem>
                                <SelectItem value="analytics">Analytics</SelectItem>
                                <SelectItem value="design">Design</SelectItem>
                                <SelectItem value="marketing">Marketing</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="location" className="text-sky-700">
                              Location
                            </Label>
                            <Input
                              id="location"
                              placeholder="e.g. Bangalore, India"
                              value={jobForm.location}
                              onChange={(e) => setJobForm({ ...jobForm, location: e.target.value })}
                              className="border-sky-200 focus:border-sky-500"
                            />
                          </div>
                          <div>
                            <Label htmlFor="type" className="text-sky-700">
                              Job Type
                            </Label>
                            <Select
                              value={jobForm.type}
                              onValueChange={(value) => setJobForm({ ...jobForm, type: value })}
                            >
                              <SelectTrigger className="border-sky-200 focus:border-sky-500">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="internship">Internship</SelectItem>
                                <SelectItem value="full-time">Full-time</SelectItem>
                                <SelectItem value="part-time">Part-time</SelectItem>
                                <SelectItem value="contract">Contract</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="salary" className="text-sky-700">
                            Salary Range
                          </Label>
                          <Input
                            id="salary"
                            placeholder="e.g. ₹25,000 - ₹35,000"
                            value={jobForm.salary}
                            onChange={(e) => setJobForm({ ...jobForm, salary: e.target.value })}
                            className="border-sky-200 focus:border-sky-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="description" className="text-sky-700">
                            Job Description
                          </Label>
                          <Textarea
                            id="description"
                            placeholder="Describe the role and responsibilities..."
                            value={jobForm.description}
                            onChange={(e) => setJobForm({ ...jobForm, description: e.target.value })}
                            className="border-sky-200 focus:border-sky-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="requirements" className="text-sky-700">
                            Required Skills (comma-separated)
                          </Label>
                          <Input
                            id="requirements"
                            placeholder="e.g. React, JavaScript, CSS"
                            value={jobForm.requirements}
                            onChange={(e) => setJobForm({ ...jobForm, requirements: e.target.value })}
                            className="border-sky-200 focus:border-sky-500"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button
                          variant="outline"
                          onClick={() => setIsCreateJobOpen(false)}
                          className="border-sky-200 text-sky-600"
                        >
                          Cancel
                        </Button>
                        <Button onClick={handleCreateJob} className="bg-sky-500 hover:bg-sky-600">
                          Create Job
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="space-y-4">
                  {jobPostings.map((job) => (
                    <Card key={job.id} className="glass-card hover-sky">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="text-lg font-semibold text-sky-800">{job.title}</h3>
                              <Badge variant="outline" className="border-green-300 text-green-600 bg-green-50">
                                {job.status}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-sky-600 mb-2">
                              <span className="flex items-center">
                                <Building2 className="w-4 h-4 mr-1" />
                                {job.department}
                              </span>
                              <span className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {job.location}
                              </span>
                              <span className="flex items-center">
                                <DollarSign className="w-4 h-4 mr-1" />
                                {job.salary}
                              </span>
                            </div>
                            <p className="text-sm text-sky-600 mb-3">{job.description}</p>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {job.requirements.map((skill, index) => (
                                <Badge key={index} variant="secondary" className="text-xs bg-sky-100 text-sky-700">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-4 gap-4 mb-4 text-center">
                          <div>
                            <div className="text-lg font-bold text-sky-600">{job.applications}</div>
                            <div className="text-xs text-sky-500">Applications</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-blue-600">{job.shortlisted}</div>
                            <div className="text-xs text-blue-500">Shortlisted</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-cyan-600">{job.interviewed}</div>
                            <div className="text-xs text-cyan-500">Interviewed</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-green-600">{Math.floor(job.interviewed * 0.6)}</div>
                            <div className="text-xs text-green-500">Hired</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-xs text-sky-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            Posted: {job.postedDate}
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-sky-200 text-sky-600 hover:bg-sky-50 bg-transparent"
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              View
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
                              onClick={() => handleDeleteJob(job.id)}
                              className="text-red-500 border-red-200 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4 mr-1" />
                              Delete
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Candidates Tab */}
              <TabsContent value="candidates" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-sky-800">Candidate Applications</h2>
                  <div className="flex space-x-2">
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger className="w-40 border-sky-200">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="review">Under Review</SelectItem>
                        <SelectItem value="shortlisted">Shortlisted</SelectItem>
                        <SelectItem value="interview">Interview</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-sky-500" />
                      <Input
                        placeholder="Search candidates..."
                        className="pl-10 w-64 border-sky-200 focus:border-sky-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredCandidates.map((candidate) => (
                    <Card key={candidate.id} className="glass-card hover-sky">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-4">
                            <Avatar className="w-12 h-12 ring-2 ring-sky-200">
                              <AvatarImage src={candidate.avatar || "/placeholder.svg"} />
                              <AvatarFallback className="bg-sky-100 text-sky-600">
                                {candidate.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-sky-800">{candidate.name}</h3>
                              <p className="text-sm text-sky-600">
                                {candidate.university} • {candidate.branch} • {candidate.year}
                              </p>
                              <p className="text-sm text-sky-600">CGPA: {candidate.cgpa}</p>
                              <div className="mt-2">
                                <p className="font-medium text-sm text-sky-700">Applied for: {candidate.appliedFor}</p>
                                <p className="text-xs text-sky-500">Applied: {candidate.appliedDate}</p>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center mb-2">
                              <Star className="w-4 h-4 text-yellow-500 mr-1" />
                              <span className="font-bold text-sky-700">{candidate.matchScore}%</span>
                            </div>
                            <Badge
                              variant="outline"
                              className={`${
                                candidate.status === "Shortlisted"
                                  ? "border-green-300 text-green-600 bg-green-50"
                                  : candidate.status === "Interview Scheduled"
                                    ? "border-blue-300 text-blue-600 bg-blue-50"
                                    : "border-yellow-300 text-yellow-600 bg-yellow-50"
                              }`}
                            >
                              {candidate.status}
                            </Badge>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                          <div>
                            <div className="text-sm font-medium text-sky-700">{candidate.experience}</div>
                            <div className="text-xs text-sky-500">Experience</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-sky-700">{candidate.projects}</div>
                            <div className="text-xs text-sky-500">Projects</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-sky-700">{candidate.skills.length}</div>
                            <div className="text-xs text-sky-500">Skills</div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-medium mb-2 text-sm text-sky-700">Skills</h4>
                          <div className="flex flex-wrap gap-1">
                            {candidate.skills.map((skill, index) => (
                              <Badge key={index} variant="secondary" className="text-xs bg-sky-100 text-sky-700">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <Button variant="ghost" size="sm" className="text-xs text-sky-600 hover:bg-sky-50">
                            <Eye className="w-4 h-4 mr-1" />
                            View Resume
                          </Button>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleCandidateAction(candidate.id, "interview")}
                              className="border-blue-200 text-blue-600 hover:bg-blue-50"
                            >
                              <Calendar className="w-4 h-4 mr-1" />
                              Schedule Interview
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => handleCandidateAction(candidate.id, "shortlist")}
                              className="bg-sky-500 hover:bg-sky-600"
                            >
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Shortlist
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleCandidateAction(candidate.id, "reject")}
                              className="border-red-200 text-red-600 hover:bg-red-50"
                            >
                              <XCircle className="w-4 h-4 mr-1" />
                              Reject
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Analytics Tab */}
              <TabsContent value="analytics" className="space-y-6">
                <h2 className="text-2xl font-bold text-sky-800">Recruitment Analytics</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center text-sky-800">
                        <TrendingUp className="w-5 h-5 mr-2" />
                        Hiring Funnel
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-sky-700">Applications Received</span>
                          <span className="font-bold text-sky-800">156</span>
                        </div>
                        <Progress value={100} className="h-2" />

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-sky-700">Shortlisted</span>
                          <span className="font-bold text-sky-800">47 (30%)</span>
                        </div>
                        <Progress value={30} className="h-2" />

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-sky-700">Interviewed</span>
                          <span className="font-bold text-sky-800">25 (16%)</span>
                        </div>
                        <Progress value={16} className="h-2" />

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-sky-700">Hired</span>
                          <span className="font-bold text-green-600">23 (15%)</span>
                        </div>
                        <Progress value={15} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center text-sky-800">
                        <Clock className="w-5 h-5 mr-2" />
                        Time to Hire
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-sky-700">Average Time to Hire</span>
                          <span className="font-bold text-sky-800">18 days</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-sky-700">Fastest Hire</span>
                          <span className="font-bold text-green-600">7 days</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-sky-700">Application to Interview</span>
                          <span className="font-bold text-sky-800">5 days</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-sky-700">Interview to Offer</span>
                          <span className="font-bold text-sky-800">3 days</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sky-800">Top Universities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {["IIT Delhi", "IIT Bombay", "NIT Warangal", "BITS Pilani", "VIT Vellore"].map(
                        (university, index) => (
                          <div key={university} className="flex items-center justify-between">
                            <span className="text-sm text-sky-700">{university}</span>
                            <div className="flex items-center space-x-2">
                              <Progress value={90 - index * 15} className="w-20 h-2" />
                              <span className="text-xs font-medium text-sky-600">{25 - index * 4} applications</span>
                            </div>
                          </div>
                        ),
                      )}
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
