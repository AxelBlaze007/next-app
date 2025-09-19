import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

import { ticketpath } from "@/paths";
import { Ticket } from "../types";
import { TICKETS_ICON } from "../constants";

type TicketItemProps = {
  ticket: Ticket;
};

const TicketItem = ({ ticket }: TicketItemProps) => {
  return (
    <Card className="w-full max-w-[420px] ">
      <CardHeader>
        <CardTitle className="flex items-center gap-x-2">
          <span>{TICKETS_ICON[ticket.status]} </span>
          <span className="text-2xl truncate">{ticket.title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <span className="line-clamp-3 whitespace-break-spaces">
          {ticket.content}
        </span>
      </CardContent>
      <CardFooter>
        <Link
          href={ticketpath(`${ticket.id}`)}
          className="text-sm text-blue-600"
        >
          View
        </Link>
      </CardFooter>
    </Card>
  );
};

export { TicketItem };
