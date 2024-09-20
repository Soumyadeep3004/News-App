import React from 'react'

export default function NewsList({news}) {
    const temp = [1, 2, 3, 4, 5]
    return (
        <div >
            {/* <h3 style={{ marginLeft: '30px', marginBottom: '20px' }}>Trending</h3> */}
            <div style={{ listStyle: 'none' }}>
                {
                    news?.map((val) => (
                        <div key={val.url}>
                            <div style={{ margin: '30px 10px' }}>
                                {/* <span style={{color:'#8e8990'}}>Culture - Jul 5th '24</span> */}
                                <a href={val.url}>
                                    {/* <span>1</span> */}
                                    <h4>{val.title.slice(0,50)}....</h4>
                                </a>
                                <span>{val.author}</span>
                            </div>
                            <hr />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
