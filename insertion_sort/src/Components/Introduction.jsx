import React from "react";
import DSA from './DSA.jpg';

const Introduction=()=>{
    return (
        <div className='sm:flex justify-around pb-5 h-3/5 static'>
            <div className='m-0 p-2 sm:p-5 h-3/5 inline-block'>
                <h1 className=" text-base sm:text-3xl font-bold sm:mt-5 sm:mb-4 text-center text-slate-900 ">Data Structures and Algorithms</h1>
                <p className=" text-base sm:text-xl  leading-relaxed mt-2 sm:mt-8 mb-4 text-stone-800 text-justify">
                Data structure algorithms are the focus of this virtual lab. The course provides the basis for understanding a variety of data structures as well as the algorithms that operate on them. The emphasis of this lab is on sorting algorithms. It helps students' learning by demonstrating the execution of an algorithm on a particular data structure, allowing them to write code efficiently. The experiment section contains a list of experiments. The interactive experiments in this lab will allow students to learn about algorithms and have a better knowledge of how to use them.
                </p>
            </div>
            <img className="h-28 text-center sm:h-48 inline-block sm:p-4  lg:h-fit" src={DSA} alt="Can't load"></img>

        </div>
    );
}

export default Introduction;
