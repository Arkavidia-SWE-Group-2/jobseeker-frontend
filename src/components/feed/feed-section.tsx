"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  MessageSquare,
  Repeat,
  Send,
  ThumbsUp,
  Video,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Post {
  id: number;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  timeAgo: string;
  content: string;
  likes: number;
  comments: Comment[];
  isLiked: boolean;
}

interface Comment {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  timeAgo: string;
}

export default function FeedSection() {
  const [postContent, setPostContent] = useState("");
  const [showPostOptions, setShowPostOptions] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: {
        name: "Jane Smith",
        role: "Product Manager at Innovation Inc",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      timeAgo: "2h",
      content:
        "Excited to announce that we've just launched our new product! It's been months of hard work, but the team pulled through. Check it out at example.com",
      likes: 142,
      isLiked: false,
      comments: [
        {
          id: 1,
          author: {
            name: "Alex Johnson",
            avatar: "/placeholder.svg?height=32&width=32",
          },
          content: "Congratulations! The product looks amazing.",
          timeAgo: "1h",
        },
      ],
    },
    {
      id: 2,
      author: {
        name: "Alex Johnson",
        role: "Software Engineer at Tech Solutions",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      timeAgo: "5h",
      content:
        "Just finished a great workshop on React performance optimization. Here are my key takeaways:\n\n1. Always use React.memo for pure components\n2. Optimize your renders with useMemo and useCallback\n3. Be mindful of your dependency arrays\n\nWhat are your favorite React optimization techniques?",
      likes: 87,
      isLiked: false,
      comments: [
        {
          id: 1,
          author: {
            name: "Sarah Williams",
            avatar: "/placeholder.svg?height=32&width=32",
          },
          content:
            "Great tips! I'd add that measuring performance before optimizing is crucial.",
          timeAgo: "3h",
        },
        {
          id: 2,
          author: {
            name: "Michael Chen",
            avatar: "/placeholder.svg?height=32&width=32",
          },
          content:
            "I've found that using the React DevTools profiler helps a lot with identifying unnecessary re-renders.",
          timeAgo: "4h",
        },
      ],
    },
  ]);

  const [commentInputs, setCommentInputs] = useState<Record<number, string>>(
    {},
  );
  const [showComments, setShowComments] = useState<Record<number, boolean>>({});

  const handlePostSubmit = () => {
    if (!postContent.trim()) return;

    const newPost: Post = {
      id: Date.now(),
      author: {
        name: "John Doe",
        role: "Software Developer at Tech Company",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      timeAgo: "Just now",
      content: postContent,
      likes: 0,
      isLiked: false,
      comments: [],
    };

    setPosts([newPost, ...posts]);
    setPostContent("");
    setShowPostOptions(false);
  };

  const handleLike = (postId: number) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            isLiked: !post.isLiked,
          };
        }
        return post;
      }),
    );
  };

  const toggleComments = (postId: number) => {
    setShowComments({
      ...showComments,
      [postId]: !showComments[postId],
    });
  };

  const handleCommentSubmit = (postId: number) => {
    if (!commentInputs[postId]?.trim()) return;

    const newComment: Comment = {
      id: Date.now(),
      author: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      content: commentInputs[postId],
      timeAgo: "Just now",
    };

    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, newComment],
          };
        }
        return post;
      }),
    );

    setCommentInputs({
      ...commentInputs,
      [postId]: "",
    });
  };

  return (
    <div className="space-y-4">
      {/* Create Post Card */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <Avatar>
              <AvatarImage
                src="/placeholder.svg?height=40&width=40"
                alt="Profile"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="What's on your mind?"
                className="resize-none min-h-[60px]"
                value={postContent}
                onChange={(e) => {
                  setPostContent(e.target.value);
                  if (e.target.value.trim() && !showPostOptions) {
                    setShowPostOptions(true);
                  }
                }}
                onFocus={() => setShowPostOptions(true)}
              />

              {showPostOptions && (
                <div className="mt-3">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Image
                          className="h-4 w-4 "
                          src="https://picsum.photos/200"
                          alt=""
                          width={20}
                          height={20}
                        />
                        Photo
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Video className="h-4 w-4" />
                        Video
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Calendar className="h-4 w-4" />
                        Event
                      </Button>
                    </div>
                    <Button
                      size="sm"
                      onClick={handlePostSubmit}
                      disabled={!postContent.trim()}
                    >
                      Post
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
        {!showPostOptions && (
          <CardFooter className="flex justify-between border-t border-gray-100 pt-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowPostOptions(true)}
            >
              <Image
                className="h-5 w-5 mr-2 "
                src="https://picsum.photos/200"
                alt=""
                width={20}
                height={20}
              />
              Photo
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowPostOptions(true)}
            >
              <Video className="h-5 w-5 mr-2" />
              Video
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowPostOptions(true)}
            >
              <Calendar className="h-5 w-5 mr-2" />
              Event
            </Button>
          </CardFooter>
        )}
      </Card>

      {/* Posts */}
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader className="pb-3">
            <div className="flex items-start gap-3">
              <Avatar>
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold">{post.author.name}</h4>
                <p className="text-sm text-gray-500">{post.author.role}</p>
                <p className="text-xs text-gray-400">{post.timeAgo}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="py-0">
            <p className="whitespace-pre-line">{post.content}</p>
          </CardContent>
          <CardFooter className="flex flex-col pt-4 border-t border-gray-100 mt-4">
            <div className="flex justify-between w-full mb-2">
              <div className="flex items-center text-sm text-gray-500">
                <ThumbsUp className="h-4 w-4 mr-1 text-blue-600 fill-blue-600" />
                <span>{post.likes} likes</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-sm text-gray-500"
                onClick={() => toggleComments(post.id)}
              >
                {post.comments.length} comments
              </Button>
            </div>

            <Separator />

            <div className="flex justify-between w-full pt-2">
              <Button
                variant={post.isLiked ? "default" : "ghost"}
                size="sm"
                className={
                  post.isLiked
                    ? "bg-blue-100 text-blue-600 hover:bg-blue-200"
                    : ""
                }
                onClick={() => handleLike(post.id)}
              >
                <ThumbsUp
                  className={`h-5 w-5 mr-2 ${post.isLiked ? "fill-blue-600" : ""}`}
                />
                {post.isLiked ? "Liked" : "Like"}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleComments(post.id)}
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Comment
              </Button>
              <Button variant="ghost" size="sm">
                <Repeat className="h-5 w-5 mr-2" />
                Repost
              </Button>
              <Button variant="ghost" size="sm">
                <Send className="h-5 w-5 mr-2" />
                Send
              </Button>
            </div>

            {/* Comments Section */}
            {showComments[post.id] && (
              <div className="w-full mt-4 space-y-4">
                {/* Comment Input */}
                <div className="flex gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="/placeholder.svg?height=32&width=32"
                      alt="Your profile"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 flex gap-2">
                    <Input
                      placeholder="Add a comment..."
                      value={commentInputs[post.id] || ""}
                      onChange={(e) =>
                        setCommentInputs({
                          ...commentInputs,
                          [post.id]: e.target.value,
                        })
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleCommentSubmit(post.id);
                        }
                      }}
                    />
                    <Button
                      size="icon"
                      onClick={() => handleCommentSubmit(post.id)}
                      disabled={!commentInputs[post.id]?.trim()}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Comments List */}
                <div className="space-y-3">
                  {post.comments.map((comment) => (
                    <div key={comment.id} className="flex gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={comment.author.avatar}
                          alt={comment.author.name}
                        />
                        <AvatarFallback>
                          {comment.author.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="bg-gray-100 rounded-lg p-3">
                          <div className="flex justify-between">
                            <h5 className="font-medium text-sm">
                              {comment.author.name}
                            </h5>
                            <span className="text-xs text-gray-500">
                              {comment.timeAgo}
                            </span>
                          </div>
                          <p className="text-sm mt-1">{comment.content}</p>
                        </div>
                        <div className="flex gap-4 mt-1 ml-2">
                          <button className="text-xs text-gray-500 hover:text-gray-700">
                            Like
                          </button>
                          <button className="text-xs text-gray-500 hover:text-gray-700">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
