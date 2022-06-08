import { Parallax } from 'react-parallax';
import redBridge from '../img/redBridge.jpg';



const ImageOne = () => (
    <Parallax className="image" bgImage={redBridge} bgImageAlt="the cat" strength={800}>
       <div className='content'>
              <span className='img-txt'>Your Adventure Awaits</span>
       </div>
    </Parallax>
);

export default ImageOne;