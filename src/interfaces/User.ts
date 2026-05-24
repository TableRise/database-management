import { ImageObject } from "./Common";

export interface InProgress {
    status: string;
    currentFlow: string;
    prevStatusWas: string;
    nextStatusWillBe: string;
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
    campaignsJoinedAmount: number;
    charactersCreatedAmount: number;
    campaignsClosedAmount: number;
    equipBoughtAmount: number;
}

export interface UserDetail {
    userDetailId: string;
    userId: string;
    firstName: string;
    lastName: string
    birthday: string;
    gameInfo: GameInfo;
    rank: string;
    biography: string;
    cover: ImageObject;
    role: string;
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
