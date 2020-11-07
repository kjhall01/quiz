import React, { useState } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

function Krangeslider () {

  const [ value, setValue ] = useState(50);

  return (
    <div>
      <RangeSlider
        value={value}
        onChange={changeEvent => setValue(changeEvent.target.value)}
      />
    </div>
  );

};

export default Krangeslider;
