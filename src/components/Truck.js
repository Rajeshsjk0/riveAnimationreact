import TruckRiv from "../assets/rives/truck.riv";
import { useRive } from "rive-react";
import { useState } from "react";

function Truck() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [animationText, setAnimationText] = useState("");
  const { rive, RiveComponent: RiveComponentPlayback } = useRive({
    src: TruckRiv,
    stateMachines: "drive",
    artboard: "Truck",
    autoplay: true,
    onPause: () => {
      setAnimationText("Animation paused!");
    },
    onPlay: () => {
      setAnimationText("Animation is playing..");
    },
  });

  const togglePlaying = () => {
    if (isPlaying) {
      rive.pause();
      setIsPlaying(false);
    } else {
      rive.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div className="center">
        <p>truck 2</p>
        <RiveComponentPlayback className="base-canvas-size" />
        <p>{animationText}</p>
        <button type="button" onClick={togglePlaying}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </>
  );
}

export default Truck;
