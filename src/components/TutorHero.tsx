
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Calendar, Clock } from "lucide-react";

const TutorHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                  5.0 • 127 reviews
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Top Tutor
                </Badge>
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
                Sarah K.
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                Mathematics & Physics Expert
              </p>
              
              <p className="text-lg text-blue-100 max-w-lg leading-relaxed">
                Passionate educator with 8+ years of experience helping students excel in STEM subjects. 
                Specialized in making complex concepts simple and engaging.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-200" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-200" />
                <span>Available Today</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-200" />
                <span>Response within 1 hour</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-blue-200" />
                <span>500+ lessons taught</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8">
                Book a Lesson
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Send Message
              </Button>
            </div>
          </div>
          
          <div className="relative lg:justify-self-end animate-scale-in">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full blur-3xl opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b494?w=400&h=400&fit=crop&crop=face"
                alt="Sarah K."
                className="relative w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                Online
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorHero;
