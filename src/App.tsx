import React, { useRef, useEffect } from 'react';
import { CanvasContainer } from './canvasContainer';
import { CELL_WIDTH, CELL_HEIGHT, shipDatas } from './constants';

import './App.css';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvasContainer = new CanvasContainer(canvasRef.current);
    const cellArray = Array(10 * 10).fill(1).map((value, index) => {
      return {
        x: (index % 10) * CELL_WIDTH,
        y: Math.floor(index / 10) * CELL_WIDTH
      }
    });
    cellArray.forEach(cell => {
      canvasContainer.update({ x: cell.x, y: cell.y, width: CELL_WIDTH, height: CELL_WIDTH, borderColor: '#cccc' });
    });
    console.log(shipDatas);
    shipDatas.forEach(ship => {
      canvasContainer.update({
        x: ship.position.x,
        y: ship.position.y,
        width: ship.size * CELL_WIDTH,
        height: CELL_HEIGHT,
        color: ship.color,
        borderColor: ship.borderColor
      });
    });
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default App;
