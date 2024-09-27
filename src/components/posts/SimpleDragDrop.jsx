const SimpleDragDrop = () => {
  const handleOnDragStart = (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
  };

  const handleOnDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
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
        className="w-[300px] h-[300px] border border-main flex items-center justify-center"
      >
        <div
          id="draggable1"
          className="w-[50px] h-[50px] bg-red-500 cursor-move"
          draggable={true}
          onDragStart={handleOnDragStart}
        />
      </div>
      <div
        id="box2"
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
        className="w-[300px] h-[300px] border border-main flex items-center justify-center"
      />
    </div>
  );
};

export default SimpleDragDrop;