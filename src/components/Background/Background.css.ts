import styled from 'styled-components'

interface typesLeftTop {
    left: string;
    top: string;
    width: number;
    height: number;
}

interface typesRightBot {
    right: string;
    bottom: string;
    width: number;
    height: number;
}

interface typesLeftBot {
    left: string;
    bottom: string;
    width: number;
    height: number;
}

const StyledBackground = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
`;

const StyledLeftTop = styled.img<typesLeftTop>`
    width: ${({ width }) => `${width}vw`};
    height: ${({ height }) => `${height}vw`};
    position: absolute;
    left: ${({ left }) => left};
    top: ${({ top }) => top};


    @media (${({ theme }) => theme.breakPoints.desktop}){
        width: ${({ width }) => `${width / 2}vw`};
        height: ${({ height }) => `${height / 2}vw`};
    }
`;

const StyledRightBot = styled.img<typesRightBot>`
    width: ${({ width }) => `${width}vw`};
    height: ${({ height }) => `${height}vw`};
    position: absolute;
    right: ${({ right }) => right};
    bottom: ${({ bottom }) => bottom};

    @media (${({ theme }) => theme.breakPoints.desktop}){
        width: ${({ width }) => `${width / 2}vw`};
        height: ${({ height }) => `${height / 2}vw`};
    }
`;

const StyledLeftBot = styled.img<typesLeftBot>`
    width: ${({ width }) => `${width}vw`};
    height: ${({ height }) => `${height}vw`};
    position: absolute;
    left: ${({ left }) => left};
    bottom: ${({ bottom }) => bottom};
    
    @media (${({ theme }) => theme.breakPoints.desktop}){
        width: ${({ width }) => `${width / 2}vw`};
        height: ${({ height }) => `${height / 2}vw`};
    }
`;

// const StyledLeftTop = styled.img<types>`
//     position: absolute;
//     left: ${({ left }) => left};
//     top: ${({ top }) => top};

// `;

export { StyledBackground, StyledLeftTop, StyledRightBot, StyledLeftBot }