import { useState,useEffect } from "react";

function App() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorCode = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomColorHex = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexCode = '#';

    for (let i = 0; i < 6; i++) {
      hexCode += hex[randomColorCode(hex.length)];
    }
    setColor(hexCode);
  };

  const handleCreateRandomColorRGB = () => {
    const r = randomColorCode(256);
    const g = randomColorCode(256);
    const b = randomColorCode(256);
    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomColorRGB;
    else handleCreateRandomColorHex;
  }, [typeOfColor]);

  return (
    <>
      <div
        className={`w-full h-screen flex items-center justify-center`}
        style={{ backgroundColor: color }} // Tailwind does not support dynamic colors directly here
      >
        <div className="text-center">
          <h1 className="text-white text-2xl font-bold mb-4">{color}</h1>
          <div className="mb-4 space-x-4">
            <button
              onClick={() => setTypeOfColor('hex')}
              className="px-4 py-2 bg-gray-200 text-black font-semibold rounded shadow"
            >
              Hex Mode
            </button>
            <button
              onClick={() => setTypeOfColor('rgb')}
              className="px-4 py-2 bg-gray-200 text-black font-semibold rounded shadow"
            >
              RGB Mode
            </button>
          </div>
          <button
            onClick={typeOfColor === 'hex' ? handleCreateRandomColorHex : handleCreateRandomColorRGB}
            className="px-4 py-2 bg-white text-black font-semibold rounded shadow"
          >
            Change Color
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
