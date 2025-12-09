import { StreamTheme, useCall } from "@stream-io/video-react-sdk";
import { useState } from "react";
import { CallLobby } from "./call-lobby";
import { CallActive } from "./call-active";
import { CallEnded } from "./call-ended";

interface Props {
  meetingName: string;
};

export const CallUI = ({ meetingName}: Props) => {
  const call = useCall();
  const [show, setShow] = useState<"loby" | "call" | "ended">("loby");

  const handleJoin = async() => {
    if(!call) return;

    await call.join();
    setShow("call")
  };

  const handleLeave = async() => {
    if(!call) return;

    call.endCall();
    setShow("ended");
  };

  return (
    <StreamTheme className="h-full" >
      {show === "loby" && <CallLobby onJoin={handleJoin} />}
       {show === "call" && <CallActive meetingName={meetingName} onLeave={handleLeave} />}
        {show === "ended" && <CallEnded/>}
    </StreamTheme>
  )
}