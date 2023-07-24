export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'df3e31495cmsh35a6578d4e6f58dp1c02efjsnfccd1714f01e',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'df3e31495cmsh35a6578d4e6f58dp1c02efjsnfccd1714f01e',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async(url,options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}