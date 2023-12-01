import React from 'react';
import NavBar2 from './NavBar2';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  ScatterChart,
  Scatter,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';

const theme = createTheme();

const Home = () => {
  const lineChartData = [
    { name: 'Jan', value: 30 },
    { name: 'Feb', value: 45 },
    { name: 'Mar', value: 28 },
    { name: 'Apr', value: 82 },
    { name: 'May', value: 63 },
    { name: 'Jun', value: 50 },
  ];

  const barChartData = [
    { name: 'CPU', value: 30 },
    { name: 'GPU', value: 45 },
    { name: 'Motherboard', value: 28 },
    { name: 'RAM', value: 82 },
    { name: 'Case', value: 63 },
    { name: 'Storage', value: 50 },
  ];

  const areaChartData = [
    { name: 'I7', value: 57 },
    { name: 'I5', value: 23 },
    { name: 'I3', value: 93 },
    { name: 'I9', value: 28 },
    { name: 'Ryzen 7', value:60  },
    { name: 'Ryzen 5', value: 26 },
   
  ];

  const pieChartData = [
    { name: 'Intel', value: 30 },
    { name: 'AMD', value: 45 },
    { name: 'SnapDragon', value: 28 },
  ];

  const scatterChartData = [
    { x: 10, y: 30 },
    { x: 20, y: 50 },
    { x: 30, y: 40 },
    { x: 40, y: 60 },
    { x: 50, y: 80 },
  ];

  const radarChartData = [
    { subject: 'RTX 3070 Ti', A: 120, B: 110, fullMark: 150 },
    { subject: 'RTX 4060', A: 98, B: 130, fullMark: 150 },
    { subject: 'A6000', A: 86, B: 130, fullMark: 150 },
    { subject: 'RTX 4090', A: 9, B: 20, fullMark: 150 },
    { subject: 'RTX 3060', A: 85, B: 90, fullMark: 150 },
    { subject: 'RTX 3080', A: 65, B: 85, fullMark: 150 },
  ];

  return (
    <ThemeProvider theme={theme}>
      <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

      body {
        margin: 0;
        padding: 0;
        background-color: white;
      `}</style>
      <NavBar2 />
      <div style={{backgroundColor:'white'}}
      >
      <Typography style={{fontFamily:['Montserrat','Poppins'],fontSize:'40px',padding:'2.5%',color:'#bb84ec',backgroundColor: 'white'}}> Welcome  Admin :) </Typography>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor:'white' }}>
        <ResponsiveContainer width="45%" height={300}>
          <LineChart data={lineChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="45%" height={300}>
          <BarChart data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="45%" height={300}>
          <AreaChart data={areaChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="value" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="45%" height={300}>
          <PieChart>
            <Pie dataKey="value" data={pieChartData} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="45%" height={300}>
          <ScatterChart>
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="stature" unit="" />
            <YAxis type="number" dataKey="y" name="weight" unit="" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="A school" data={scatterChartData} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="45%" height={300}>
          <RadarChart outerRadius={90} width={450} height={350} data={radarChartData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </ThemeProvider>
  );
};

export default Home;
