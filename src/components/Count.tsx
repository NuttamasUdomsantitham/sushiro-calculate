import styles from './count.module.css'
import Image from 'next/image';
import QuantityInput from './QuantityInput';

export default function Banner () {
    return (
        <main className={styles.main}>
            <div className={styles.sushi}>
                <h2>Sushi</h2>
                <div className={styles.container}>
                    <Image 
                        src="/img/red-plate.png" 
                        alt="Image" 
                        width={100} height={100} />
                    <p className={styles.text}>Red Plate</p>
                    <QuantityInput/>
                </div>
                <div className={styles.container}>
                    <Image 
                        src="/img/silver-plate.png" 
                        alt="Image" 
                        width={100} height={100} />
                    <p className={styles.text}>Silver Plate</p>
                    <QuantityInput/>
                </div>
                <div className={styles.container}>
                    <Image 
                        src="/img/gold-plate.png" 
                        alt="Image" 
                        width={100} height={100} />
                    <p className={styles.text}>Gold Plate</p>
                    <QuantityInput/>
                </div>
                <div className={styles.container}>
                    <Image 
                        src="/img/black-plate.png" 
                        alt="Image" 
                        width={100} height={100} />
                    <p className={styles.text}>Black Plate</p>
                    <QuantityInput/>
                </div>    
            </div>
        </main>
    )
}