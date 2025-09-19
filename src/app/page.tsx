import Heading from "@/components/Heading";
import { ticketsPath } from "@/paths";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8  ">
      <Heading title="Home Page" description="Your Home place to start" />
      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath()} className="underline">
          Go to tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
