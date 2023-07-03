import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import SecretNav from '../secret-nav/SecretNav';
import UnsecretNav from '../unsecret-nav/UnsecretNav';
import Profile from './Profile';

const API = process.env.REACT_APP_API;

export default function AboutUs() {
    const [useSecretNav, setUseSecretNav] = useState(false);
    const [user, setUser] = useState("");

    useEffect(() => {
        const token = localStorage.getItem('token');
    
        if (token) {
          fetch(API + '/dashboard', {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + token
            }
          })
          .then(res => res.json())
          .then(data => {
            if (data['status'] !== 200){
                setUseSecretNav(false)
            }
            else{
              setUser(data['child_first_name']);
              setUseSecretNav(true)
            }
          })
        } else{
            setUseSecretNav(false)
        }
    }, []);

  return (
    <div>
        <Container>
            <Row className='d-flex justify-content-center'>
                {useSecretNav ? <SecretNav user={user}/> : <UnsecretNav/>}
                <Col md={12}>
                    <br></br>
                    <h1 className='text-center'>About Us</h1>
                    <hr></hr>
                </Col>
                <Col md={4}>
                   <Profile
                        name="Chin Shi Xuen"
                        text="Computer Science student at IICP (Coventry University)."
                        github="https://github.com"
                        linkedin="https://www.linkedin.com"
                        image="profile/shixuen.jpg"
                    />
                </Col>
                <Col md={4}>
                   <Profile
                        name="Jeremy Ong"
                        text="Computer Science student at IICP (Coventry University)."
                        github="https://github.com"
                        linkedin="https://www.linkedin.com"
                        image="profile/jeremy.jpeg"
                    />
                </Col>
                <Col md={4}>
                   <Profile
                        name="Mukunda"
                        text="Computer Science student at IICP (Coventry University)."
                        github="https://github.com"
                        linkedin="https://www.linkedin.com"
                        image="profile/mukunda.jpeg"
                    />
                </Col>
            </Row>
        </Container>
    </div>
  )
}
