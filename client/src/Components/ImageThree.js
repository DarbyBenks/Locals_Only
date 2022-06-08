import { Parallax } from 'react-parallax';
import crystalLake from '../img/crystalLake.jpg';

const ImageThree = () => (
    <Parallax className="image" bgImage={crystalLake} bgImageAlt="the cat" strength={800}>
       <div className='content'>
       </div>
    </Parallax>
);

export default ImageThree;