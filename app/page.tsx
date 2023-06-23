import Movie from "./components/movie"

export default async function Home() {

  const url ="https://api.themoviedb.org/3/movie/popular?api_key=d4765a4c7338ac22abc84d1daf8ba322"
const data = await fetch(url)
const res =await data.json()
await delay(2000);

  return (
    <main >
      <h1 className='text-2xl'>โปรแกรมแสดงโปสเตอร์หนัง</h1>
      <div className="grid gap-2 grid-cols-3">
        {res.results.map((movie: any) =>(
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
        />
        ))}
      </div>
    
    







    </main>   
  )
} 
function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

  

  
