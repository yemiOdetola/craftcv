'use client';
import { useRef, useState } from 'react';

export default function CustomTemplate() {
  const [widgets, setWidgets] = useState<string[]>([]);
  const dragStartWidget = useRef<number>(0);
  const dragToWidget = useRef<number>(0);

  const handle0nDrag = (e: React.DragEvent, widgetType: string) => {
    e.dataTransfer.setData('widgetType', widgetType);
  };

  const handle0nDrop = (e: React.DragEvent) => {
    const widgetType = e.dataTransfer.getData('widgetType') as string;
    if (widgetType !== '') {
      console.log(widgets, widgetType);
      setWidgets([...widgets, widgetType]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleRearrange = () => {
    const widgetsCopy = [...widgets];
    const temp = widgetsCopy[dragStartWidget.current];
    widgetsCopy[dragStartWidget.current] = widgetsCopy[dragToWidget.current];
    widgetsCopy[dragToWidget.current] = temp;
    setWidgets(widgetsCopy);
  };

  return (
    <div className='widget-container'>
      <div className='accent-purple-300'>
        <div className='widgets'>
          <div
            className='widget'
            draggable
            onDragStart={(e) => handle0nDrag(e, 'widget A')}
          >
            Widget A
          </div>
          <div
            className='widget'
            draggable
            onDragStart={(e) => handle0nDrag(e, 'widget B')}
          >
            Widget B
          </div>
          <div
            className='widget'
            draggable
            onDragStart={(e) => handle0nDrag(e, 'widget C')}
          >
            Widget C
          </div>
        </div>
      </div>
      <div
        className='drop-zone'
        onDrop={handle0nDrop}
        onDragOver={handleDragOver}
      >
        {widgets.map((widget, index) => (
          <div
            className='widget dropped'
            key={index}
            draggable
            onDragStart={() => (dragStartWidget.current = index)}
            onDragEnter={() => (dragToWidget.current = index)}
            onDragEnd={handleRearrange}
            onDragOver={handleDragOver}
          >
            {widget}
          </div>
        ))}
      </div>
    </div>
  );
}

// function App() {
// const [widgets, setWidgets] = useState<string []>([]) ;

// function handle0nDrag (e: React. DragEvent, widgetType: string) {
// e. dataTransfer. setData ("widgetType", widgetType);
// function handle0nDrop (e: React. DragEvent) {
// const widgetType = e.dataTransfer.getData ("widgetType") as string;
// console. log ("widgetType", widgetType);
// setwidgets([...widgets, widgetType]);
// function handleDragOver (e: React .DragEvent) {
// e. preventDefault ( );
// return
// <div className "App">
// ‹div className "widgets">
// <div
// className "widget"
