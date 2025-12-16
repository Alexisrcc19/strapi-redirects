declare const _default: ({ strapi, }: {
    strapi: import("@strapi/types/dist/core").Strapi;
}) => {
    findAll: () => Promise<import("@strapi/types/dist/modules/documents").AnyDocument[]>;
} & import("@strapi/types/dist/core/core-api/service").Base;
export default _default;
