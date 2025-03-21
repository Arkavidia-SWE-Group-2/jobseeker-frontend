import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, MessageSquare, ThumbsUp, Users } from "lucide-react";

export default function NotificationsSection() {
  const notifications = [
    {
      id: 1,
      type: "like",
      person: {
        name: "Emma Thompson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content: "liked your post about React performance optimization",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "comment",
      person: {
        name: "James Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        'commented on your article: "Great insights! I\'ve been using these techniques for a while."',
      time: "5 hours ago",
    },
    {
      id: 3,
      type: "connection",
      person: {
        name: "Sophia Garcia",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content: "accepted your connection request",
      time: "1 day ago",
    },
    {
      id: 4,
      type: "job",
      person: {
        name: "Tech Innovations Inc",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "posted a job you might be interested in: Senior Frontend Developer",
      time: "2 days ago",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "like":
        return <ThumbsUp className="h-4 w-4 text-blue-600" />;
      case "comment":
        return <MessageSquare className="h-4 w-4 text-green-600" />;
      case "connection":
        return <Users className="h-4 w-4 text-purple-600" />;
      case "job":
        return <Briefcase className="h-4 w-4 text-orange-600" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Notifications</h2>
        <Button variant="outline" size="sm">
          Mark all as read
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="divide-y">
            {notifications.map((notification) => (
              <div key={notification.id} className="p-4 hover:bg-gray-50">
                <div className="flex gap-3">
                  <div className="relative">
                    <Avatar>
                      <AvatarImage
                        src={notification.person.avatar}
                        alt={notification.person.name}
                      />
                      <AvatarFallback>
                        {notification.person.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 rounded-full bg-white p-0.5">
                      {getIcon(notification.type)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-semibold">
                        {notification.person.name}
                      </span>{" "}
                      {notification.content}
                    </p>
                    <span className="text-xs text-gray-500">
                      {notification.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
