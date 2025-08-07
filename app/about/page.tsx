import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Award, Briefcase, GraduationCap, Code, Linkedin, Github, Mail } from "lucide-react"

export default function AboutPage() {
  const skills = {
    Frontend: ["Typescript","Javascript","CSS", "HTML"],
    Backend: ["Python","Java","C","SQL"],
    "Tools & DevOps": ["Git"],
    "Currently Learning": ["Next.js","React","Tailwind CSS"],
  }

  // TO ADD NEW EXPERIENCE: Copy this template and add it to the experience array above
  // {
  //   title: "Your Job Title",
  //   company: "Company Name", 
  //   period: "Start Date - End Date",
  //   description: "Brief description of your role and responsibilities",
  //   keyContributions: [
  //     "Specific contribution or achievement 1",
  //     "Specific contribution or achievement 2", 
  //     "Specific contribution or achievement 3",
  //   ],
  // },
  
  const experience = [
    {
      title: "Python Developer",
      company: "AI @ DSCubed",
      period: "June 2025 - Aug 2025",
      description:
        "Built backend tools and AI integrations as part of the DSCubed Winter Program, focused on enhancing productivity and automation within a real-world team environment.",
      keyContributions: [
        "Developed a modular AI-powered command-line assistant using Python and OpenAI's GPT-4o-mini, featuring secure .env configuration, async function calling, and a dynamic plugin system",
        "Automated onboarding workflows for new members by streamlining account setup, access permissions, and resource allocation, improving operational efficiency across the team",
      ],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computing and Software Systems",
      school: "University of Melbourne",
      period: "2024 - 2027",
      description:
        "Focused on software engineering, data structures, and algorithms. High Distinction average.",
      relevant: ["Data Structures & Algorithms", "Database Systems", "Object-Oriented Programming", "Foundations of Algorithms", "Foundations of Computing"],
    },
  ]

  // TO ADD NEW CERTIFICATION: Copy this template and add it to the certifications array below
  // {
  //   name: "Certification Name",
  //   issuer: "Issuing Organization",
  //   date: "Year",
  //   credentialId: "CERT-ID-YYYY",
  // },
  
  const certifications: {
    name: string;
    issuer: string;
    date: string;
    credentialId: string;
  }[] = []

  // TO ADD NEW ACHIEVEMENT: Copy this template and add it to the achievements array below
  // {
  //   title: "Achievement Title",
  //   description: "Brief description of your achievement",
  //   icon: <IconName className="w-5 h-5" />,
  // },
  
  const achievements: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[] = []

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
                Blog
              </Link>
              <Button asChild>
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            {/* Replace the gradient circle div with: */}
            <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                              <img
                  src="/pfp.png"
                  alt="Karen Deng - Full-Stack Developer"
                  className="w-full h-full object-cover"
                />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Pursuing a Bachelor of Science (Computing and Software Systems) at The University of Melbourne, 
              I have experience building AI-powered tools, developing with modern Python practices, and creating 
              modular, secure systems. I have contributed to real-world projects through student organisations, 
              combining technical skills with teamwork, communication, and a drive to deliver solutions with positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2 w-4 h-4" />
                  Download Resume
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://www.linkedin.com/in/karen-deng-795709322" target="_blank">
                  <Linkedin className="mr-2 w-4 h-4" />
                  LinkedIn Profile
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-600">{job.company}</CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center">
                      <Briefcase className="w-3 h-3 mr-1" />
                      {job.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Contributions:</h4>
                    <ul className="space-y-1">
                      {job.keyContributions.map((contribution, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <span className="text-blue-600 mr-2">•</span>
                          {contribution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`grid gap-12 ${certifications.length > 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-1'}`}>
            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
              {education.map((edu, index) => (
                <Card key={index} className="mb-6">
                  <CardHeader>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">{edu.school}</CardDescription>
                    <Badge variant="outline" className="w-fit flex items-center">
                      <GraduationCap className="w-3 h-3 mr-1" />
                      {edu.period}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{edu.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevant.map((course) => (
                          <Badge key={course} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            {certifications.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Certifications</h2>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                          <Badge variant="outline">{cert.date}</Badge>
                        </div>
                        <p className="text-blue-600 font-medium mb-2">{cert.issuer}</p>
                        <p className="text-sm text-gray-500">ID: {cert.credentialId}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Achievements */}
      {achievements.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Notable Achievements</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {achievement.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-700 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-blue-100 mb-8 text-lg">
            I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                <Mail className="mr-2 w-4 h-4" />
                Get In Touch
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="https://github.com/keyuedeng" target="_blank">
                <Github className="mr-2 w-4 h-4" />
                View GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
