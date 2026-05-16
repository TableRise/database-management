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
    notes: {
        title: string;
        content: string;
    }[]
}

export interface GameInfo {
    campaigns: GameInfoCampaigns[];
    characters: string[];
    badges: string[];
}

export interface UserDetail {
    userDetailId: string;
    userId: string;
    firstName: string;
    lastName: string;
    secretQuestion: SecretQuestion;
    birthday: string;
    gameInfo: GameInfo;
    biography: string;
    cover: ImageObject;
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
