import React from 'react'

export default function About() {

  const img2="https://images-cdn.9gag.com/photo/aP7Mv7B_700b.jpg"

  return (
    <div className='container mt-5 about-container'> 
    <div className='row'>
       
         <div className='col-md-6'>
             <h1 className='text-muted fe-bold'>Welcome To About Page</h1> 
             <p className='mt-3 '>
             A computer program in its human-readable form is called source code. Source code needs another computer program to execute because computers can only execute their native machine instructions. Therefore, source code may be translated to machine instructions using the language's compiler. (Machine language programs are translated using an assembler.) The resulting file is called an executable. Alternatively, source code may execute within the language's interpreter. The programming language Java compiles into an a intermediate form which is then executed by a Java interpreter.
             </p>  
             <p>Learn All Programing Language</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>JQUERY</li>
              <li>BOOTSTRAP</li>
              <li>REACT JS</li>
              <li>NODE JS</li>
              <li>MONGODB</li>
              <li>PYTHON</li>
            </ul>           
        </div>
        <div className='col-md-6 '>
        <img src={img2} alt='home' className='img-fluid about-img' />
        </div>

    </div>
</div>
  )
}
