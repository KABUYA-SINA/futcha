import React, { useState } from 'react';
import styled from "styled-components/";
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom';
import '../sass/pages/_collapse.scss';

const Collapse = ({ title, text, source }) => {
    const [rotate, setRotate] = useState(true)
    const [textAppear, setAppear] = useState(false)

    const handleClick = () => {
        setRotate((prevState) => (!prevState))
        setAppear((prevState) => (!prevState))
    };

    return (
        <div className="boxes collapse-flex__childs boxes-collapse__modifications">
            <section className='section-collapse'>
                <h2>{title}</h2>
                <IconImageWrapper rotate={+rotate} onClick={handleClick} ><IoIosArrowForward /></IconImageWrapper>
            </section>
            {
                textAppear && <div className="boxes-childs">
                    <span >{text}</span>
                    <Link
                        to={source}
                        className='link-button'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button type='button' className='button'>
                            Learn more
                        </button>
                    </Link>
                </div>
            }

        </div>
    )
}

const IconImageWrapper = styled.div`
  transform: rotate(90deg);
  overflow: hidden;
  transition: all 0.3s ease-out;
  ${({ rotate }) => rotate && `transform: rotate(0deg)`};
`

export default Collapse;