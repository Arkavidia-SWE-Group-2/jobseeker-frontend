"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  BarChart3,
  Check,
  ChevronDown,
  ChevronUp,
  Eye,
  Plus,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

export default function ProfileDashboard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [timeRange, setTimeRange] = useState<"week" | "month" | "year">("week");

  // Mock data for different time ranges
  const data = {
    week: {
      profileViews: 324,
      postImpressions: 1203,
      searchAppearances: 76,
      profileViewsChange: 28,
      postImpressionsChange: 42,
      searchAppearancesChange: 12,
    },
    month: {
      profileViews: 1250,
      postImpressions: 4800,
      searchAppearances: 320,
      profileViewsChange: 15,
      postImpressionsChange: 22,
      searchAppearancesChange: 8,
    },
    year: {
      profileViews: 15600,
      postImpressions: 58000,
      searchAppearances: 3800,
      profileViewsChange: 65,
      postImpressionsChange: 78,
      searchAppearancesChange: 45,
    },
  };

  const currentData = data[timeRange];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">Your Dashboard</CardTitle>
        <div className="flex items-center gap-2">
          <div className="flex border rounded-md overflow-hidden">
            <Button
              variant={timeRange === "week" ? "default" : "ghost"}
              size="sm"
              className="rounded-none h-8"
              onClick={() => setTimeRange("week")}
            >
              Week
            </Button>
            <Button
              variant={timeRange === "month" ? "default" : "ghost"}
              size="sm"
              className="rounded-none h-8"
              onClick={() => setTimeRange("month")}
            >
              Month
            </Button>
            <Button
              variant={timeRange === "year" ? "default" : "ghost"}
              size="sm"
              className="rounded-none h-8"
              onClick={() => setTimeRange("year")}
            >
              Year
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="text-blue-600">
            Private to you
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="space-y-2 cursor-help">
                  <div className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-blue-600" />
                    <h3 className="font-semibold">Profile views</h3>
                  </div>
                  <p className="text-2xl font-bold">
                    {currentData.profileViews.toLocaleString()}
                  </p>
                  <p className="text-sm text-green-600 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>
                      +{currentData.profileViewsChange}% from last {timeRange}
                    </span>
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>People who viewed your profile in the last {timeRange}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="space-y-2 cursor-help">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    <h3 className="font-semibold">Post impressions</h3>
                  </div>
                  <p className="text-2xl font-bold">
                    {currentData.postImpressions.toLocaleString()}
                  </p>
                  <p className="text-sm text-green-600 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>
                      +{currentData.postImpressionsChange}% from last{" "}
                      {timeRange}
                    </span>
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  Number of times your posts were viewed in the last {timeRange}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="space-y-2 cursor-help">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    <h3 className="font-semibold">Search appearances</h3>
                  </div>
                  <p className="text-2xl font-bold">
                    {currentData.searchAppearances.toLocaleString()}
                  </p>
                  <p className="text-sm text-green-600 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>
                      +{currentData.searchAppearancesChange}% from last{" "}
                      {timeRange}
                    </span>
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  How many times you appeared in search results in the last{" "}
                  {timeRange}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {isExpanded && (
          <div className="mt-6 pt-6 border-t">
            <h3 className="font-semibold mb-4">Profile Completion</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Profile strength</span>
                  <span>85%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Add a profile photo</h4>
                    <p className="text-xs text-gray-500">
                      Profiles with photos get 21x more views
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                    <Plus className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Add your industry</h4>
                    <p className="text-xs text-gray-500">
                      Members with industry get 9x more profile views
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Add work experience</h4>
                    <p className="text-xs text-gray-500">
                      Members with work experience get 5x more connection
                      requests
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Add education</h4>
                    <p className="text-xs text-gray-500">
                      Members with education get 11x more profile views
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4 mr-2" />
                Show less
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-2" />
                Show more
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
