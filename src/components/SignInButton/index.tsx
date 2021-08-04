import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client';

export function SignInButton(){
    const [session] = useSession();
    
    return session ? (
        <button
        type="button"
        className={styles.signInButton}
        onClick={() => signOut()}
        >
            {/* cor definita inline pois ela vai mudar conforme o estado do componente */}
            <FaGithub color="#04d361" />
            {session.user.name}
            <FiX color="#737380" className={styles.closeIcon} />
        </button>

    ) : (
        <button
        type="button"
        className={styles.signInButton}
        onClick={() => signIn('github')}
        >
            {/* cor definita inline pois ela vai mudar conforme o estado do componente */}
            <FaGithub color="#eba417" />
            Sign in with Github
        </button>
    )
}