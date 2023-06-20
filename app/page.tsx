import Image from 'next/image'
import Movies from './Movies/page'

type props={};

export default async function Home({}:props) {

  const url ="https://api.themoviedb.org/3/movie/popular?api_key=d4765a4c7338ac22abc84d1daf8ba322"
const data = await fetch(url)
const res =await data.json()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h4 className='text-4xl'>โปรแกรมแสดงโปสเตอร์หนัง</h4>
      <p>
        {res.results.map((Movies:any)=>(
        <p key={Movies.id}>{Movies.title}</p>
        ))}
      </p>
    
    {/* <Movies
  key={movie.id}
  id={movie.id}
  title={movie.title}
  poster_path={movie.poster_path}
  release_date={movie.release_date}
    /> */}
    </main>   


  )
}
