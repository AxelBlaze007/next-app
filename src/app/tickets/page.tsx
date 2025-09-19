import { initialTickets } from "@/data";

import React from "react";

import Heading from "@/components/Heading";

import { TicketItem } from "@/features/ticket/components/ticket-item";

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8  ">
      <Heading
        title="Tickets Page"
        description="All your tickets at one place"
      />
      <div className="animate-fade-in-from-top flex-1 flex flex-col items-center gap-y-4">
        {initialTickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
