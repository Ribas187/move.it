import { useChallenges } from '../hooks/challenges';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useChallenges();

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/ribas187.png" alt="Ribas" />
      <div>
        <strong>Guilherme Ribas</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
