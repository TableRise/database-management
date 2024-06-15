interface ImgaeObjectRequest {
    success: boolean;
    status: number;
}

export interface ImageObject {
    id: string;
    title: string;
    link: string;
    uploadDate: string;
    thumbSizeUrl?: string;
    mediumSizeUrl?: string;
    deleterUrl: string;
    request: ImgaeObjectRequest;
}
