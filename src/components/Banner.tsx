import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner () {
    return (
        <div className={styles.banner}>
            <Image src={'/img/sushi.png'} 
            alt='cover'
            fill={true}
            objectFit='cover'
            />
            <div className={styles.bannerText}>
                <h2>SUSHIRO</h2>
            </div>
        </div>
    )
}