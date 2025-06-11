
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const TutorSkills = () => {
  const subjects = [
    { name: "Calculus", level: 95, students: 156 },
    { name: "Linear Algebra", level: 92, students: 134 },
    { name: "Physics", level: 88, students: 98 },
    { name: "Statistics", level: 85, students: 76 },
  ];

  const specializations = [
    "AP Calculus", "SAT Math", "ACT Math", "College Algebra", 
    "Trigonometry", "Pre-Calculus", "Physics C", "Quantum Mechanics"
  ];

  const certifications = [
    "Master's in Mathematics - Stanford University",
    "Certified Math Teacher - California",
    "Educational Technology Certificate",
    "TESOL Certification for Math Instruction"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Expertise & Qualifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive knowledge across multiple STEM disciplines with proven track record of student success
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Subject Expertise</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {subjects.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{subject.name}</span>
                    <span className="text-sm text-muted-foreground">{subject.students} students</span>
                  </div>
                  <Progress value={subject.level} className="h-2" />
                  <div className="text-right text-sm text-muted-foreground">
                    {subject.level}% mastery
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Specializations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-sm py-1 px-3 bg-blue-50 text-blue-700 hover:bg-blue-100"
                  >
                    {spec}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Certifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700 leading-relaxed">{cert}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TutorSkills;
