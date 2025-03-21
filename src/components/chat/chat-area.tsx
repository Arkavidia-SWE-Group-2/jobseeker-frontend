"use client";

import type React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Message, User } from "@/lib/types";
import { formatTime } from "@/lib/utils";
import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ChatAreaProps {
  currentUser: User;
  selectedUser: User;
  messages: Message[];
  onSendMessage: (content: string) => void;
}

export default function ChatArea({
  currentUser,
  selectedUser,
  messages,
  onSendMessage,
}: ChatAreaProps) {
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Chat header */}
      <div className="flex items-center p-4 border-b border-gray-200">
        <Avatar className="h-10 w-10">
          <AvatarImage src={selectedUser.avatar} alt={selectedUser.name} />
          <AvatarFallback>
            {selectedUser.name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="ml-3">
          <h3 className="font-medium text-gray-900">{selectedUser.name}</h3>
          <p className="text-sm text-gray-500">
            {selectedUser.title} • {selectedUser.online ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        <div className="space-y-4">
          {messages.map((message) => {
            const isCurrentUser = message.senderId === currentUser.id;

            return (
              <div
                key={message.id}
                className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex ${isCurrentUser ? "flex-row-reverse" : "flex-row"} items-end`}
                >
                  {!isCurrentUser && (
                    <Avatar className="h-8 w-8 flex-shrink-0">
                      <AvatarImage
                        src={selectedUser.avatar}
                        alt={selectedUser.name}
                      />
                      <AvatarFallback>
                        {selectedUser.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  )}

                  <div
                    className={`mx-2 max-w-md px-4 py-2 rounded-lg ${
                      isCurrentUser
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-900"
                    }`}
                  >
                    <p>{message.content}</p>
                    <span
                      className={`text-xs block mt-1 ${isCurrentUser ? "text-blue-100" : "text-gray-500"}`}
                    >
                      {formatTime(new Date(message.timestamp))}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message input */}
      <form
        onSubmit={handleSendMessage}
        className="p-4 border-t border-gray-200"
      >
        <div className="flex items-center">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 mr-2"
          />
          <Button type="submit" size="icon" disabled={!newMessage.trim()}>
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </form>
    </div>
  );
}
