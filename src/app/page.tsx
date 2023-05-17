'use client';

import { api, baseUrl, imgUrl } from '@/services/api';
import { Movies, Series } from '@/types/api';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

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
      <div className="flex justify-center">
        {movies?.results && (
          <Swiper
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar, Autoplay, Navigation, Pagination]}
            className="mySwiper"
            loop
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            {movies.results.slice(1, 6).map((item, i) => (
              <SwiperSlide key={i}>
                <div
                  className="flex flex-col items-center overflow-hidden bg-black select-none cursor-grab active:cursor-grabbing"
                  style={{ height: 750 }}
                >
                  <div className="flex flex-col">
                    <Image
                      className="z-10 mx-auto"
                      src={`${imgUrl}/original${item.backdrop_path}`}
                      alt={item.title}
                      width={1400}
                      height={100}
                      style={{ maxHeight: 800 }}
                    />
                    <Image
                      className="blur opacity-60 bg-black object-cover"
                      src={`${imgUrl}/original${item.backdrop_path}`}
                      alt={item.title}
                      width={3000}
                      height={100}
                      style={{
                        maxHeight: 800,
                        marginTop: -800,
                      }}
                    />
                    <div
                      className="w-full z-20"
                      style={{
                        marginTop: -800,
                        minHeight: 800,
                        background:
                          'linear-gradient(180deg, rgba(255,0,255,0) 30%, rgba(9,9,11,1) 100%)',
                      }}
                    />
                  </div>
                  <div
                    className="flex flex-col justify-end z-30"
                    style={{
                      marginTop: -350,
                      marginLeft: -680,
                      minHeight: 250,
                    }}
                  >
                    <h3 className="text-5xl text-zinc-100 font-semibold max-w-xl leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-100 max-w-lg mt-3 text-ellipsis line-clamp-4">
                      {item.overview}
                    </p>
                    <button className="mt-5 w-36 bg-red-800 p-3 px-5 rounded-md">
                      Ver detalhes
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
