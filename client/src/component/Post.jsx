import React from 'react'

const Post = () => {
  return (
    <div>
        <div className="post">
        <div className="image">
          <img
            src="https://www.reuters.com/resizer/v2/73F7LBA4YBJ3PNUOPWGJTM447I.jpg?auth=2af0a9fb83ed4414b92b58a3ebf2a7829f9cbcc253ebf97fbf8bc9ed570ca92e&width=960&quality=80"
            alt=""
          />
        </div>
        <div className="text">
          <h2>Nvidia offers developers a peek at new AI chip next week</h2>
          <p className="info">
            <a className="author">Vishal S</a>
            <time>2024-03-14 22:32</time>
          </p>
          <p className="summary">
            SAN FRANCISCO, March 14 (Reuters) - How long can Nvidia (NVDA.O),
            opens new tab and its CEO, Jensen Huang, wear the crown as the tech
            world's dominant supplier of artificial-intelligence chips?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Post