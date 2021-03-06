import {Link} from 'react-router-dom'
import '../Banner/Banner.css'
export const Banner = () => {
  return (
    <div className='banner-container'>
      <img
        className='banner-img'
        src="https://www.transess.com/wp-content/uploads/video-and-animation-banner.jpg"
        alt="baner"
      />
      <div className="center">
        <Link to="/videos">
          <button className="btn login-btn primary-bg my-1">Watch Now</button>
        </Link>
      </div>
    </div>
  );
};
