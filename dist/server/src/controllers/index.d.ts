declare const _default: {
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
export default _default;
