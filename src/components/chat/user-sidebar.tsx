"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Message, User } from "@/lib/types";
import { formatDistanceToNow } from "@/lib/utils";

interface UserSidebarProps {
  users: User[];
  selectedChat: User | null;
  onSelectChat: (user: User) => void;
  messages: Message[];
  currentUserId: string;
}

export default function UserSidebar({
  users,
  selectedChat,
  onSelectChat,
  messages,
  currentUserId,
}: UserSidebarProps) {
  // Get the last message for each user
  const getLastMessage = (userId: string) => {
    return messages
      .filter(
        (msg) =>
          (msg.senderId === currentUserId && msg.receiverId === userId) ||
          (msg.senderId === userId && msg.receiverId === currentUserId),
      )
      .sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
      )[0];
  };

  // Count unread messages
  const getUnreadCount = (userId: string) => {
    return messages.filter(
      (msg) =>
        msg.senderId === userId &&
        msg.receiverId === currentUserId &&
        !msg.read,
    ).length;
  };

  return (
    <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Messaging</h2>
      </div>

      <div className="p-2">
        {users.map((user) => {
          const lastMessage = getLastMessage(user.id);
          const unreadCount = getUnreadCount(user.id);

          return (
            <div
              key={user.id}
              className={`flex items-start p-3 rounded-lg cursor-pointer transition-colors ${
                selectedChat?.id === user.id ? "bg-blue-50" : "hover:bg-gray-50"
              }`}
              onClick={() => onSelectChat(user)}
            >
              <div className="relative">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>
                    {user.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                {user.online && (
                  <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
                )}
              </div>

              <div className="ml-3 flex-1 overflow-hidden">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-medium text-gray-900 truncate">
                    {user.name}
                  </h3>
                  {lastMessage && (
                    <span className="text-xs text-gray-500">
                      {formatDistanceToNow(new Date(lastMessage.timestamp))}
                    </span>
                  )}
                </div>

                <div className="flex items-center">
                  <p
                    className={`text-sm truncate ${unreadCount > 0 ? "font-semibold text-gray-900" : "text-gray-500"}`}
                  >
                    {lastMessage
                      ? lastMessage.senderId === currentUserId
                        ? `You: ${lastMessage.content}`
                        : lastMessage.content
                      : "No messages yet"}
                  </p>

                  {unreadCount > 0 && (
                    <span className="ml-2 flex-shrink-0 h-5 w-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">
                      {unreadCount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
