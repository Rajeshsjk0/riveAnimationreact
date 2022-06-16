import Rive from "rive-react";
import PoisonRiv from "../assets/rives/poison-loader.riv";
function Poison() {
  return (
    <div>
      <p>poison riv</p>
      <Rive src={PoisonRiv} />
    </div>
  );
}

export default Poison;
