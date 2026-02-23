import { useState ,useCallback,useEffect,useRef} from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("");

const passwordRef=useRef(null);

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="1234567890";
    if(charAllowed) str+="{}][}:;?+=-_*#@!$^&";
    for (let i = 1; i <=length; i++) {
      let char=Math.floor(Math.random()*str.length);
      pass+=str.charAt(char);
    }
    setPassword(pass);
  },[length,numberAllowed,charAllowed,setPassword]);
  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])

  const copyPasswordtoClipboard=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
      <h1 className='text-white text-center my-3'>Password generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" 
      ref={passwordRef}
      value={password}
      className='outline-none w-full py-1 px-3 '
      placeholder='Password'/>
      <button
      onClick={copyPasswordtoClipboard}
      className='bg-blue-700 text-white outline-none px-3 py-0.5 shrink-0
      hover:bg-blue-500'>
        Copy
      </button>
     </div>
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" name="range" min={6} max={100}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)
        }}/>
        <label >Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
        type='checkbox'
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={()=>{setNumberAllowed((prev)=>!prev);
          }
        }>
        </input>
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
     </div>
    </>
  )
}

export default App
