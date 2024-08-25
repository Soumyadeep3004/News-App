import React from 'react'

export default function Trending() {
    const temp = [1, 2, 3, 4, 5]
    return (
        <div>

            <h3 style={{margin:'20px 10px'}}>Trending</h3>

            <div style={{ listStyle: 'none' }}>
                {
                    temp.map((val) => (
                        <div key={val} style={{ border: '1px solid #E8DEDC' }}>
                            <div style={{ padding: '10px' }}>
                                <a href="">
                                    {/* <span>1</span> */}
                                    <h4 >The Best Homemade Masks for Face (keep the Pimples Away)</h4>
                                    <span >Jane Cooper</span>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
