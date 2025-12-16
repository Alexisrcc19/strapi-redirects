declare const _default: {
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
export default _default;
