import { Buffer } from "buffer"

export type PayloadType = {
    exp: number, 
    iat: number, 
    roles: string[], 
    sub: string, 
    token_type: string, 
    user_id: number
}

export const decodeToken = (accessToken: string): PayloadType => {
    const parts = accessToken.split('.').map(part => Buffer.from(part.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString());
    const payload = JSON.parse(parts[1]);
    return payload;
}