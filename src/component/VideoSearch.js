import React, { Component } from 'react';
import search from '../images/search.png';

class VideoSearch extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            term: '' 
        }
    }
    
    onHandleChange = (e) => {
        this.setState({
            term: e.target.value
        })
    }

    ocHandleSubmit = (e) => {
        e.preventDefault()
        this.props.onCreate(this.state);
    }

    render() {
        return (
            <div className="header-search col-10 col-lg-8">
                <form onSubmit={this.ocHandleSubmit} className="form-inline">
                    <div class="input-group">
                        <input type="text" className="form-control" value={this.state.term} onChange={this.onHandleChange}/>
                        <button className="btn " type="submit">
                            <img src={search} alt="search" />
                        </button>
                    </div>
                </form>
            </div>
        )
    }

    
}

export default VideoSearch;