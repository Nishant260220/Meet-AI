"use client"

import { ErrorState } from "@/components/error-state";
import { LoaderState } from "@/components/loader-state";
import { useTRPC } from "@/trpc/client"
import { useSuspenseQuery } from "@tanstack/react-query";

export const MeetingsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));

  return (
    <div className="overflow-x-scroll">
      {JSON.stringify(data)}
    </div>
  )
}


export const MeetingsViewLoading = () => {
  return (
    <LoaderState
      title="Loading Meetings"
      description="This may take few seconds"
    />
  );
};

export const MeetingsViewError = () => {
  return (
    <ErrorState title="Error Loading Meetings" description="Please try again" />
  );
};
