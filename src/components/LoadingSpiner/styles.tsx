import styled from 'styled-components';

interface ILoaderSpiner {
  height: string;
  containerWidith: string;
  color: string;
}

const LoadingWrapper = styled.div`
  position: relative;
  /*background:#333;*/
  height: ${(p: ILoaderSpiner) => p.height};
  width: ${(p: ILoaderSpiner) => p.containerWidith};
  &.profile-main-loader {
    left: 50% !important;
    /* margin-left: -100px; */
    position: absolute;
    top: 50% !important;
    /* margin-top: -100px; */
    width: 45px;
    z-index: 9000 !important;
  }

  .profile-main-loader .loader {
    position: relative;
    margin: 0px auto;
    width: ${(p: ILoaderSpiner) => p.height};
    height: ${(p: ILoaderSpiner) => p.height};
  }
  .profile-main-loader .loader:before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  .circular-loader {
    -webkit-animation: rotate 2s linear infinite;
    animation: rotate 2s linear infinite;
    height: 100%;
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    margin: auto;
  }

  .loader-path {
    stroke-dasharray: 150, 200;
    stroke-dashoffset: -10;
    -webkit-animation: dash 1.5s ease-in-out infinite,
      color 6s ease-in-out infinite;
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;
  }

  @-webkit-keyframes rotate {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes rotate {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }
  @-webkit-keyframes color {
    0% {
      stroke: ${(p: ILoaderSpiner) => p.color};
    }
    40% {
      stroke: ${(p: ILoaderSpiner) => p.color};
    }
    66% {
      stroke: ${(p: ILoaderSpiner) => p.color};
    }
    80%,
    90% {
      stroke: ${(p: ILoaderSpiner) => p.color};
    }
  }
  @keyframes color {
    0% {
      stroke: ${(p: ILoaderSpiner) => p.color};
    }
    40% {
      stroke: ${(p: ILoaderSpiner) => p.color};
    }
    66% {
      stroke: ${(p: ILoaderSpiner) => p.color};
    }
    80%,
    90% {
      stroke: ${(p: ILoaderSpiner) => p.color};
    }
  }
`;

export default LoadingWrapper;
