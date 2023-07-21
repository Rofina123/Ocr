export declare class OcrValidationServiceConfig {
    static EndPoint: {
        OCRValidate: {
            GetNewOcrData: string;
            CreateReferral: string;
            SaveClientDetail: string;
            SaveContactDetail: string;
            SaveProviderDetail: string;
            SaveReferralProvider: string;
            CreateAttachment: string;
            UpdateImgaCatogory: string;
            CancelRefferral: string;
        };
    };
}
export declare class RBACINFO {
    apiHost: string;
    tokenKey: string;
    others?: any;
    orgID?: any;
    environment?: Environment;
}
export declare class Environment {
    mstrUsername?: string;
    mstrPassword?: string;
    mstrURL?: string;
    mstrProjectID?: string;
    applicationid?: string;
    priority?: string;
}
