import type { Message, User } from "./types";

export const mockUsers: User[] = [
  {
    id: "user-1",
    name: "You",
    title: "Software Developer",
    avatar: "/placeholder.svg?height=200&width=200",
    online: true,
  },
  {
    id: "user-2",
    name: "Sarah Johnson",
    title: "Product Manager",
    avatar: "/placeholder.svg?height=200&width=200",
    online: true,
  },
  {
    id: "user-3",
    name: "Michael Chen",
    title: "UX Designer",
    avatar: "/placeholder.svg?height=200&width=200",
    online: false,
  },
  {
    id: "user-4",
    name: "Emily Rodriguez",
    title: "Marketing Director",
    avatar: "/placeholder.svg?height=200&width=200",
    online: true,
  },
  {
    id: "user-5",
    name: "David Kim",
    title: "Data Scientist",
    avatar: "/placeholder.svg?height=200&width=200",
    online: false,
  },
];

export const mockMessages: Message[] = [
  {
    id: "msg-1",
    senderId: "user-2",
    receiverId: "user-1",
    content:
      "Hi there! I saw your profile and wanted to connect about a potential project.",
    timestamp: "2025-03-12T08:30:00Z",
    read: true,
  },
  {
    id: "msg-2",
    senderId: "user-1",
    receiverId: "user-2",
    content:
      "Hello Sarah! I'd be happy to discuss. What kind of project are you working on?",
    timestamp: "2025-03-12T08:35:00Z",
    read: true,
  },
  {
    id: "msg-3",
    senderId: "user-2",
    receiverId: "user-1",
    content:
      "We're launching a new product and need help with the frontend development. Are you available for a call tomorrow?",
    timestamp: "2025-03-12T08:40:00Z",
    read: true,
  },
  {
    id: "msg-4",
    senderId: "user-1",
    receiverId: "user-2",
    content:
      "That sounds interesting! Yes, I'm available tomorrow afternoon. What time works for you?",
    timestamp: "2025-03-12T08:45:00Z",
    read: true,
  },
  {
    id: "msg-5",
    senderId: "user-2",
    receiverId: "user-1",
    content:
      "Great! How about 2 PM? I'll send you a calendar invite with the details.",
    timestamp: "2025-03-12T08:50:00Z",
    read: false,
  },
  {
    id: "msg-6",
    senderId: "user-3",
    receiverId: "user-1",
    content:
      "Hey, I wanted to get your feedback on some new design mockups when you have a moment.",
    timestamp: "2025-03-11T15:20:00Z",
    read: true,
  },
  {
    id: "msg-7",
    senderId: "user-1",
    receiverId: "user-3",
    content: "Sure thing, Michael. I can take a look at them this afternoon.",
    timestamp: "2025-03-11T15:25:00Z",
    read: true,
  },
  {
    id: "msg-8",
    senderId: "user-4",
    receiverId: "user-1",
    content:
      "Hello! We're organizing a tech conference next month and would love to have you as a speaker. Would you be interested?",
    timestamp: "2025-03-10T11:15:00Z",
    read: true,
  },
];
