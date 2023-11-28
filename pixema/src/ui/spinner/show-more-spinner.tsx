import { ColorRing, TailSpin } from 'react-loader-spinner';

export const ShowMoreSpinner: React.FC = () => {
  return (
    <>
      {/* <TailSpin
        height="20"
        width="20"
        color="var(--button-bg-primary-color)"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      /> */}
      <ColorRing
        visible={true}
        height="30"
        width="30"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#7B61FF', '#7B61FF', '#7B61FF', '#7B61FF', '#7B61FF']}
      />
    </>
  );
};

// const TailSpin = styled.div``
