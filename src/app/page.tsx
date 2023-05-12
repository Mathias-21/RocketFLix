'use client';

import { api, baseUrl, imgUrl } from '@/services/api';
import { Movies, Series } from '@/types/api';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const [movies, setMovies] = useState({} as Movies);
  const [series, setSeries] = useState({} as Series);

  useEffect(() => {
    api
      .get('/movie/popular?language=pt-BR')
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => console.log(err));
    api
      .get('/tv/top_rated?language=pt-BR')
      .then((res) => {
        setSeries(res.data);
        // console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  movies && console.log(movies?.results);

  return (
    <main className="flex flex-col">
      <Header />
      <div className="flex flex-col items-center w-full">
        {movies?.results && (
          <div
            className="flex flex-col items-center overflow-hidden bg-black"
            style={{ height: 750 }}
          >
            <Image
              src={`${imgUrl}/original${movies?.results[0]?.backdrop_path}`}
              alt={movies.results[0]?.title}
              width={1400}
              height={100}
              style={{ objectFit: 'cover', maxHeight: 800, zIndex: 2 }}
            />
            <Image
              className="blur opacity-40 bg-black"
              src={`${imgUrl}/original${movies?.results[0]?.backdrop_path}`}
              alt={movies.results[0]?.title}
              width={3000}
              height={100}
              style={{
                objectFit: 'cover',
                maxHeight: 800,
                marginTop: -800,
                zIndex: 1,
              }}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col m-5 mr-0 pl-1.5">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-zinc-200 ml-2 ">
            Filmes Populares
          </h2>
          <strong className="flex items-center gap-2 text-zinc-200 font-thin mr-3 hover:translate-x-2 duration-300 cursor-pointer  py-2 px-2">
            Ver mais
            <ArrowRight size={20} color="white" />
          </strong>
        </div>
        <div className="flex gap-4 overflow-x-scroll pl-2 scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-700">
          {movies.results?.map((item, i) => (
            <div
              key={i}
              className="
                flex 
                flex-col 
                min-w-fit 
                gap-2 
                items-center 
                bg-zinc-700/20 
                p-2 
                rounded-md 
                cursor-pointer 
                hover:scale-105 
                duration-200 
                my-3
                last:mr-3
                group
              "
            >
              <Image
                src={`${imgUrl}/w400${item.poster_path}`}
                width={200}
                height={80}
                alt={`Poster do filme ${item.title}`}
                className="rounded"
              />
              <p className="flex justify-center text-center text-sm text-zinc-300 group-hover:text-zinc-50 w-48">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col m-5 mt-0 mr-0 pl-1.5">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-zinc-200 ml-2">
            Séries Populares
          </h2>
          <strong className="flex items-center gap-2 text-zinc-200 font-thin mr-3 hover:translate-x-2 duration-300 cursor-pointer  py-2 px-2">
            Ver mais
            <ArrowRight size={20} color="white" />
          </strong>
        </div>
        <div className="flex gap-4 overflow-x-scroll pl-2 scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-700">
          {series.results?.map((item, i) => (
            <div
              key={i}
              className="
                flex 
                flex-col 
                min-w-fit 
                gap-2 
                items-center 
                bg-zinc-700/20 
                p-2 
                rounded-md  
                cursor-pointer 
                hover:scale-105 
                duration-200 
                my-3
                last:mr-3
                group
              "
            >
              <Image
                src={`${imgUrl}/w400${item.poster_path}`}
                width={200}
                height={80}
                alt={`Poster da série ${item.name}`}
                className="rounded"
              />
              <p className="flex justify-center text-center text-sm text-zinc-300 group-hover:text-zinc-50 w-48">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

/* 
  <div>
            <Image
              src={`${imgUrl}/original${movies?.results[0]?.backdrop_path}`}
              alt={movies.results[0]?.title}
              width={5000}
              height={100}
              style={{ objectFit: 'cover', maxHeight: 800, zIndex: 1 }}
            />
          </div>
*/
