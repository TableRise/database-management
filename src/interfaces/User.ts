export interface InProgress {
    status: 'done' | 'wait_to_complete' |'wait_to_confirm' | 'wait_to_delete' | 'wait_to_verify';
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

export interface Picture {
    id: string;
    link: string;
    uploadDate: Date;
}

export default interface User {
    userId?: string;
    inProgress?: InProgress;
    providerId?: string;
    email: string;
    password: string;
    nickname?: string;
    tag?: string;
    picture?: Picture;
    twoFactorSecret?: TwoFactorSecret;
    createdAt?: string;
    updatedAt?: string;
}
