import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

import homeImage from '../public/image/signIn.webp';

export default function Home() {
  return (
    <>
      <header className={`flex ${styles.header}`}>
        <Link href="/">
          naira<span>refill</span>
        </Link>

        <ul className="flex">
          <li>
            <Link href="/register">Register</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </header>

      <main>
        <section className={styles.container}>
          <div>
            <div className="flex flex-column">
              <h1>We've Missed You</h1>
              <p>
                Kindly signin and get first <br /> access to the very best, <br /> community
                and unlock more opportunities.
              </p>

              <form>
                <div className="flex flex-column">
                  <label>Email:</label>
                  <input type="email" />
                </div>

                <div className="flex flex-column">
                  <label>Password:</label>
                  <input type="password" />
                </div>

                <button>Login</button>

                <div className="flex flex-column">
                  <Link href="/forgot-password">Forgot Password?</Link>

                  <Link href="/register"> Don't have an account? Sign up</Link>
                </div>
              </form>
            </div>
          </div>
          <Image src={homeImage} alt="hero imgage" />
        </section>
      </main>
    </>
  );
}
