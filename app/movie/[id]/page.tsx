import React from 'react'
import Image from 'next/image';



type Props = {
params: any;

}

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export default async function MovieDetail({params}: Props) {
    const key = process.env.NEXT_PUBLIC_API_KEY;
const { id } = params;
const imagePath="http://image.tmdb.org/t/p/original";
const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`,
    {next: {revalidate:10}}
);
const res = await data.json();
await delay(2000);

  return (
    <div>รสยละเอียดหนัง:
    <div className='container mx-auto mt-7'>
     <h2 className='text-4xl'>ชื่อหนัง : {res.title}</h2>
     <h2 className='text-4xl'>ความยาว :{res.runtime}</h2>   
     <Image 
     className='my-12 '
     src={imagePath + res.backdrop_path}
     width={800}
     height={800}
     alt={res.title}
     priority
     />
     <p>{res.overview}</p>
    </div>
    
    </div>

   

  )
}
