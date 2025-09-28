"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Users,
  Building2,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Target,
  Zap,
  Shield,
  Globe,
} from "lucide-react"

export default function LandingPage() {
  const [selectedRole, setSelectedRole] = useState<string>("")

  const roles = [
    {
      id: "student",
      title: "Student",
      icon: GraduationCap,
      description: "Find internships and placements with smart matching",
      features: ["Smart Job Matching", "Skill Gap Analysis", "One-Click Apply", "Interview Scheduler"],
    },
    {
      id: "mentor",
      title: "Mentor",
      icon: Users,
      description: "Guide students and approve applications",
      features: ["Application Review", "Student Progress Tracking", "Mentorship Tools", "Performance Analytics"],
    },
    {
      id: "recruiter",
      title: "Recruiter",
      icon: Building2,
      description: "Post jobs and find verified candidates",
      features: ["Job Posting", "Candidate Shortlisting", "Interview Management", "Talent Analytics"],
    },
    {
      id: "placement-cell",
      title: "Placement Cell",
      icon: BarChart3,
      description: "Monitor placement progress and analytics",
      features: ["Real-time Analytics", "Placement Tracking", "Performance Reports", "Institution Insights"],
    },
  ]

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId)
    // Navigate to role-specific dashboard
    window.location.href = `/${roleId}`
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">CampusConnect</span>
            </div>
            <Badge variant="secondary" className="text-xs">
              Smart India Hackathon 2025
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Unified Campus <span className="gradient-text">Placement Portal</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Streamline student internships and placements with AI-powered matching, real-time analytics, and seamless
              collaboration between all stakeholders.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { icon: Target, label: "Smart Matching" },
                { icon: Zap, label: "One-Click Apply" },
                { icon: Shield, label: "Verified Profiles" },
                { icon: Globe, label: "Real-time Analytics" },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center p-4 glass-card rounded-lg">
                  <feature.icon className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Role Selection */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Role</h2>
            <p className="text-muted-foreground">Select your role to access personalized features and dashboard</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {roles.map((role) => {
              const Icon = role.icon
              return (
                <Card
                  key={role.id}
                  className="glass-card hover:border-primary/50 transition-all duration-300 cursor-pointer group"
                  onClick={() => handleRoleSelect(role.id)}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{role.title}</CardTitle>
                    <CardDescription className="text-sm">{role.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {role.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground bg-transparent"
                      variant="outline"
                    >
                      Access Dashboard
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Login/Signup Section */}
      <section className="py-16 px-4 bg-card/20">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto">
            <Card className="glass-card">
              <CardHeader className="text-center">
                <CardTitle>Get Started</CardTitle>
                <CardDescription>Sign in to your account or create a new one</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                  </TabsList>

                  <TabsContent value="login" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="student@university.edu" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" />
                    </div>
                    <Button className="w-full">Sign In</Button>
                  </TabsContent>

                  <TabsContent value="signup" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-signup">Email</Label>
                      <Input id="email-signup" type="email" placeholder="student@university.edu" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password-signup">Password</Label>
                      <Input id="password-signup" type="password" />
                    </div>
                    <Button className="w-full">Create Account</Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-sm">© 2025 Team Binary Blades - Smart India Hackathon 2025</p>
          <p className="text-muted-foreground text-xs mt-2">Problem Statement ID: 25106 | Smart Education Theme</p>
        </div>
      </footer>
    </div>
  )
}
