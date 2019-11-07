import axios from 'axios';

export const SHOW_TRACK = 'SHOW_TRACK';
export const getMusicList = (searchValue) => {
  return (dispatch,) => {
    axios.get(`https://itunes-search-iypahdbpmn.now.sh/api/search?media=all&term=${searchValue}`).then(response =>
      {
        const newArr =[];
        response.data.results.forEach(val => newArr.push({artworkUrl100:val.artworkUrl100,trackName:val.trackName,previewUrl:val.previewUrl}));
        dispatch({ type:'SHOW_TRACK' ,payload:newArr})}).catch(error => {console.log(error)});

  }
}
