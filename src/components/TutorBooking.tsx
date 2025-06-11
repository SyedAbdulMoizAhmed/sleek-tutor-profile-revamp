
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, DollarSign } from "lucide-react";

const TutorBooking = () => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const timeSlots = [
    { time: "9:00 AM", available: true },
    { time: "10:30 AM", available: false },
    { time: "1:00 PM", available: true },
    { time: "2:30 PM", available: true },
    { time: "4:00 PM", available: false },
    { time: "5:30 PM", available: true },
  ];

  const packages = [
    {
      name: "Trial Lesson",
      price: "$25",
      duration: "50 min",
      description: "Perfect for getting to know each other and assessing your needs",
      popular: false,
    },
    {
      name: "Single Lesson",
      price: "$60",
      duration: "60 min",
      description: "Comprehensive one-on-one tutoring session",
      popular: true,
    },
    {
      name: "Package (5 lessons)",
      price: "$270",
      duration: "60 min each",
      description: "Save $30 with this popular package deal",
      popular: false,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your Session
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred package and schedule a convenient time for your learning journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                Lesson Packages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                    pkg.popular 
                      ? "border-blue-500 bg-blue-50 ring-2 ring-blue-200" 
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900">{pkg.name}</h3>
                        {pkg.popular && (
                          <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{pkg.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{pkg.price}</div>
                      <div className="text-sm text-muted-foreground">{pkg.duration}</div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Available Times Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {timeSlots.map((slot, index) => (
                  <Button
                    key={index}
                    variant={selectedTime === slot.time ? "default" : "outline"}
                    disabled={!slot.available}
                    onClick={() => setSelectedTime(slot.time)}
                    className={`justify-center ${
                      !slot.available ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    {slot.time}
                  </Button>
                ))}
              </div>
              
              <div className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  Book Selected Time
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  View More Available Times
                </Button>
              </div>

              <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm text-green-700 text-center">
                  <strong>Free cancellation</strong> up to 24 hours before the lesson
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TutorBooking;
