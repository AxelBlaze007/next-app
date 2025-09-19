"use client";
import { initialTickets } from "@/data";

import React, { useEffect, useState } from "react";

import Heading from "@/components/Heading";

import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTickets } from "@/features/ticket/queries/get-tickets";
import { Ticket } from "@/features/ticket/types";

const TicketsPage = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const result = await getTickets();
      setTickets(result);
    };
    fetchTickets();
  }, []);
  return (
    <div className="flex-1 flex flex-col gap-y-8  ">
      <Heading
        title="Tickets Page"
        description="All your tickets at one place"
      />
      <div className="animate-fade-in-from-top flex-1 flex flex-col items-center gap-y-4">
        {tickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
