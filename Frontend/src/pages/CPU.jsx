import React from 'react'
import SideBar from '../components/SideBar'
const CPU = () => {
    const d1={
        label:'Manufacturer',
        opt1:'AMD',
        opt2:'Intel'
    }
    const gen1={
        opt1:'14 NM',
        opt2: '12 NM'
    }
    const gen2={
        opt1:'12th Gen',
        opt2: '13th Gen'
    }
    const d2={
        label:'Generation',
        set1:gen1,
        set2:gen2,
    }
    const cores={
        title:'Cores',
        min:2,
        max:12,
        step:2,
        marks:[
            {value:2,label:'2'},
            {value:4,label:' '},
            {value:6,label:' '},
            {value:8,label:' '},
            {value:64,label:'64'},
        ]
    }
    const MaxFrequency={
        title:'Max Frequency',
        min:1.10,
        max:4.7,
        step:0.3,
        marks:[
            {value:1.10,label:'1 GHz'},
            {value:1.4,label:' '},
            {value:1.7,label:' '},
            {value:2.0,label:'2 GHz'},
            {value:2.3,label:''},
            {value:2.6,label:' '},
            {value:2.9,label:' '},
            {value:3.2,label:' '},
            {value:3.5,label:' '},
            {value:3.8,label:' '},
            {value:4.1,label:'4 GHz'},
            {value:4.4,label:' '},
            {value:4.7,label:' '},

        ],
    }
    const price_mark = [
        { value: 50, label: '50$' },
        { value: 100,label: ' ' },
        { value: 150,label: ' ' },
        { value: 200,label: ' ' },
        { value: 500, label: '500$' }
      ];
      const price={
        title:'Price',
        marks:price_mark,
        min:500,
        max:2500,
        step:500,
      }
    
    const tdp={
        title:'TDP',
        min:20,
        max:280,
        step:20,
        marks:[
            {value:20,label:'20W '},
            {value:40 ,label:' '},
            {value:60 ,label:' '},
            {value:100 ,label:' '},
            {value:160 ,label:' '},
            {value:280 ,label:'280W'},
        ]
    }
    const slider_Num=4;
    const main_slider={
        0:price,
        1:cores,
        2:MaxFrequency,
        3:tdp,
    }

  return (
    <>
    <style>
        {`
          body {
            background-color: #373538; /* Set your desired background color here */
          }
        `}
      </style>
    <div>
      <SideBar dropdown1={d1} dropdown2={d2} slider={main_slider} sliderNum={slider_Num} ></SideBar>
    </div>
    </>
  )
}

export default CPU