// import { Card, CardContent, CardHeader } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Search } from "lucide-react"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// export default function MessagesSection() {
//   const conversations = [
//     {
//       id: 1,
//       name: "David Wilson",
//       avatar: "/placeholder.svg?height=40&width=40",
//       lastMessage: "Thanks for the information. I'll get back to you soon.",
//       time: "10:30 AM",
//       unread: true,
//     },
//     {
//       id: 2,
//       name: "Lisa Johnson",
//       avatar: "/placeholder.svg?height=40&width=40",
//       lastMessage: "Let's schedule a meeting for next week to discuss the project.",
//       time: "Yesterday",
//       unread: false,
//     },
//     {
//       id: 3,
//       name: "Robert Smith",
//       avatar: "/placeholder.svg?height=40&width=40",
//       lastMessage: "I've reviewed your proposal and have some feedback.",
//       time: "2 days ago",
//       unread: false,
//     },
//   ]

//   return (
//     <div>
//       <Card>
//         <CardHeader className="pb-3">
//           <div className="flex justify-between items-center">
//             <h2 className="text-xl font-semibold">Messaging</h2>
//             <Button variant="ghost" size="sm">
//               <Search className="h-4 w-4 mr-2" />
//               Search
//             </Button>
//           </div>
//         </CardHeader>
//         <CardContent className="p-0">
//           <div className="divide-y">
//             {conversations.map((conversation) => (
//               <div
//                 key={conversation.id}
//                 className={`p-4 hover:bg-gray-50 cursor-pointer ${conversation.unread ? "bg-blue-50" : ""}`}
//               >
//                 <div className="flex gap-3">
//                   <Avatar>
//                     <AvatarImage src={conversation.avatar} alt={conversation.name} />
//                     <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
//                   </Avatar>
//                   <div className="flex-1 min-w-0">
//                     <div className="flex justify-between items-start">
//                       <h4 className={`font-medium truncate ${conversation.unread ? "font-semibold" : ""}`}>
//                         {conversation.name}
//                       </h4>
//                       <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{conversation.time}</span>
//                     </div>
//                     <p
//                       className={`text-sm truncate ${conversation.unread ? "font-medium text-gray-900" : "text-gray-500"}`}
//                     >
//                       {conversation.lastMessage}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

