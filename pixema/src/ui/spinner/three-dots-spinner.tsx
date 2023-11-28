import { BallTriangle, ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';

export const ThreeDotsSpinner: React.FC = () => {
  return (
    <BallTriangleSpinnerWrapper>
      {/* <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="var(--button-bg-primary-color)"
        ariaLabel="ball-triangle-loading"
        visible={true}
      /> */}
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="var(--button-bg-primary-color)"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </BallTriangleSpinnerWrapper>
  );
};

const BallTriangleSpinnerWrapper = styled.div`
  margin: 100px 0 0 400px;
`;
