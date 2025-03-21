import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NetworkSection() {
  const connections = [
    {
      id: 1,
      name: "Sarah Williams",
      role: "UX Designer at Creative Agency",
      avatar: "/placeholder.svg?height=60&width=60",
      mutualConnections: 12,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Frontend Developer at Web Solutions",
      avatar: "/placeholder.svg?height=60&width=60",
      mutualConnections: 8,
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Product Manager at Tech Innovations",
      avatar: "/placeholder.svg?height=60&width=60",
      mutualConnections: 15,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Your Network</h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-4 border rounded-lg">
                <span className="text-2xl font-bold text-blue-600">412</span>
                <span className="text-sm text-gray-500">Connections</span>
              </div>
              <div className="flex flex-col items-center p-4 border rounded-lg">
                <span className="text-2xl font-bold text-blue-600">28</span>
                <span className="text-sm text-gray-500">Pending Invites</span>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4">
              Manage Your Network
            </Button>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">People You May Know</h2>
        <div className="space-y-4">
          {connections.map((connection) => (
            <Card key={connection.id}>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src={connection.avatar}
                      alt={connection.name}
                    />
                    <AvatarFallback>{connection.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold">{connection.name}</h4>
                    <p className="text-sm text-gray-500">{connection.role}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {connection.mutualConnections} mutual connections
                    </p>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" className="flex-1">
                        Connect
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Ignore
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
