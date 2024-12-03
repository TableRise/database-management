import { userStatus } from "../types/DatabaseEntities";

export interface InProgress {
    status: userStatus;
    currentFlow: string;
    prevStatusMustBe: userStatus;
    nextStatusWillBe: userStatus;
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
    bannedFromCampaigns: string[];
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
