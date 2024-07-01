import React, {useEffect}from 'react'
import { formatISO9075 } from 'date-fns';

const Post = ({title, summary, content,cover, createdAt}) => {
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
          <h2>{title}</h2>
          <p className="info">
            <a className="author">Vishal S</a>
            <time>{formatISO9075}</time>
          </p>
          <p className="summary">
            {summary}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Post