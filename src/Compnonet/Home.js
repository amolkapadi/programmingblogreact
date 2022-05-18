import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    const img1="https://www.springboard.com/blog/wp-content/uploads/2021/12/What-Is-the-Best-Programming-Language-for-AI-scaled.jpg";
    return (
        <div className='container mt-5 home-container'> 
            <div className='row'>
                <div className='col-md-6 '>
                <img src={img1} alt='home' className='img-fluid' />
                </div>
                 <div className='col-md-6'>
                     <h1 className='text-muted fe-bold'>Welcome To My Blog</h1> 
                     <p className='mt-3 '>
                     A computer program in its human-readable form is called source code. Source code needs another computer program to execute because computers can only execute their native machine instructions. Therefore, source code may be translated to machine instructions using the language's compiler. (Machine language programs are translated using an assembler.) The resulting file is called an executable. Alternatively, source code may execute within the language's interpreter. The programming language Java compiles into an a intermediate form which is then executed by a Java interpreter.
                     </p>  
                     <p>Learn All Programing Language</p>
                     <Link className='btn bg-success text-white mt-5' to="/blog">Read Blog</Link>           
                </div>
                

            </div>
        </div>
    )
}
