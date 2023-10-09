import './../styles/about.css'
import { useState } from 'react'
import blood from './../pics/blood.jpg'
import scan1 from './../pics/scan1.jpg'
import scan2 from './../pics/scan2.jpg'
export function Slider(){
    const [index,setIndex]=useState(0);
    const pics=[blood,scan1,scan2];
    function chng(id){
        if(id =='left'){
            if(index == 0){
                setIndex(2);
            }else{setIndex(index-1)}
        }
        else{
            if(index == 2){
                setIndex(0);
            }else{setIndex(index+1)}
        }
    }
    return(
        <>
            <div className="imgs" style={{backgroundImage:`url(${pics[index]})`}}>
            <button id='left' onClick={()=>{chng('left')}}>&#60;</button>
            <button id='right' onClick={()=>{chng('right')}}>&#62;</button>
            </div>
        </>
    )
}
export default function About(){
    const [artical,setArtical]=useState('time ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vestibulum augue, at luctus est bibendum eu. Phasellus non augue sed elit dapibus fermentum. Nullam efficitur, ante eget egestas tempus, ligula ipsum suscipit dui, eu vehicula velit eros eu ligula. Cras a fermentum ligula. Vivamus quis sapien in odio fermentum pharetra. Maecenas ac mi sit amet felis lacinia scelerisque. Sed a metus sit amet urna consectetur vehicula. Fus');
    const tabs=document.getElementsByClassName('about-pic');
    function art(id){
        const ele=document.getElementById(id+'P')
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].style.display = 'none';
        }
        if(id == 'tm' ){
            setArtical('time ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vestibulum augue, at luctus est bibendum eu. Phasellus non augue sed elit dapibus fermentum. Nullam efficitur, ante eget egestas tempus, ligula ipsum suscipit dui, eu vehicula velit eros eu ligula. Cras a fermentum ligula. Vivamus quis sapien in odio fermentum pharetra. Maecenas ac mi sit amet felis lacinia scelerisque. Sed a metus sit amet urna consectetur vehicula. Fus')
            ele.style.display='flex';
        }else{
            if(id == 'doc'){
                setArtical('doctors ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vestibulum augue, at luctus est bibendum eu. Phasellus non augue sed elit dapibus fermentum. Nullam efficitur, ante eget egestas tempus, ligula ipsum suscipit dui, eu vehicula velit eros eu ligula. Cras a fermentum ligula. Vivamus quis sapien in odio fermentum pharetra. Maecenas ac mi sit amet felis lacinia scelerisque. Sed a metus sit amet urna consectetur vehicula. Fus')
                ele.style.display='flex';
            }else{
                setArtical('machines ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vestibulum augue, at luctus est bibendum eu. Phasellus non augue sed elit dapibus fermentum. Nullam efficitur, ante eget egestas tempus, ligula ipsum suscipit dui, eu vehicula velit eros eu ligula. Cras a fermentum ligula. Vivamus quis sapien in odio fermentum pharetra. Maecenas ac mi sit amet felis lacinia scelerisque. Sed a metus sit amet urna consectetur vehicula. Fus')
                ele.style.display='flex';
            }
        }
    }
    return(
        <>
            <div className="about" id='abt'>
                <div className="about-pics">
                    <div className="about-pic" id='tmP'>
                        <div className='pic-bg'>
                            <img src="src\pics\time.png" alt="time" className="time-pic" />
                        </div>
                    </div>
                    <div className="about-pic" id='docP'>
                        <div className='pic-bg'>
                            <img src="src\pics\doctors.png" alt="time" className="time-pic" />
                        </div>
                    </div>
                    <div className="about-pic" id='mchP'>
                        <Slider />
                    </div>
                </div>
                <div className="details">
                    <div className="about-titles">
                        <p className="about-t2">We are the best to take</p>
                        <p className="about-t2">care of you</p>
                    </div>
                    <div className="about-btns-cont">
                        <button className="about-btns" id='tm' onClick={() => art('tm')}>time</button>
                        <button className="about-btns" id='doc' onClick={() => art('doc')}>doctors</button>
                        <button className="about-btns" id='mch' onClick={() => art('mch')}>machines</button>
                    </div>
                    <div className="about-artical">
                        {artical}
                    </div>
                </div>
            </div>
        </>
    )
}