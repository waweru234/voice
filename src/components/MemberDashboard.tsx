"use client"

import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileText, BookOpen, Scale, Award, LogOut } from "lucide-react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const MemberDashboard = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  if (!user) {
    return null
  }

  const documents = [
    {
      title: "Party Constitution",
      description: "The official constitution of the Forty Seven Voices of Kenya Party",
      icon: <BookOpen className="h-8 w-8 text-party-hotpink" />,
      path: "/documents/VOICES PARTY CONSTITUTION.pdf",
    },
    {
      title: "Party Manifesto",
      description: "Our vision and commitments for Kenya's future",
      icon: <FileText className="h-8 w-8 text-party-green" />,
      path: "/documents/47 VOICES MANIFESTO 2027-2032.pdf",
    },
    {
      title: "Election Rules",
      description: "Guidelines and procedures for party elections and nominations",
      icon: <Scale className="h-8 w-8 text-party-gold" />,
      path: "/documents/Election & Nomination Rules of The Voices  Party final amended cover.pdf",
    },
    {
      title: "Statement of Ideology",
      description: "The core principles and ideology of our party",
      icon: <Award className="h-8 w-8 text-party-lightblue" />,
      path: "/documents/Statement of Ideology  of 47 voices.pdf",
    },
  ]

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  const getMembershipTypeColor = () => {
    switch (user.membershipType) {
      case "platinum":
        return "bg-gray-300 text-gray-800"
      case "gold":
        return "bg-yellow-100 text-yellow-800"
      case "silver":
        return "bg-gray-100 text-gray-800"
      case "bronze":
        return "bg-amber-100 text-amber-800"
      default:
        return "bg-green-100 text-green-800"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Member Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user.fullName}</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2" onClick={handleLogout}>
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Membership Number</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-party-hotpink">{user.membershipNumber}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Constituency</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">{user.constituency}</p>
            <p className="text-sm text-gray-500">{user.county} County</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Membership Type</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMembershipTypeColor()}`}>
              {user.membershipType.charAt(0).toUpperCase() + user.membershipType.slice(1)}
            </span>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">Party Documents</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map((doc, index) => (
          <motion.div
            key={doc.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  {doc.icon}
                  <div>
                    <CardTitle>{doc.title}</CardTitle>
                    <CardDescription>{doc.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardFooter>
                <a href={doc.path} download className="w-full">
                  <Button className="w-full flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default MemberDashboard
