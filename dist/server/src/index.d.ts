declare const _default: {
    register: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => void;
    bootstrap: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => Promise<void>;
    destroy: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => void;
    config: {
        default: {};
        validator(): void;
    };
    controllers: {
        settingsController: ({ strapi }: {
            strapi: import("@strapi/types/dist/core").Strapi;
        }) => {
            getContentTypes(ctx: any): Promise<void>;
            getSettings(ctx: any): Promise<void>;
            updateSettings(ctx: any): Promise<any>;
        };
        contentController: ({ strapi }: {
            strapi: import("@strapi/types/dist/core").Strapi;
        }) => {
            findAll: (ctx: any) => Promise<void>;
        };
        redirectsController: ({ strapi }: {
            strapi: import("@strapi/types/dist/core").Strapi;
        }) => {
            handleError(ctx: any, error: any, message?: string): any;
            findOne(ctx: any): Promise<any>;
            findAll(ctx: any): Promise<void>;
            create(ctx: any): Promise<any>;
            update(ctx: any): Promise<any>;
            delete(ctx: any): Promise<any>;
            import(ctx: any): Promise<any>;
        };
    };
    routes: {
        'content-api': {
            type: string;
            routes: {
                method: string;
                path: string;
                handler: string;
                config: {
                    policies: any[];
                };
            }[];
        };
        admin: {
            type: string;
            routes: {
                method: string;
                path: string;
                handler: string;
                config: {
                    policies: any[];
                    auth: boolean;
                };
            }[];
        };
    };
    services: {
        settingsService: ({ strapi }: {
            strapi: import("@strapi/types/dist/core").Strapi;
        }) => {
            getSettings(): Promise<any[]>;
            updateSetting(uid: string, changes: Partial<import("../../types/redirectPluginTypes").LifecycleSetting>): Promise<any[]>;
            getContentTypes(): Promise<import("../../types/redirectPluginTypes").ContentType[]>;
        };
        contentService: ({ strapi, }: {
            strapi: import("@strapi/types/dist/core").Strapi;
        }) => {
            findAll: () => Promise<import("@strapi/types/dist/modules/documents").AnyDocument[]>;
        } & import("@strapi/types/dist/core/core-api/service").Base;
        redirectService: ({ strapi, }: {
            strapi: import("@strapi/types/dist/core").Strapi;
        }) => {
            format: (urlTemplate: string, fieldValue: string, locale?: string) => string;
            findOne: (id: string) => Promise<import("@strapi/types/dist/modules/documents").AnyDocument>;
            findAll: (params?: import("../../types/redirectPluginTypes").FindAllParams) => Promise<import("../../types/redirectPluginTypes").FindAllResponse>;
            create: (redirect: import("../../types/redirectPluginTypes").RedirectInput) => Promise<import("@strapi/types/dist/modules/documents").AnyDocument>;
            update: (id: string, redirectData: import("../../types/redirectPluginTypes").RedirectInput) => Promise<import("@strapi/types/dist/modules/documents").AnyDocument>;
            delete: (documentId: string) => Promise<{
                documentId: string;
                entries: import("@strapi/types/dist/modules/documents").AnyDocument[];
            }>;
            import: (data: (import("../../types/redirectPluginTypes").RedirectInput & Partial<{
                status: string;
            }>)[]) => Promise<import("../../types/redirectPluginTypes").ImportResult[]>;
        } & import("@strapi/types/dist/core/core-api/service").Base;
    };
    contentTypes: {
        redirect: {
            schema: {
                kind: string;
                collectionName: string;
                info: {
                    singularName: string;
                    pluralName: string;
                    displayName: string;
                };
                options: {
                    draftAndPublish: boolean;
                    comment: string;
                };
                pluginOptions: {
                    'content-manager': {
                        visible: boolean;
                    };
                    'content-type-builder': {
                        visible: boolean;
                    };
                };
                attributes: {
                    source: {
                        type: string;
                        required: boolean;
                    };
                    destination: {
                        type: string;
                        required: boolean;
                    };
                    permanent: {
                        type: string;
                    };
                };
            };
        };
    };
    policies: {};
    middlewares: {};
};
export default _default;
