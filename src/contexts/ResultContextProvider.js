import React, { createContext, useContext, useState } from "react";
const ResultContext = createContext();
const searchUrl =
  "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI";
export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const getResults = async ([category, type]) => {
    setIsLoading(true);
    const response = await fetch(
      `https://bing-${category}-search1.p.rapidapi.com${type}`,
      {
        method: "GET",
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key":"32ddddb32fmsh78da5927f09b9ddp1a9333jsn6d6d5c2d9859",
          "X-RapidAPI-Host": `bing-${category}-search1.p.rapidapi.com`,
        },
      }
    );
    const data = await response.json();
    setResults(data);
    setIsLoading(false);
  };
  const getSearchResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${searchUrl}${type}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "32ddddb32fmsh78da5927f09b9ddp1a9333jsn6d6d5c2d9859",
        "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      },
    });
    const data = await response.json();
    setResults(data);
    setIsLoading(false);
  };
  return (
    <>
      <ResultContext.Provider
        value={{
          getResults,
          getSearchResults,
          results,
          searchTerm,
          setSearchTerm,
          isLoading,
        }}
      >
        {children}
      </ResultContext.Provider>
    </>
  );
};
export const useResultContext = () => useContext(ResultContext);
