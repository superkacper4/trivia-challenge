import React from 'react'
import { StyledBackground, StyledLeftTop, StyledRightBot, StyledLeftBot } from './Background.css'
import elipseImg1 from '../../assets/elipse1.svg'
import elipseImg2 from '../../assets/elipse2.svg'
import maskImg1 from '../../assets/MaskGroup.svg'
import maskImg2 from '../../assets/MaskGroup(1).svg'
import maskImg3 from '../../assets/MaskGroup(2).svg'
import maskImg4 from '../../assets/MaskGroup(3).svg'
import vectorImg1 from '../../assets/Vector165.svg'
import vectorImg2 from '../../assets/Vector166.svg'

interface types {
    white: boolean;
}

const Background = ({ white }: types) => (
    <StyledBackground>
        {white ? (
            <>
                <StyledRightBot src={elipseImg1} alt='shape' width={30} height={50} bottom='0' right='0' />
                <StyledLeftTop src={elipseImg2} alt='shape' width={30} height={30} top='0' left='0' />
                <StyledLeftBot src={maskImg3} alt='shape' width={30} height={50} bottom='0' left='0' />
                <StyledRightBot src={maskImg4} alt='shape' width={30} height={50} bottom='50%' right='-5%' />
            </>
        ) : (
            <>
                <StyledRightBot src={vectorImg2} alt='shape' width={30} height={50} bottom='0' right='-5%' />
                <StyledLeftTop src={vectorImg1} alt='shape' width={20} height={50} top='5%' left='-2%' />
                <StyledLeftBot src={maskImg2} alt='shape' width={40} height={40} bottom='0' left='0' />
                <StyledRightBot src={maskImg1} alt='shape' width={30} height={60} bottom='50%' right='-5%' />
            </>
        )}
    </StyledBackground>
)

export default Background