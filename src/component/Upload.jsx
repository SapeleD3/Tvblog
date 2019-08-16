import React from 'react'

const initialState = {
    route: 'send',
    isUploaded: false,
    title: '',
    tagline: '',
    imgUrl: '',
    vidUrl: '',
    desc: ''
}

class Upload extends React.Component {
    constructor() {
        super();
        this.state = initialState;
    }

    ontitleChange = (e) => {
        const { value } = e.target
        this.setState({
            title: value
        })
    }
    ontaglineChange = (e) => {
        const { value } = e.target
        this.setState({
            tagline: value
        })
    }
    onimageChange = (e) => {
        const { value } = e.target
        this.setState({
            imgUrl: value
        })
    }
    onvideoChange = (e) => {
        const { value } = e.target
        this.setState({
            vidUrl: value
        })
    }
    ondescChange = (e) => {
        const { value } = e.target
        this.setState({
            desc: value
        })
    }

    onUpload = () => {
        fetch('http://localhost:6536/upload', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
               title: this.state.title,
               tagline: this.state.tagline,
               imageurl: this.state.imgUrl,
               videourl: this.state.vidUrl,
               description: this.state.desc 
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.id){
                this.props.feed(data)
                this.props.localRouting('send')
            }
        })
    } 



    render() {
        const { Username, globalRouter, localRouting } = this.props
        return (
            <div>
                <input
                    onClick={() => globalRouter('signin')}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ma5"
                    type="submit"
                    value="Sign Out"
                />
                <input
                    onClick={() => localRouting('send')}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ma5"
                    type="submit"
                    value="Feeds"
                />
                <div className='tc f3'>
                    {`Welcome ${Username}`}
                </div>

                <div className="pa4 black-80 center">

                    <div className="measure center">
                        <label className="f6 b db mb2">Title</label>
                        <input
                            onChange={this.ontitleChange}
                            id="name"
                            className="input-reset ba b--black-20 pa2 mb2 db w-100"
                            type="text"
                            aria-describedby="name-desc" />
                    </div>
                    <div className="measure center">
                        <label className="f6 b db mb2">TagLine</label>
                        <input
                            onChange={this.ontaglineChange}
                            id="name"
                            className="input-reset ba b--black-20 pa2 mb2 db w-100"
                            type="text"
                            aria-describedby="name-desc" />
                    </div>
                    <div className="measure center">
                        <label className="f6 b db mb2">Video Url</label>
                        <input
                            onChange={this.onvideoChange}
                            id="name"
                            className="input-reset ba b--black-20 pa2 mb2 db w-100"
                            type="text"
                            aria-describedby="name-desc" />
                    </div>
                    <div className="measure center">
                        <label className="f6 b db mb2">image URL</label>
                        <input
                            onChange={this.onimageChange}
                            id="name"
                            className="input-reset ba b--black-20 pa2 mb2 db w-100"
                            type="text"
                            aria-describedby="name-desc" />
                    </div>
                    <div className="measure center">
                        <label className="f6 b db mb2">Description<span className="normal black-60">(optional)</span></label>
                        <textarea
                            onChange={this.ondescChange}
                            id="comment"
                            name="comment"
                            className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
                            aria-describedby="comment-desc"></textarea>
                    </div>
                    <div className="measure center">
                        <input
                            onClick={this.onUpload}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dibr"
                            type="submit"
                            value="Upload"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Upload