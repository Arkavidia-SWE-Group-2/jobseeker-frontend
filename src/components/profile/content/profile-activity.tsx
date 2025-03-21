import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Repeat, Send, ThumbsUp } from "lucide-react";

interface Activity {
  id: number;
  type: "post" | "share" | "comment" | "like";
  content: string;
  timeAgo: string;
  likes: number;
  comments: number;
}

export default function ProfileActivity() {
  const activities: Activity[] = [
    {
      id: 1,
      type: "post",
      content:
        "Just published a new article on optimizing React performance. Check it out and let me know your thoughts!",
      timeAgo: "2 days ago",
      likes: 48,
      comments: 12,
    },
    {
      id: 2,
      type: "share",
      content:
        "Great resource for anyone looking to improve their TypeScript skills. This helped me a lot when I was getting started.",
      timeAgo: "1 week ago",
      likes: 32,
      comments: 5,
    },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">Activity</CardTitle>
        <Button variant="ghost" size="sm">
          See all
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="space-y-3">
            <div className="flex items-start gap-3">
              <Avatar>
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="John Doe"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">John Doe</h3>
                  <span className="text-xs text-gray-500">
                    {activity.timeAgo}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  {activity.type === "post"
                    ? "Posted"
                    : activity.type === "share"
                      ? "Shared a post"
                      : activity.type === "comment"
                        ? "Commented on a post"
                        : "Liked a post"}
                </p>
              </div>
            </div>

            <p>{activity.content}</p>

            <div className="flex justify-between text-sm text-gray-500">
              <span>{activity.likes} likes</span>
              <span>{activity.comments} comments</span>
            </div>

            <div className="flex justify-between border-t pt-3">
              <Button variant="ghost" size="sm">
                <ThumbsUp className="h-4 w-4 mr-2" />
                Like
              </Button>
              <Button variant="ghost" size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                Comment
              </Button>
              <Button variant="ghost" size="sm">
                <Repeat className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm">
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
