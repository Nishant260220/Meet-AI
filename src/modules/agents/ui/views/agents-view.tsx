"use client";

import { ErrorState } from "@/components/error-state";
import { LoaderState } from "@/components/loader-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const AgentView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.agents.getMany.queryOptions()
  );


  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export const AgentsViewLoading = () => {
  return <LoaderState title="Loading Agents" description="This may take few seconds"/>
}


export const AgentsViewError = () => {
  return <ErrorState title="Error Loading Agents" description="Please try again"/>
}