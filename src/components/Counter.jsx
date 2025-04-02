import React, { useState, useEffect } from 'react';
const Counter = () => {
  const counters = [
    { number: 456, label: 'Happy Students',suffix: ' +' },
    { number: 105, label: 'Classes Completed',suffix: ' +' },
    { number: 97, label: 'Mock Tests' ,suffix: ' +' },
    { number: 3400, label: 'Practise Papers',suffix: ' +' },
  ];
  return (
    <div className="counter-group">
      {counters.map((item, index) =>(
        <CounterItem
          key={index}
          number={item.number}
          label={item.label}
          suffix={item.suffix}
        />
      ))}
    </div>
  );
};

const CounterItem = ({ number, label, suffix }) => {
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = number / 50;
    const interval = setInterval(() => {
      start += increment;
      if (start >= number) {
        clearInterval(interval);
        setDisplayNumber(Math.round(number));
      } else {
        setDisplayNumber(Math.round(start));
      }
    }, 100);
    return () => clearInterval(interval);
  }, [number]);

  return (
    <div className="counter-item">
      <h2 className="counter-number">
        {displayNumber}
        {suffix}
      </h2>
      <p>{label}</p>
    </div>
  );
};

export default Counter;