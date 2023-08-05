import { useState } from "react";

function App() {
  const [active, setActive] = useState(false);
  return (
    <main>
      <button
        onClick={() => setActive(!active)}
        className={`order scale-150 ${active && "animate"}`}
      >
        <span className="default font-kalameh font-bold !text-[25px]">
          ثبت سفارش
        </span>
        <span className="success font-kalameh font-bold !text-[20px] !text-white">
          سفارش شما با موفقیت ثبت شد
          <svg viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <div className="box"></div>
        <div className="truck">
          <div className="back"></div>
          <div className="front">
            <div className="window"></div>
          </div>
          <div className="light top"></div>
          <div className="light bottom"></div>
        </div>
        <div className="lines"></div>
      </button>
    </main>
  );
}

export default App;
