import React, { useState } from 'react'

const App = () => {
    const [title, settitle] = useState('')
    const [details, setdetails] = useState('')
    const [task, settask] = useState([])

    const submitHandler=(e)=>{
        e.preventDefault();
        const copytask =[...task];
       
        copytask.push({title, details})
        settask(copytask)
        console.log(task)
        settitle('')
        setdetails('')
    }
    const deleteNote=(idx)=>{
        const copytask = [...task];
        copytask.splice(idx,1)
        settask(copytask)
    }

       

  return (
    <div className='h-screen lg:flex bg-black text-white'>
        <form onSubmit={(e)=>{
                submitHandler(e);
              }} className='flex  lg:w-1/2 flex-col gap-4  items-start  p-10'>

     <h2 className='text-3xl font-bold'>Add Notes</h2>

              <input type="text"placeholder='Enter Notes Heading'
              className='font-medium px-5 py-2  w-full border-2 rounded outline-none'
             value={title}
             onChange={(e)=>{
                settitle(e.target.value)
             }}
             />

              <textarea type="text" className=' font-medium px-5 h-30 py-2 w-full  border-2 rounded outline-none'
              placeholder='Write Details here'
              value={details}
              onChange={(e)=>{
                setdetails(e.target.value)
              }}
               />

              <button  className= '  active:scale-99 active:bg-amber-100 font-medium bg-white text-black px-5 py-5 w-full rounded outline-none'>Add</button>
          
        </form>
        <div className=' p-10  lg:border-l-2 lg:w-1/2'>
        <h2 className='text-3xl font-bold'>Recent Notes</h2>

            <div className='flex flex-wrap gap-5 mt-5 h-[90%] overflow-auto justify-start items-start'>
               {task.map(function(elem , idx){
                return  <div key ={idx} className=' flex justify-between flex-col item-start relative h-55 w-42  bg-cover rounded-2xl text-black py-8 px-4 pd-9 bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
                   <div>
                      <h3 className=' mt-1 leading-tight text-lg font-bold'>{elem.title}</h3>
                      <p  className='mt-2 leading-tight font-semibold text-gray-900'>{elem.details}</p>
                </div>
                <button onClick={function(){
                    deleteNote(idx);
                }} className='cursor-pointer active:scale-97 bg-full bg-red-500 text-white py-1 text-xs rounded font-bold'>Delete</button>
                </div>

               })}
            </div>
        </div>
    </div>
  )
}

export default App