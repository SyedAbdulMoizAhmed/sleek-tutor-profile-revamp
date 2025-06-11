
import { Card } from "@/components/ui/card";

const TutorStats = () => {
  const stats = [
    { number: "500+", label: "Lessons Taught", color: "text-blue-600" },
    { number: "127", label: "Student Reviews", color: "text-purple-600" },
    { number: "8+", label: "Years Experience", color: "text-green-600" },
    { number: "98%", label: "Success Rate", color: "text-orange-600" },
  ];

  return (
    <section className="py-16 -mt-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorStats;
