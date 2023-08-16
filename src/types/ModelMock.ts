export interface ModelMock {
    create: (payload: any) => Promise<any>;
    find: () => Promise<any[]>;
    findOne: (_id: string) => Promise<any | null>;
    findByIdAndUpdate: (_id: string) => Promise<any | null>;
    findByIdAndDelete: (_id: string) => Promise<any | null>;
}

export interface ModelMockArgs {
    mock: boolean | null,
    createReturn: any | null,
    findReturn: any | null,
    findOneReturn: any | null,
    findByIdAndUpdateReturn: any | null,
    findByIdAndDeleteReturn: any | null
}
