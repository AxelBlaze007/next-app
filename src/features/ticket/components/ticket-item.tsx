import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import clsx from "clsx";
import { ticketpath } from "@/paths";
import { Ticket } from "../types";
import { TICKETS_ICON } from "../constants";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const detailButton = (
    <Button variant={"outline"} size="icon" asChild>
      <Link href={ticketpath(`${ticket.id}`)}>
        <LucideSquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );
  return (
    <div
      className={clsx("w-full  flex gap-x-1 ", {
        "max-w-[520px]": isDetail,
        "max-w-[420px]": !isDetail,
      })}
    >
      <Card className="w-full ">
        <CardHeader>
          <CardTitle className="flex items-center gap-x-2">
            <span>{TICKETS_ICON[ticket.status]} </span>
            <span className="text-2xl truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={clsx(" whitespace-break-spaces", {
              "line-clamp-3": !isDetail,
            })}
          >
            {ticket.content}
          </span>
        </CardContent>
      </Card>
      {isDetail ? null : (
        <div className="flex-1 flex flex-col gap-y-1">{detailButton}</div>
      )}
    </div>
  );
};

export { TicketItem };
