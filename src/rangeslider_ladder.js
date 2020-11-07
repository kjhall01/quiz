import React, { useState } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
//import firebase from 'firebase/app';
//import 'firebase/analytics';


function RangeSliderLadder () {



  /* Slider Values */
  const [ value1, setValue1 ] = useState(50);
  const [ value2, setValue2 ] = useState(50);
  const [ value3, setValue3 ] = useState(50);
  const [ value4, setValue4 ] = useState(50);
  const [ value5, setValue5 ] = useState(50);
  const [ value6, setValue6 ] = useState(50);
  const [ value7, setValue7 ] = useState(50);
  const [ value8, setValue8 ] = useState(50);
  const [ value9, setValue9 ] = useState(50);
  const [ value10, setValue10 ] = useState(50);
  const [ filler, setFiller] = useState('              ');
  const [ filler2, setFiller2 ] = useState('             ')

  /* Output Values */
  const [ filler22, setFiller22 ] = useState('             ')
  const [ filler23, setFiller23 ] = useState('             ')
  const [ filler24, setFiller24 ] = useState('             ')
  const [ filler25, setFiller25 ] = useState('             ')
  const [ filler26, setFiller26 ] = useState('             ')
  const [ filler27, setFiller27 ] = useState('             ')
  const [ filler28, setFiller28 ] = useState('             ')
  const [ filler29, setFiller29 ] = useState('             ')
  const [ filler210, setFiller210 ] = useState('             ')
  const [ filler211, setFiller211 ] = useState('             ')
  const [ filler212, setFiller212 ] = useState('             ')

  var setfillers = [setFiller22, setFiller23, setFiller24, setFiller25, setFiller26, setFiller27, setFiller28, setFiller29, setFiller210, setFiller211, setFiller212,];

  const handleWho = function () {

    /* gather input vals */
    var vals = [value1, value2, value3, value4, value5, value6, value7, value8, value9, value10];

    /* Observed Vals from videos in order of video*/
    var amiel = [8,65,50,75,90,85,50,12,55,96];
    var gaby = [50,50,95,30,70,85,75,80,100,90];
    var chris = [20,65,25,30,80,70,80,90,82,90];
    var christina = [37,1,28,90,97,85,98,92,75,100];
    var carla = [15,90,4,1,83,87,5,3,80,99];
    var brad = [62,70.75,95,41,72,71,66,83,74,71];
    var molly = [15,10,0,30,80,50,30,5,70,90];
    var rick = [23,65,57,83,100,85,15,10,65,96];
    var andy = [20,55,-50,20,65,70,70,85,85,90];
    var sohla = [90,40,15,86,97,95,96,95,65,100];
    var delaney = [50,75,2,4,97,29,10,7,15,100];
    var claire = [90,40,0,50,85,75,10,15,4,100];

    /* Housekeeping for later */
    var tk = [amiel, gaby, chris, christina, carla, brad, molly, rick, andy, sohla, delaney, claire];
    var messages = ['Andrew!', 'Gretchen!', 'Cynthia!', 'Carlos!', 'Charles!', 'Bad', 'Montana!', 'Rod!', 'Dan!', 'Shirly!', 'Digiorno', 'Clambo'];
    var names = ['Andrew!', 'Gretchen!', 'Cynthia!', 'Carlos!', 'Charles!', 'Bad', 'Montana!', 'Rod!', 'Dan!', 'Shirly!', 'Digiorno', 'Clambo'];
    var scores = [0,0,0,0,0,0,0,0,0,0,0,0];
    var total_dist = [0,0,0,0,0,0,0,0,0,0,0,0];
    var your_dist = [0,0,0,0,0,0,0,0,0,0,0,0];

    /* for each tk staffer, for each food, aggregate sum of squares of max dist answer */
    var i;
    var j;
    for (i=0; i<12; i++) {
      for (j=0; j<10; j++) {
        if(100 - tk[i][j] > tk[i][j]){
          total_dist[i] = total_dist[i] + (100 - tk[i][j])*(100 - tk[i][j])
        } else {
          total_dist[i] = total_dist[i] + (tk[i][j])*(tk[i][j])
        }
      }
    }

    /* for each tk staffer, for each food, aggregate sum of squares of your answer */
    var temp = 0;
    for (i=0; i<12; i++) {
      temp = 0
      for (j=0; j<10; j++) {
        your_dist[i] = your_dist[i] + (vals[j]-tk[i][j])*(vals[j]-tk[i][j])
        temp = temp + (vals[j] - tk[i][j])*(vals[j] - tk[i][j])
      }
      scores[i] = Math.sqrt(temp)
    }

    /* Calculte What Percent of Maximum distance you are from tk staffers and invert */
    for (i=0; i < 12; i++) {
      your_dist[i] = 100 - (Math.sqrt(your_dist[i]) / Math.sqrt(total_dist[i]))*100
    }

    /* Sort others by closeness for output */
    var list = [];
    for (i=0;i<12;i++){
      list.push({'name': names[i], 'percent': your_dist[i], 'message':messages[i]})
    }

    list.sort(function(a, b) {
      return b.percent - a.percent;
    });


    /* Output Messages */
    setFiller(list[0].message);
    setFiller2('You\'re ' + list[0].percent.toFixed(2) + '% vibin\' with ' + list[0].name + '! :)')

    for (i=1; i<12; i++) {
      setfillers[i-1](list[i].name + ': ' + list[i].percent.toFixed(2) + '%')
    }
  }



  return (
    <div class='inlined'>
      <span>Cold Glass Of Milk</span>
      <RangeSlider
        value={value1}
        onChange={changeEvent => setValue1(changeEvent.target.value)}
      />
      <p/>
      <span>Black Licorice</span>
      <RangeSlider
        value={value2}
        onChange={changeEvent => setValue2(changeEvent.target.value)}
      />
      <p/>
      <span>Green Pep</span>
      <RangeSlider
        value={value3}
        onChange={changeEvent => setValue3(changeEvent.target.value)}
      />
      <p/>
      <span>White Chocolate</span>
      <RangeSlider
        value={value4}
        onChange={changeEvent => setValue4(changeEvent.target.value)}
      />
      <p/>
      <span>OJ w/ Pulp</span>
      <RangeSlider
        value={value5}
        onChange={changeEvent => setValue5(changeEvent.target.value)}
      />
      <p/>
      <span>Sumac</span>
      <RangeSlider
        value={value6}
        onChange={changeEvent => setValue6(changeEvent.target.value)}
      />
      <p/>
      <span>Nuts in Brownies</span>
      <RangeSlider
        value={value7}
        onChange={changeEvent => setValue7(changeEvent.target.value)}
      />
      <p/>
      <span>Pineapple on Pizza</span>
      <RangeSlider
        value={value8}
        onChange={changeEvent => setValue8(changeEvent.target.value)}
      />
      <p/>
      <span>Raisins</span>
      <RangeSlider
        value={value9}
        onChange={changeEvent => setValue9(changeEvent.target.value)}
      />
      <p/>
      <span>Mayonaise</span>
      <RangeSlider
        value={value10}
        onChange={changeEvent => setValue10(changeEvent.target.value)}
      />
      <p/>
      <Button size="lg" onClick={handleWho} variant="outline-light">Who Am I? </Button>
      <p/>
      <p>{filler}</p>
      <p>{filler2}</p>
      <p/>
      <p class='bla2'>{filler22}</p>
      <p class='bla2'>{filler23}</p>
      <p class='bla2'>{filler24}</p>
      <p class='bla2'>{filler25}</p>
      <p class='bla2'>{filler26}</p>
      <p class='bla2'>{filler27}</p>
      <p class='bla2'>{filler28}</p>
      <p class='bla2'>{filler29}</p>
      <p class='bla2'>{filler210}</p>
      <p class='bla2'>{filler211}</p>
      <p class='bla2'>{filler212}</p>
    </div>
  );
};

export default RangeSliderLadder;
