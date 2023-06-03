import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useResultContext } from "../contexts/ResultContextProvider";
import Loading from "./Loading";
const Results = () => {
  const { getResults,getSearchResults, results, searchTerm,isLoading } = useResultContext();
  const location = useLocation();
  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/news") {
        getResults(["news", `/news/search?q=${searchTerm}&count=30`]);
      } else if (location.pathname === "/images") {
        getResults(["image", `/images/search?q=${searchTerm}&count=56`]);
      } else if (location.pathname === "/videos") {
        getResults(["video", `/videos/search?q=${searchTerm}&count=20`]);
      } else if(location.pathname === "/search"){
        getSearchResults(`?q=${searchTerm}&pageNumber=1&pageSize=50&autoCorrect=true`);
      }
    }
  }, [searchTerm, location.pathname]);
  if (isLoading) return <Loading />;
  switch(location.pathname) {
    case '/search':
        return (
      <>
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.value?.map(({ url, title,description }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={url} target="_blank" rel="norefrerer">
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-900">
                  {title}
                </p>
                <p className="text-sm">
                  {url?.length > 30 ? url.substring(0,30) : url}
                </p>
                <p className="text-sm dark:text-gray-400 text-gray-500">
                {description?.length > 80 ? description.substring(0,80) : description}
                </p>
              </a>
            </div>
          ))}
        </div>
      </>
    );
  case '/images':
    return (
      <>
        <div className="flex flex-wrap justify-center items-center">
          {results?.value?.map(({ hostPageUrl,thumbnailUrl, name }, index) => (
              <a
                className="sm:p-3 p-5 hover:scale-105 "
                href={hostPageUrl}
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                <img  className="h-25 w-40" src={thumbnailUrl} alt={name} loading="lazy" />
                <p className="w-36 break-words text-xs text-blue-400">{hostPageUrl?.length > 25 ? hostPageUrl.substring(0, 25) : hostPageUrl}</p>
                <p className="w-36 break-words text-sm mt-1">{name?.length > 50 ? name.substring(0, 50) : name}</p>
              </a>
          ))}
        </div>
      </>
    )
  case '/videos':
    return (
      <>
        <div className="flex flex-wrap justify-center items-center ">
          {results?.value?.map(({hostPageUrl}, index) => (
            <div key={index} className='p-2 hover:scale-105'>
            <ReactPlayer url={hostPageUrl} controls width ='355px' height='200px'/>
            </div>
          ))}
        </div>
      </>
    )
  case '/news':
    return (
      <>
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.value?.map(({ url, name,description }, index) => (
            <div key={index} className="md:w-2/5 w-full border p-3 rounded-lg drop-shadow-sm hover:drop-shadow-lg hover:scale-105 dark:border-sky-400">
              <a href={url} target="_blank" rel="norefrerer">
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-900">
                  {name}
                </p>
                <p className="text-sm break-words">
                  {url?.length > 30 ? url.substring(0,30) : url}
                </p>
                <p className="text-sm break-words text-gray-700 dark:text-gray-400">
                  {description?.length > 80 ? description.substring(0,80)+'...' : description}
                </p>
              </a>
            </div>
          ))}
        </div>
      </>
    )
  }
};
export default Results;