declare const _default: {
    settingsService: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => {
        getSettings(): Promise<any[]>;
        updateSetting(uid: string, changes: Partial<import("../../../types/redirectPluginTypes").LifecycleSetting>): Promise<any[]>;
        getContentTypes(): Promise<import("../../../types/redirectPluginTypes").ContentType[]>;
    };
    contentService: ({ strapi, }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => {
        findAll: () => Promise<import("@strapi/types/dist/modules/documents").AnyDocument[]>;
    } & import("@strapi/types/dist/core/core-api/service").Base;
    redirectService: ({ strapi, }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => {
        codebuildClient: import("@aws-sdk/client-codebuild").CodeBuildClient;
        format: (urlTemplate: string, fieldValue: string, locale?: string) => string;
        findOne: (id: string) => Promise<import("@strapi/types/dist/modules/documents").AnyDocument>;
        findAll: (params?: import("../../../types/redirectPluginTypes").FindAllParams) => Promise<import("../../../types/redirectPluginTypes").FindAllResponse>;
        create: (redirect: import("../../../types/redirectPluginTypes").RedirectInput) => Promise<import("@strapi/types/dist/modules/documents").AnyDocument>;
        update: (id: string, redirectData: import("../../../types/redirectPluginTypes").RedirectInput) => Promise<import("@strapi/types/dist/modules/documents").AnyDocument>;
        delete: (documentId: string) => Promise<{
            documentId: string;
            entries: import("@strapi/types/dist/modules/documents").AnyDocument[];
        }>;
        import: (data: (import("../../../types/redirectPluginTypes").RedirectInput & Partial<{
            status: string;
        }>)[]) => Promise<import("../../../types/redirectPluginTypes").ImportResult[]>;
        publish: (stage?: string) => Promise<{
            status: string;
        }>;
    } & import("@strapi/types/dist/core/core-api/service").Base;
};
export default _default;
