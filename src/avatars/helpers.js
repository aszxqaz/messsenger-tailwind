import { AVATARS } from './names';
import { FIREBASE_AVATAR_PATH } from './paths';

export const getRandomAvatarSrc = () => {
	const n = Math.floor(Math.random() * 4);

	return FIREBASE_AVATAR_PATH + AVATARS[n].pathname;
};
