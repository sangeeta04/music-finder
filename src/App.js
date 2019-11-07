import React,{ Component } from 'react';
import {Grid} from '@material-ui/core';
import {connect} from 'react-redux';
import {getMusicList} from './action/action';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      searchValue:''
    };
  }
  handleChange = (e) => this.setState({searchValue:e.target.value});
  displayMusicData = (trackData) => {
    return(
    <div>
      <Grid container spacing={2} className="root">
      {trackData.map((value,index) => (
          <Grid key={index} item xs={3}>
            <div className="Music-Data">
              <img src={value.artworkUrl100} />
              <div className="Content">
                <h4>{value.trackName}</h4>
                <div className="More">
                  <a href={value.previewUrl}>More</a>
                </div>
              </div>
             </div>
           </Grid>
      ))}
     </Grid>
    </div>);
  }
  render (){
    const {searchValue} = this.state
    const {trackData} = this.props
    return (
      <div>
        <div className="App">
        <input
          type="text"
          name="searchValue"
          className="Text-Field-Css"
          value={searchValue}
          placeholder="search"
          onChange={this.handleChange}
        />
        <button
          type="button"
          onClick={() => this.props.musicList(searchValue)}
          className="Btn-Css"
          >Search</button>
      </div>
      <Grid item xs={12}>
      {trackData && this.displayMusicData(trackData)}
      </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {trackData: state};
};
const mapDispatchToProps = dispatch => {
  return {
    musicList: (searchValue) => dispatch(getMusicList(searchValue))
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
