import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserIcon } from "lucide-react";
import Link from "next/link";

export default function EmployeesStats() {
  const totalEmployees = 100;

  return (
    <div className="grid lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Total employees</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between items-center">
          <div className="flex gap-2">
            <UserIcon />
            <div className="text-5xl font-bold">{totalEmployees}</div>
          </div>
          <div>
            <Button size="lg" asChild>
              <Link href="/dashboard/employees">View all</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>Card 2</Card>
      <Card>Card 3</Card>
    </div>
  );
}
