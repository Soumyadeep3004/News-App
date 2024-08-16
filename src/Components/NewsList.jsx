import React from 'react'

export default function NewsList() {
    const temp = [1, 2, 3, 4, 5,6]
    return (
        <div style={{width:'300px'}}>

            {/* <h3 style={{ marginLeft: '30px', marginBottom: '20px' }}>Trending</h3> */}

            <ul style={{ listStyle: 'none'}}>
                {
                    temp.map((val) => (
                        <div>
                            <li style={{ margin: '30px 10px' }}>
                                <a href="">
                                    {/* <span>1</span> */}
                                    <h4>The Best Homemade Masks for Face (keep the Pimples Away)</h4>
                                    <span>Jane Cooper</span>
                                </a>
                            </li>
                            <hr />
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}
