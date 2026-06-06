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
    donateAmount: number;
}

export interface Messages {
    title: string;
    content: string;
    userId: string;
    timestamp: string;
}

export interface Friends {
    userId: string,
    nickname: string,
    tag: string,
    picture: string,
    rank: string
}

export interface Social {
    discord: string;
    instagram: string;
    x: string;
}

export interface UserDetail {
    userDetailId: string;
    userId: string;
    firstName: string;
    lastName: string;
    birthday: string;
    gameInfo: GameInfo;
    rank: string;
    biography: string;
    cover: ImageObject;
    messages: Messages[];
    gallery: ImageObject[];
    friends: Friends[];
    role: string;
    social: Social;
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
