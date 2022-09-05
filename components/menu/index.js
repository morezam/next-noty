import { useState } from 'react';
import Link from 'next/link';
import styles from './menu.module.css';

const Menu = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div
				className={`${styles.parentEl} ${open ? styles.openParent : ''}`}
				onClick={() => setOpen(!open)}></div>
			<div className={`${styles.base} ${open ? styles.close : ''}`}>
				<div className={styles.menu} onClick={() => setOpen(!open)}>
					<div className={styles.icon}>
						<div className={styles.bar}></div>
					</div>
				</div>
				<div className={styles.icons}>
					<p className={styles.faCalendarO}>Home</p>
					<p className={styles.faUser}>Signup</p>
					<p className={styles.faTachometer}>Login</p>
				</div>
				<div className={styles.section}>
					<div className={styles.cover1}>
						<div className={styles.cover2}>
							<Link href="/">
								<a className={styles.content}>Home</a>
							</Link>
						</div>
					</div>
				</div>
				<Link href="/signup">
					<a className={`${styles.sectionStatic} ${styles.top}}`}>Signup</a>
				</Link>
				<Link href="/login">
					<a className={`${styles.sectionStatic} ${styles.bottom}}`}>Login</a>
				</Link>
			</div>
		</>
	);
};

export default Menu;
