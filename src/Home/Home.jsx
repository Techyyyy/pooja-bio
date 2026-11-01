import { Canvas } from "./Canvas";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="home">
        <header className="home-header">
          <div className="home-intro">
            <div className="name">Pooja Murugavel</div>
            <div className="title">{`>`} React Developer · JavaScript & TypeScript
              <span className="cursor">_</span>
            </div>
          </div>
          <p className="blueprint-instructions">
            <span className="instruction-dot" />
            HOVER A SHEET TO LIFT
            <br />
            CLICK ON A SHEET TO OPEN
          </p>
        </header>
        <Canvas />
      </div>
    </>
  );
};
