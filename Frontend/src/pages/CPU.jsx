import React from 'react'
import SideBar from '../components/SideBar'
const CPU = () => {
  const d1 = {
    label: 'Manufacturer',
    dropOpt: {
      0: 'AMD',
      1: 'Intel',
    },
  };
    const d2={
          label:'Generation',
          dropOpt:{
                0:'14 NM',
                1: '12 NM',
                2:'12th Gen',
                3: '13th Gen',}
        }
      
    const drop_1={
      0:d1,
      1:d2,
    }
    const cores={
        title:'Cores',
        min:2,
        max:64,
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
    
      const price={
        title:'Price',
        marks:[],
        min:50,
        max:500,
        step:5,
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
    const checkbox = {
      0: {
        title: 'Integrated Graohics',
        options: {
          0: 'Yes',
          1: 'No',
          // Add more options as needed
        },
      },
      1: {
        title: 'Overclockable',
        options: {
          0: 'Yes',
          1: 'No',
          // Add more options as needed
        },
      },
      // Add more categories as needed
    };
    const containerStyle = {
      display: 'flex',
      flexDirection: 'row',
    };
    const productCardStyle = {
      flex: '2',
      marginLeft: '6vh',
    };
    const stackStyle = {
      marginTop: '1vh',
    };
  const cat_titles=['Yes','NO']
  const cat_label='Integrated Graphics'
  return (
    <>
    <style>
        {`
          body {
            background-color: #373538; /* Set your desired background color here */
          }
        `}
      </style>
   
      <SideBar drop={drop_1} slider={main_slider} sliderNum={slider_Num} checkboxCategories={checkbox}></SideBar>
   
    </>
  )
}


export default CPU