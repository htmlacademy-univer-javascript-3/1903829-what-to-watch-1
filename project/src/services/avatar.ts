const AUTH_AVATAR_URL = 'wtw-avatar';

type Token = string;

const getAvatarURL = (): Token => {
  const token = localStorage.getItem(AUTH_AVATAR_URL);
  return token ?? '';
};

const saveAvatarURL = (token: Token): void => { localStorage.setItem(AUTH_AVATAR_URL, token); };

const dropAvatarURL = (): void => { localStorage.removeItem(AUTH_AVATAR_URL); };

export { getAvatarURL, saveAvatarURL, dropAvatarURL };
