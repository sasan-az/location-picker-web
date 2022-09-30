export const userTokenKey = "user_token";

const cookieDomain = process.env.NEXT_PUBLIC_COOKIE_DOMAIN;
export const cookieOptions = {
    expires: 365,
    ...(cookieDomain && { domain: cookieDomain }),
};
