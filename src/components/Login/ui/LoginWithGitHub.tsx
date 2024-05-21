import { handleGitHubLogin } from '@/shared/lib/authActions';

export function LoginWithGitHub() {
    return (
        <form action={handleGitHubLogin}>
            <button type='submit'>Signin with GitHub</button>
        </form>
    );
}
