import { useState } from "react";

const SimpleDragDrop = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleOnDragStart = (event) => {
    setIsDragging(true);
    event.dataTransfer.setData("text/plain", event.target.id);
  };

  const handleOnDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const data = event.dataTransfer.getData("text/plain");
    event.target.appendChild(document.getElementById(data));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex gap-8">
      <div
        id="box1"
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
        className="flex h-[300px] w-[300px] items-center justify-center border border-main"
      >
        <div
          id="draggable1"
          className={`h-[50px] w-[50px] cursor-move bg-red-500 ${isDragging ? "opacity-50" : "opacity-100"}`}
          draggable={true}
          onDragStart={handleOnDragStart}
        />
      </div>
      <div
        id="box2"
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
        className="flex h-[300px] w-[300px] items-center justify-center border border-main"
      />
    </div>
  );
};

export default SimpleDragDrop;
