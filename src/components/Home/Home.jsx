import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <>
      <HomeBackground className='redd'>
        <Truck src ="/assests/images/truck.png" />
        <BackgroundRoad /> 
      </HomeBackground>
    </>
  )
}

export default Home


const HomeBackground= styled.div`
  height: 100vh;
`

const Truck = styled.img`
  z-index:5;
  margin-top: 15rem;
  animation-name: example;
  animation-duration: 1s;
  animation-direction: reverse;  
  animation-iteration-count: infinite;
  @keyframes example {
  0%   {transform: translateY(0px)}
  50%  {transform: translateY(-7px)}
  100% {transform: translateY(0px)}
  }
`

const BackgroundRoad = styled.div`
  height: 100vh;
  width: 10000vw;
  position: absolute;
  top: 0;
  z-index: -1;
  background-image: url('assests/images/road.jpg');
  background-repeat: repeat-x;
  background-size: contain;
  animation: road 30s linear infinite;
  @keyframes road{
    100%{
      transform: translatex(-3400px);
    }
  }
`