import React from 'react'
import Card from 'react-bootstrap/Card';
import { CCard, CRow, CCol, CCardText, CCardTitle, CCardImage, CCardBody, CCardGroup } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'


export const CategoryCards = () => {
    const temp = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div>
            {
                temp.map((val) => (
                        <CCard className="mb-3" style={{ maxWidth: '540px', border: 'none',background:'pink' }}>
                            <CRow className="g-0">
                                <CCol xl={4}>
                                    <CCardImage src="https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                                </CCol>
                                <CCol xl={8}>
                                    <CCardBody >
                                        <CCardTitle><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, eum.</p></CCardTitle>
                                        <CCardText>
                                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                                        </CCardText>
                                    </CCardBody>
                                </CCol>
                            </CRow>
                        </CCard>
                        // <hr />
                ))
            }
        </div>

    )
}
