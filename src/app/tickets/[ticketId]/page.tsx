import { PlaceHolder } from "@/components/Placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { ticketsPath } from "@/paths";
import Link from "next/link";
import React from "react";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find(
    (ticket) => ticket.id.toString() === ticketId
  );
  if (!ticket) {
    return (
      <div className="flex-1 flex">
        <PlaceHolder
          label="Ticket Not found"
          button={
            <Button asChild variant={"outline"}>
              <Link href={ticketsPath()}>Go back to Ticket</Link>
            </Button>
          }
        />
        <PlaceHolder label="Ticket Not found" />
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
};

export default TicketPage;
