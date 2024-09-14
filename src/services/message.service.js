import {callExternalApi} from "./external-api.service";

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL;

export const getPublicResource = async () => {
    const config = {
        url: `${apiServerUrl}/api/messages/public`, method: "GET", headers: {
            "content-type": "application/json",
        },
    };

    const {data, error} = await callExternalApi({config});

    return {
        data: data || null, error,
    };
};

export const getProtectedResource = async () => {
    const config = {
        url: `${apiServerUrl}/api/messages/protected`, method: "GET", headers: {
            "content-type": "application/json",
        },
    };

    const {data, error} = await callExternalApi({config});

    return {
        data: data || null, error,
    };
};

export const getAdminResource = async () => {
    const config = {
        url: `${apiServerUrl}/api/messages/admin`, method: "GET", headers: {
            "content-type": "application/json",
        },
    };

    const {data, error} = await callExternalApi({config});

    return {
        data: data || null, error,
    };
};

export const apiFindEvents = async () => {
    const config = {
        url: `${apiServerUrl}/api/v1/events`, method: "GET", headers: {
            "content-type": "application/json",
        },
    };

    const {data, error} = await callExternalApi({config});

    return {
        data: data || null, error,
    };
};


export const apiDeleteEvents = async (id) => {
    const config = {
        url: `${apiServerUrl}/api/v1/events/${id}`, method: "DELETE"
    };

    const {data, error} = await callExternalApi({config});

    return {
        data: data || null, error,
    };
};


export const apiPartialUpdate = async (id, partialEventUpdate) => {
    const config = {
        url: `${apiServerUrl}/api/v1/events/${id}`,
        method: "PATCH",
        headers: {"content-type": "application/json"},
        data: partialEventUpdate
    };

    const {data, error} = await callExternalApi({config});

    return {
        data: data || null, error,
    };
};

export const apiCreateEvents = async (event) => {

    const config = {
        url: `${apiServerUrl}/api/v1/events`, method: "POST", headers: {
            "content-type": "application/json",
        }, data: event
    };

    const {data, error} = await callExternalApi({config});

    return {
        data: data || null, error,
    };
};


export const apiFindAllClients = async () => {
    const config = {
        url: `${apiServerUrl}/api/v1/clients`, method: "GET", headers: {
            "content-type": "application/json",
        },
    };

    const {data, error} = await callExternalApi({config});

    return {
        data: data || null, error,
    };
};

export const apiCreateClients = async (client) => {

    const config = {
        url: `${apiServerUrl}/api/v1/clients`, method: "POST", headers: {
            "content-type": "application/json",
        }, data: client
    };

    const {data, error} = await callExternalApi({config});

    return {
        data: data || null, error,
    };
};
