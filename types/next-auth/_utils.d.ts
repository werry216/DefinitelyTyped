import { IncomingMessage, ServerResponse } from 'http';

interface GenericObject {
    [key: string]: any;
}

interface NextApiRequest extends IncomingMessage, GenericObject {
    query: {
        [key: string]: string | string[];
    };
    cookies: {
        [key: string]: string;
    };
    body: any;
}

interface NextApiResponse<T = any> extends ServerResponse, GenericObject {
    send: Send<T>;
    json: Send<T>;
    status: (statusCode: number) => NextApiResponse<T>;
}

type Send<T> = (body: T) => void;

export { GenericObject, NextApiRequest, NextApiResponse };
