import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function App() {
  //states to hold values from input field
  const [principle , setPrinciple] = useState(0);
  const [rate , setRate] = useState(0);
  const [year , setYear] = useState(0);

  const [interest , setInterest] = useState(0);

  //for conditional rendering

  const [isprinciple , setIsPrinciple] = useState(true);
  const [israte , setIsRate] = useState(true);
  const [isyear , setIsYear] = useState(true);

  const calculate = () => {
     var i = (principle*rate*year)/100;

     setInterest(i);

     console.log(interest);
  }

//reset
  const reset = () => {
        setInterest(0);
        setPrinciple(0);
        setRate(0);
        setYear(0);
        setIsPrinciple(true);
        setIsRate(true);
        setIsYear(true);

        console.log(principle , rate , year);
  }

//validate
  const validate = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        console.log(e.target.type);


        console.log(!!e.target.value.match(/^[0-9]*$/));  // !! to convert to bulean value

        if (!!e.target.value.match(/^[0-9]*$/)) {

          if (e.target.name == "Principle") {
            setPrinciple(e.target.value)
            setIsPrinciple(true)
          }
          else if (e.target.name == "Rate") {
            setRate(e.target.value)
            setIsRate(true)
          }
          else {
            setYear(e.target.value)
            setIsYear(true)
          }
        }

        else {

        if (e.target.name == "Principle") {
          setPrinciple(e.target.value)
          setIsPrinciple(false)
        }
        else if (e.target.name == "Rate") {
          setRate(e.target.value)
          setIsRate(false)
        }
        else {
          setYear(e.target.value)
          setIsYear(false)
        }
}

 

        console.log(principle , rate ,year);
  }

  return (
    <>
    
      <div className='d-flex justify-content-center align-items-center' style={{width:'100%' , height:'100vh'}}>
        <div className='bg-light p-5 rounded' style={{width:'500px'}}>
          <h1>Simple Interest App</h1>
          <p>Calculate your Simple interest Easily</p>

          <div className='mt-5 bg-warning d-flex justify-content-center align-items-center flex-column rounded p-3'>
            <h2 className='fs-1 fw-bolder'>₹ {interest}</h2>
            <p>Total simple interest</p>
          </div>

          <form action="" className='mt-3'>
            <div className="mt-5">
              <TextField id="outlined-basic" label="₹ Principle amount" variant="outlined" className='w-100' name='Principle' value={principle || ""} onChange={(e)=>validate(e)}/>
              {!isprinciple && <p className='text-danger'>*Invalid input</p>}
            </div>
            <div className="mt-5">
            <TextField id="outlined-basic" label="Rate of Interest (p.a)%" variant="outlined" className='w-100' name='Rate' value={rate || ""} onChange={(e)=>validate(e)}/> 
            {!israte && <p className='text-danger'>*Invalid input</p>}
             </div>
            <div className="mt-5">
            <TextField id="outlined-basic" label="Year (Yr)" variant="outlined" className='w-100' name='Year' value={year || ""} onChange={(e)=>validate(e)}/> 
            {!isyear && <p className='text-danger'>*Invalid input</p>}

             </div>
            <div className='d-flex justify-content-between w-100 mt-4'>
              <Button variant="contained" color='success' style={{width:"190px" , height:'60px'}} onClick={calculate} disabled={isprinciple && israte && isyear ? false : true}>Calculate</Button>
              <Button variant="outlined" style={{width:"190px" , height:'60px'}} onClick={reset}>Reset</Button>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

