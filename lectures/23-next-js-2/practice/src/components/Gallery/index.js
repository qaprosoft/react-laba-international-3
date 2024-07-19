import Image from 'next/image';
import styles from './styles.module.css';

import Img1 from '@/assets/images/img-1.jpeg';
import Img2 from '@/assets/images/img-2.jpeg';
import Img3 from '@/assets/images/img-3.jpeg';
import Img4 from '@/assets/images/img-4.webp';
import Img5 from '@/assets/images/img-5.jpg';
import Img6 from '@/assets/images/img-6.webp';

const images = [Img1, Img2, Img3, Img4, Img5, Img6];

const Gallery = () => {
	return (
		<div className={styles.gallery}>
			{images.map((image, index) => {
				return (
					<div className={styles.galleryItem} key={index}>
						<Image fill src={image} alt='' placeholder='blur' />
					</div>
				);
			})}
		</div>
	);
};

export default Gallery;
