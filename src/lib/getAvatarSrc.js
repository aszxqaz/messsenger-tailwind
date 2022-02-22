import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';

export async function getAvatarSrc(pathname) {
	return getDownloadURL(ref(storage, pathname));

}
