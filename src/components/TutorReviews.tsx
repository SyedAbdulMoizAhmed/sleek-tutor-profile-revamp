
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const TutorReviews = () => {
  const reviews = [
    {
      name: "Emma Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b494?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      date: "2 weeks ago",
      subject: "Calculus",
      review: "Sarah is absolutely incredible! She helped me go from failing calculus to getting an A-. Her explanations are so clear and she's incredibly patient. I couldn't have done it without her!"
    },
    {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      date: "1 month ago",
      subject: "Physics",
      review: "Best tutor I've ever had! Sarah makes complex physics concepts seem simple. Her teaching style is engaging and she always comes prepared with great examples."
    },
    {
      name: "Sophie Williams",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      date: "1 month ago",
      subject: "Statistics",
      review: "Sarah helped me through my statistics course with such clarity and patience. She's not just knowledgeable but also really good at explaining things in different ways until it clicks."
    },
    {
      name: "David Rodriguez",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      date: "2 months ago",
      subject: "Linear Algebra",
      review: "Exceptional tutor! Sarah's expertise in linear algebra is impressive. She helped me understand concepts I was struggling with for weeks in just a few sessions."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Students Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-900 ml-2">5.0</span>
            <span className="text-muted-foreground">• 127 reviews</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from students who've transformed their understanding with Sarah's guidance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                        <p className="text-sm text-muted-foreground">{review.subject} • {review.date}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      "{review.review}"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
            View All 127 Reviews →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TutorReviews;
