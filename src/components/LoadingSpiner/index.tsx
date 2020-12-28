import React from 'react';
import LoadingWrapper from './styles';
interface ILoadiSpiner {
  height: string;
  containerWidth: string;
  color: string;
}

const LoadingSpiner: React.FC<ILoadiSpiner> = ({
  height,
  color,
  containerWidth,
}) => {
  return (
    <LoadingWrapper
      containerWidith={containerWidth}
      height={height}
      color={color}
    >
      <div className='profile-main-loader'>
        <div className='loader'>
          <svg className='circular-loader' viewBox='25 25 50 50'>
            <circle
              className='loader-path'
              cx='50'
              cy='50'
              r='20'
              fill='none'
              stroke={color}
              stroke-width='2'
            />
          </svg>
        </div>
      </div>
    </LoadingWrapper>
  );
};

export default LoadingSpiner;
