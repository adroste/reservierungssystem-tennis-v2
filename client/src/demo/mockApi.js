import { config, courts, templates } from './mockDatabase';

import { getBaseDataApi } from '../api';

function handleRequests(url, options) {
    switch (url) {
        case getBaseDataApi.url:
            return {
                config,
                courts,
                templates,
            };
        default:
            return null;
    }

}

export function patchFetch() {
    const _fetch = window.fetch;

    window.fetch = (url, options) => {

        const res = handleRequests(url, options);
        if (res)
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(res),
            });

        return _fetch(url, options);
    };
}