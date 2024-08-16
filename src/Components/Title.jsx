import React from 'react'

export const Title = ({title}) => {
    return (
        <div style={{
            margin: '50px 60px',
            padding: '4px 0px',
            borderStyle: 'solid',
            borderWidth: "0px",
            borderBottomWidth: '2px',
            borderColor: '#212121',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <h2>{title}</h2>
            <a href="">See All</a>
        </div>
    )
}
