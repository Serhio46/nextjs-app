'use server';
import { signIn, signOut } from '@/shared/lib/auth';

export const handleGitHubLogin = async () => {
    await signIn('github');
};

export const handleGitHubLogout = async () => {
    await signOut();
};
