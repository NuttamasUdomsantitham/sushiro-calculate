import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner () {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerText}>
                <h1>SUSHIRO</h1>
            </div>

            <div className={styles.bannerImg}>
                <Image src={'/img/sushi.png'} 
                alt='cover'
                fill={true}
                objectFit='cover'
                />    
            </div>
        </div>
    )
}