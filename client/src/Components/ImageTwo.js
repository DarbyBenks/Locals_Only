import { Parallax } from 'react-parallax';
import curvyRiver from '../img/curvyRiver.jpg';

const ImageTwo = () => (
    <Parallax className="image" bgImage={curvyRiver} bgImageAlt="the cat" strength={800}>
       <div className='content'>
              <span className='img-txt'>Find Your Freedom</span>
       </div>
    </Parallax>
);

export default ImageTwo;