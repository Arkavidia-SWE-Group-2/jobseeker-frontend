"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Edit, Save, X } from "lucide-react";
import { useState } from "react";

export default function ProfileAbout() {
  const [isEditing, setIsEditing] = useState(false);
  const [about, setAbout] = useState(
    "I'm a passionate frontend developer with over 8 years of experience building responsive, user-friendly web applications. Specialized in React, TypeScript, and modern JavaScript frameworks.\n\nCurrently working on improving web performance and accessibility standards at Tech Company. Always looking to connect with like-minded professionals in the tech industry.",
  );
  const [editedAbout, setEditedAbout] = useState(about);

  const handleSave = () => {
    setAbout(editedAbout);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedAbout(about);
    setIsEditing(false);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">About</CardTitle>
        {!isEditing ? (
          <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)}>
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" onClick={handleCancel}>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button variant="default" size="sm" onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        )}
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <Textarea
            value={editedAbout}
            onChange={(e) => setEditedAbout(e.target.value)}
            className="min-h-[150px]"
          />
        ) : (
          <p className="whitespace-pre-line">{about}</p>
        )}
      </CardContent>
    </Card>
  );
}
