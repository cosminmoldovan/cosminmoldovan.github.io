import {SpinnerInfinity} from 'spinners-react';
import loader from '../images/loader.gif';

function LoadingScreen() {
  return (
    <div className='loading-screen'>
      <SpinnerInfinity size={50} thickness={180} speed={100} color="rgba(12, 12, 34, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" />
      {/* <img src={loader} alt="" width={300} /> */}
    </div>
  )
}
export default LoadingScreen;
