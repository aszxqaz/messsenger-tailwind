import { AVATARS } from './names';
import { AVATAR_PATH } from './paths';

export const getRandomAvatarSrc = () => {
	const n = Math.floor(Math.random() * 4);

	return AVATAR_PATH + AVATARS[n].pathname;
};
