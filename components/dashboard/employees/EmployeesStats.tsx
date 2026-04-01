import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PartyPopperIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import cm from "@/public/images/cm.jpg";
import Image from "next/image";

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
            <Button size="xs" asChild>
              <Link href="/dashboard/employees">View all</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>Card 2</Card>
      <Card className="border-primary flex flex-col">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Employee of the month</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2 items-center">
          <Avatar>
            <Image src={cm} alt="Employee of the month avatar" />
            <AvatarFallback>CM</AvatarFallback>
          </Avatar>
          <span className="text-2xl">Colin Murray!</span>
        </CardContent>
        <CardFooter className="flex gap-2 items-center text-xs text-muted-foreground mt-auto">
          <PartyPopperIcon className="text-primary" />
          <span>Congratulations, Colin!</span>
        </CardFooter>
      </Card>
    </div>
  );
}
