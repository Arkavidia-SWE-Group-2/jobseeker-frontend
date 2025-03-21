"use client";

import { mockMessages, mockUsers } from "@/lib/mock-data";
import type { Message, User } from "@/lib/types";
import { useEffect, useState } from "react";
import ChatArea from "./chat-area";
import UserSidebar from "./user-sidebar";

export default function ChatInterface() {
  const [users] = useState<User[]>(mockUsers);
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [currentUser] = useState<User>(mockUsers[0]);
  const [selectedChat, setSelectedChat] = useState<User | null>(null);

  // Select first user as default chat
  useEffect(() => {
    if (users.length > 0 && !selectedChat) {
      setSelectedChat(users[1]);
    }
  }, [users, selectedChat]);

  const sendMessage = (content: string) => {
    if (!selectedChat || !content.trim()) return;

    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      senderId: currentUser.id,
      receiverId: selectedChat.id,
      content,
      timestamp: new Date().toISOString(),
      read: false,
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="flex w-full h-screen bg-gray-100">
      <UserSidebar
        users={users.filter((user) => user.id !== currentUser.id)}
        selectedChat={selectedChat}
        onSelectChat={setSelectedChat}
        messages={messages}
        currentUserId={currentUser.id}
      />
      {selectedChat ? (
        <ChatArea
          currentUser={currentUser}
          selectedUser={selectedChat}
          messages={messages.filter(
            (msg) =>
              (msg.senderId === currentUser.id &&
                msg.receiverId === selectedChat.id) ||
              (msg.senderId === selectedChat.id &&
                msg.receiverId === currentUser.id),
          )}
          onSendMessage={sendMessage}
        />
      ) : (
        <div className="flex-1 flex items-center justify-center bg-white">
          <p className="text-gray-500">
            Select a conversation to start chatting
          </p>
        </div>
      )}
    </div>
  );
}
