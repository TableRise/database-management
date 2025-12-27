import { userStatus } from "../types/DatabaseEntities";
import { ImageObject } from "./Common";

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

export interface GameInfoCampaigns {
    campaignId: string;
    role: string;
    title: string;
    description: string;
    cover?: ImageObject;
}

export interface GameInfo {
    campaigns: GameInfoCampaigns[];
    characters: string[];
    badges: string[];
    bannedFromCampaigns: string[];
}

export interface UserDetail {
    userDetailId: string;
    userId: string;
    firstName: string;
    lastName: string;
    pronoun: string;
    secretQuestion: SecretQuestion | null;
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
    userId: string;
    inProgress: InProgress;
    providerId: string;
    email: string;
    password: string;
    nickname: string;
    tag: string;
    picture: ImageObject;
    twoFactorSecret: TwoFactorSecret;
    createdAt: string;
    updatedAt: string;
}
