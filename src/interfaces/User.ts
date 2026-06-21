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
    friendsAdded: number;
}

export interface Messages {
    messageId: string;
    encryptedTitle: string,
    encryptedContent: string,
    nonce: string,
    keyVersion: number,
    algorithm: string,
    userId: string;
    timestamp: string;
    status: string;
}

export interface Friends {
    userId: string;
    nickname: string;
    tag: string;
    picture: string;
    rank: string;
    status: string;
    favorite: boolean;
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
    xp: number;
    level: number;
    title: string;
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
