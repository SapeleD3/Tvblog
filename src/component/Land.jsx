import React from 'react'
import Feeds from './Feeds'
import FeedNav from './FeedNav'
import Upload from './Upload'

const initialState = {
    route: 'send',
    isUploaded: false,
    feeds: [],
    upload: {
        Utitle: '',
        Utagline: '',
        UimgUrl: '',
        UvidUrl: '',
        Udesc: ''
    }
}

class Land extends React.Component {
    constructor() {
        super();
        this.state = initialState;
    }

    
    localRouting = (route) => {
        if(route === 'send') {
            this.setState(initialState)
        } else if(route === 'sent'){
            this.setState({isUploaded: true})
        }
        this.setState({route: route})
    }

    feed = (data) => {
    this.setState({
        upload: {
            Utitle: data.title,
            Utagline: data.tagline,
            UimgUrl: data.imageurl,
            UvidUrl: data.videourl,
            Udesc: data.description
        }
    })
  }
  componentDidMount() {
      fetch('http://localhost:6536/feed')
        .then(res => res.json())
        .then(feeds => {
            this.setState({
                feeds: feeds
            })
        })
  }

    render() {
        const { name, onRouteChange } = this.props
        const { feeds} = this.state;

        const feedComp = feeds.map(detail => <Feeds key={detail.id} imgUrl={detail.imageurl} title={detail.title} desc={detail.description}/>)

        return (
            <div>
                {
                    this.state.route === 'send' ?
                        <FeedNav feedComp={feedComp} onRouteChange={onRouteChange} localRouting={this.localRouting}/>
                        :
                    <Upload Username={name} localRouting={this.localRouting} globalRouter={onRouteChange} feed={this.feed}/>
                }
            </div>
        )
    }
}

export default Land