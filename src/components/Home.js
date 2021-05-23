import React from 'react';
import  image from "../monstera-leave.jpg";

export default function Home()
{
    return (
        <main>
         <img src= {image} 
         alt ="Monstera Leaves"
         className ="absolute object-cover w-full h-full"
         />
         <section className ="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
          <h1 className="text-6xl text-white -100 font-bolc cursive leading-none lg:leading-snug home-name"> Kshitij's World</h1>
          </section>
        </main>
    )
}