import './../styles/admin-panel.css'
import User from './user'
import Card from './stat-card'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd,faArrowRightFromBracket,faChartLine,faKey,faSearch,faUser } from '@fortawesome/free-solid-svg-icons';
import { FaHeartbeat } from 'react-icons/fa'
import { useState } from 'react';
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip } from "recharts";
const data = [
    {
        name: "Page A",
        uv: 2000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Page C",
        uv: 1000,
        pv: 4800,
        amt: 2290
    }
];

export default function Admin(){
    let arr ='azertyuiopqsdfghjklmwxcvbn0123456789';
    let [val,setVal]=useState('');
    let [list,setList]=useState([]);
    let [input1,setInput1]=useState('');
    let [input2,setInput2]=useState('');
    let [input3,setInput3]=useState('');
    function addUser(name,age,gender){
        let user={
            id:Math.random(),
            name:name,
            age:age,
            gender:gender
        }
        setList([...list,user]);
        setInput1('');
        setInput2('');
        setInput3('');
    }
    function pw(){
        let newPassword = '';
        for(let i=0;i<8;i++){
            newPassword=arr[Math.floor(Math.random()*36)]+newPassword;
        }
        setVal(newPassword)
    }
    return(
        <>
            <div className="admin-panel">
                <div className="sidebar">
                    <div className="logo-cont2">
                        <FaHeartbeat color='#00A3CB' fontSize='2.2em'/><p className="logo2">Zeta agen</p>
                    </div>
                    <ul className="tabs-bar">
                        <a className="tabs" href='#admin1'><FontAwesomeIcon icon={faUser}/> paitents</a>
                        <a className="tabs" href='#admin2'><FontAwesomeIcon icon={faAdd}/> add</a>
                        <a className="tabs" href='#stats'><FontAwesomeIcon icon={faChartLine}/> statistics</a>
                    </ul>
                    <Link to='/' className="logout"><FontAwesomeIcon icon={faArrowRightFromBracket}/> log out</Link>
                </div>
                <div className="users-section" id='admin1'>
                    <div className="users-table">
                        <header className="head">
                            <p className="user-ttl">patient details</p>
                            <div className="input-users-cont">
                                <input type="text" className="input-users" placeholder='search' />
                                <FontAwesomeIcon className='search-users' id='search-users' icon={faSearch}/>
                            </div>
                        </header>
                        <div className="user-data-ttl-cont">
                            <p className="user-data-ttl">Name</p>
                            <p className="user-data-ttl">age</p>
                            <p className="user-data-ttl">Gender</p>
                            <p className="user-data-ttl">Status</p>
                            <p className="user-data-ttl">Result</p>
                        </div>
                        <div className="users-cont">
                            {
                                list.map((user)=>(
                                    <User key={list.id} name={user.name} age={user.age} gender={user.gender} status='complet' />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="push-users-data-section" id='admin2'>
                    <form action="" className="push-users-data">
                        <input type='text' className="users-data" placeholder='name'
                            value={input1} 
                            onChange={()=>{
                            setInput1(event.target.value)
                            }}
                        />
                        <input type='text' className="users-data" placeholder='age' 
                            value={input2}
                            onChange={()=>{
                            setInput2(event.target.value)
                            }}
                        />
                        <input type='text' className="users-data" placeholder='gender' 
                            value={input3} 
                            onChange={()=>{
                                setInput3(event.target.value)
                            }}
                        />
                        <div className="password-generate-cont">
                            <input type='text' className="users-data" id='pwi' placeholder='password' 
                                value={val} 
                                onChange={()=>{
                                    setVal(event.target.value)
                                }}
                            />
                            <FontAwesomeIcon className='generate-pw' id='gpw' icon={faKey}
                                onClick={pw}
                            />
                        </div>
                        <button className="users-data-submit" type='button'
                            onClick={()=>{
                                addUser(input1,input2,input3)
                            }}
                        >submit</button>
                    </form>
                </div>
                <div className="statistics-section" id='stats'>
                    <div className="statistics-header">
                        <p className="overview">overview</p>
                        <ul className="stats-tabs-cont">
                            <li className="stats-tabs">day</li>
                            <li className="stats-tabs">week</li>
                            <li className="stats-tabs">month</li>
                        </ul>
                    </div>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <LineChart
                        className='stat-curve'
                        width={700}
                        height={250}
                        data={data}
                        syncId="anyId"
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                        </LineChart>
                </div>
            </div>
        </>
    )
}