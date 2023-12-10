import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle,FaFacebookSquare,FaTwitter,FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h3 className='mt-4'>Login with</h3>
            <Button className='mb-2' variant="outline-primary"><FaGoogle />Login with Google</Button>
            <Button variant="outline-secondary"> <FaGithub />Login with Github</Button>
            <div>
                <h4 className='mt-4'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item disabled><FaFacebookSquare />facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter>twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram>instagram</ListGroup.Item>
                    
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div>
                <img src={bg} alt="" />
               
            </div>
        </div>
    );
};

export default RightNav;