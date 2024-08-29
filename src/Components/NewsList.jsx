import React from 'react'

export default function NewsList() {
    const temp = [1, 2, 3, 4, 5]
    return (
        <div >

            {/* <h3 style={{ marginLeft: '30px', marginBottom: '20px' }}>Trending</h3> */}

            <div style={{ listStyle: 'none' }}>
                {
                    temp.map((val) => (
                        <div key={val}>
                            <div style={{ margin: '30px 10px' }}>
                                <span style={{color:'#8e8990'}}>Culture - Jul 5th '24</span>
                                <a href="">
                                    {/* <span>1</span> */}
                                    <h4>The Best Homemade Masks for Face (keep the Pimples Away)</h4>
                                </a>
                                <span>Jane Cooper</span>
                            </div>
                            <hr />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
