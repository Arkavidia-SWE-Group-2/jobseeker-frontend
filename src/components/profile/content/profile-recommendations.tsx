import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Plus } from "lucide-react";

interface Recommendation {
  id: number;
  author: {
    name: string;
    role: string;
    company: string;
    avatar: string;
  };
  relationship: string;
  content: string;
  date: string;
}

export default function ProfileRecommendations() {
  const recommendations: Recommendation[] = [
    {
      id: 1,
      author: {
        name: "Sarah Johnson",
        role: "Product Manager",
        company: "Tech Company",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      relationship: "Managed John directly",
      content:
        "John is an exceptional frontend developer who consistently delivers high-quality work. His attention to detail and commitment to creating responsive, accessible interfaces has significantly improved our product. He's also a great team player who's always willing to help others.",
      date: "June 15, 2023",
    },
    {
      id: 2,
      author: {
        name: "Michael Chen",
        role: "Senior Software Engineer",
        company: "Web Solutions Inc",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      relationship: "Worked with John on the same team",
      content:
        "I had the pleasure of working with John for over two years, and I was consistently impressed by his technical skills and problem-solving abilities. He has a deep understanding of frontend technologies and always stays up-to-date with the latest trends. John would be an asset to any development team.",
      date: "March 10, 2022",
    },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">Recommendations</CardTitle>
        <Button variant="ghost" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Request
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {recommendations.map((recommendation) => (
          <div key={recommendation.id} className="space-y-2">
            <div className="flex items-start gap-3">
              <Avatar>
                <AvatarImage
                  src={recommendation.author.avatar}
                  alt={recommendation.author.name}
                />
                <AvatarFallback>
                  {recommendation.author.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{recommendation.author.name}</h3>
                <p className="text-sm">
                  {recommendation.author.role} at{" "}
                  {recommendation.author.company}
                </p>
                <p className="text-xs text-gray-500">
                  {recommendation.relationship}
                </p>
                <p className="text-xs text-gray-500">{recommendation.date}</p>
              </div>
            </div>
            <p className="text-sm">{recommendation.content}</p>
          </div>
        ))}

        <Button variant="outline" className="w-full">
          <MessageSquare className="h-4 w-4 mr-2" />
          Give a recommendation
        </Button>
      </CardContent>
    </Card>
  );
}
