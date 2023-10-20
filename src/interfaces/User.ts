export interface InProgress {
    status: 'wait_to_confirm' | 'wait_to_complete';
    code: string;
}

export interface SecretQuestion {
    question: string;
    answer: string;
}

export interface GameInfo {
    campaigns: string[];
    characters: string[];
    badges: string[];
}

export interface UserDetail {
    userDetailId?: string;
    userId?: string;
    firstName: string;
    lastName: string;
    pronoun: 'he/his' | 'she/her' | 'they/them' | 'he/his' | 'she/her' | 'any';
    secretQuestion: SecretQuestion;
    birthday: string;
    gameInfo: GameInfo;
    biography: string;
    role: 'user' | 'admin';
}

export interface TwoFactorSecret {
    secret: string;
    qrcode: string;
    active: boolean;
}

export default interface User {
    userId?: string;
    inProgress?: InProgress;
    providerId?: string;
    email: string;
    password: string;
    nickname?: string;
    tag?: string;
    picture: string;
    twoFactorSecret?: TwoFactorSecret;
    createdAt?: string;
    updatedAt?: string;
}
