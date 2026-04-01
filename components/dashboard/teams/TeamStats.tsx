import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecksIcon } from "lucide-react";

export default function TeamsStats() {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>Total teams</Card>
        <Card>
          <span>Team leaders</span>
        </Card>
        <Card>
          <span>Team distribution</span>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <ListChecksIcon />
            <span>Support tickets resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">Support Tickets</CardContent>
      </Card>
    </>
  );
}
