import { cn } from "@/lib/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export default function SkeletonStaffCard({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div
      className={cn(
        `flex flex-col items-center justify-center gap-4 border-2 rounded-box p-8 bg-base-300 hover:scale-105 transition duration-300`,
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="h-12.5 w-12.5 rounded-full bg-base-200 skeleton" />
        <div className="h-6 w-18.75 rounded-lg bg-base-200 skeleton" />
      </div>
      <hr className={`w-full h-1 bg-base-100 rounded-full`} />
      <div
        className={`rounded-full  bg-base-300 border-2 px-4 py-1 font-semibold`}
      >
        <div className="h-8.75 w-25.75 rounded-full bg-base-200 skeleton" />
      </div>
      <hr className={`w-full h-1 bg-base-100 rounded-full`} />
      <div className="h-18 w-full rounded-lg bg-base-200 skeleton" />
    </div>
  );
}
