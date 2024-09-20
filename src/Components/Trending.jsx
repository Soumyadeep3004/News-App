import React from 'react'

export default function Trending({news}) {
    // console.log("trending> " ,news);
    
    const temp = [1, 2, 3, 4, 5]
    return (
        <div>

            <h3 style={{ margin: '10px 36px' }}>Trending</h3>

            <div style={{ listStyle: 'none' }}>
                {
                    news?.map((val) => (
                        <div key={val.url} style={{ border: '1px solid #E8DEDC' }}>
                            <div style={{ padding: '10px' }}>
                                {/* <span style={{color:'#8e8990'}}>Culture - Jul 5th '24</span> */}
                                <a href={val.url}>
                                    <h4 >{val.title}</h4>
                                </a>
                                {/* <span>{val.author}</span> */}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
