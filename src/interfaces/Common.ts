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
    deleteUrl: string;
    request: ImgaeObjectRequest;
}
