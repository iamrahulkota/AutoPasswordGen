
import React,{useEffect, useState,useRef} from "react";

import './App.css';

const Gen=()=>{

    let [password,setPassword] = useState("");

    let [length,setLength] = useState(10);

    let [numberChecked,setNumberChecked] = useState(false); //check frist the box is checked or not

    let [special,setS] = useState(false);

    let passwordAdd = useRef();

    function copyPass(){

      passwordAdd.current.select();

      window.navigator.clipboard.writeText(password);

      console.log("Hello");

    }

    useEffect(

      ()=>{

        let pass = "";

        let tempstr = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm";

        if(numberChecked)

        {

          tempstr+="123456789";

        }

        if(special)

        {

          tempstr+="~!@#$%^&*";

        }

        for (let i=0;i<length;i++){

          let ind = Math.floor(Math.random()*tempstr.length);

          pass += tempstr[ind];

        }

        setPassword(pass);

      },

      [length,numberChecked,special]

    );

    return(

      <>

        <div className="bg">

          <div className="bg-card-container">

            <h1 className="heading">Password Generator</h1>

            <div>

              <input type="text" className="input-felid" value={password} ref={passwordAdd}></input>

              <button className="copy" onClick={copyPass}>Copy</button>

            </div>

            <div className="check-box-container">

            <div>

              <input type="range" min={5} max={30} value={length} onChange={(e)=>{setLength(e.target.value)}}></input>

              <p>Length: {length}</p>

            </div>

            <div>

              <input type="checkbox" id="numbers" onChange={()=>{setNumberChecked(true)}}></input>

              <label htmlFor="numbers">Numbers</label>

              <input type="checkbox" id="charcters" onChange={()=>{setS(true)}}></input>

              <label htmlFor="charcters">Characters</label>

            </div>

            </div>

          </div>

        </div>

      </>

  );

}

export default Gen;



