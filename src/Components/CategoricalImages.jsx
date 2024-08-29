import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export const CategoricalImages = () => {
    return (
        <div style={{ position: 'relative', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
            <Image src="https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" thumbnail style={{ width: '100%', height: 'auto' }}/>

            <div style={{
                // background:'pink',
                position: 'absolute',
                top: '90%',
                left:'50%',
                // height:'100%',
                // width:'100%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                textAlign: 'center',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, ut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut placeat debitis consectetur molestias optio. Iure!
                </p>
            </div>
        </div>
    )
}
