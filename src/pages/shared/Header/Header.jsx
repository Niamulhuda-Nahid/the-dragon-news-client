import React, { useContext } from 'react';
import moment from 'moment';
import logo from '../../../assets/logo.png'
import Marquee from "react-fast-marquee";
import { Container} from 'react-bootstrap';


const Header = () => {
    
    return (
        <Container>
            <div className='text-center mt-5'>
                <img src={logo} alt="" />
                <p className='text-secondary fs-5 mb-1 mt-2'>Journalism Without Fear or Favour</p>
                <p className='fs-5 fw-semibold'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-body-secondary p-2 mb-3'>
                <button type="button" className="btn btn-danger rounded-0 mx-3">Danger</button>
                <Marquee className='fw-semibold item-center'>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
            
        </Container>
    );
};

export default Header;