import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { descriptionCardColor } from "@/types/types";
import { ReactNode } from "react";

export default function DescriptionCard({
  title,
  color,
  children
}: {
  title: string;
  color: descriptionCardColor;
  children: ReactNode
}) {
  return (
    <Card className={`border-${color}-400 bg-${color}-950/50 p-8 flex-1 min-w-full sm:min-w-100`}>
      <CardHeader>
        <CardTitle className={`text-${color}-400 text-xl`}>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
