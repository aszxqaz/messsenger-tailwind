import { ref, getDownloadURL } from 'firebase/storage';
import { getRandomAvatarSrc } from '../avatars/helpers';
import { storage } from './firebase';

export async function getAvatarSrc() {
	const pathname = getRandomAvatarSrc()
	return getDownloadURL(ref(storage, pathname));
}

