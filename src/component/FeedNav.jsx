import React from "react";

function FeedNav({onRouteChange, localRouting, feedComp}) {
    return (
        <div>
            <nav style={{display:'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => localRouting('signin')} className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ma5'>upload</p>
                <p onClick={() => onRouteChange('signin')} className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ma5'>Log out</p>
            </nav>
            {feedComp}
        </div>
    )
}

export default FeedNav