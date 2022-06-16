import TruckRiv from "../assets/rives/truck_v7.riv";
//import  { useRive, useStateMachineInput } from "rive-react";
import { useRive } from "rive-react";

function TruckV7() {
  const { RiveComponent, rive } = useRive(
    {
      src: TruckRiv,
      autoplay: false,
    }
    // {
    //   fitCanvasToArtboardHeight: true,
    // }
  );

  return (
    <div>
      <p>truck riv</p>
      <RiveComponent
        onMouseEnter={() => rive && rive.play()}
        onMouseLeave={() => rive && rive.pause()}
      />
      {/* <p>{animationText}</p>
      <button type="button" onClick={togglePlaying}>
        {isPlaying ? "Pause" : "Play"}
      </button> */}
    </div>
  );
}

export default TruckV7;
