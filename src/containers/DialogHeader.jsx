import { useEffect, useState } from 'react';
import { MdMoreHoriz, MdSend } from 'react-icons/md';
import tw from 'tailwind-styled-components';
import { getRandomAvatarSrc } from '../avatars/helpers';
import { getAvatarSrc } from '../lib/getAvatarSrc';

const Wrapper = tw.div`
    flex items-center justify-between h-12 bg-slate-100`;

const PartnerInfo = tw.div`
    flex flex-row items-center capitalize`;

const PartnerImage = tw.div`
    w-12 p-1`;

const PartnerName = tw.p`
    font-bold pl-1`;

const HeaderButtons = tw.div`
    mr-3 ml-3"`;

export default function DialogHeader() {
    const [avatarSrc, setAvatarSrc] = useState(null)
    useEffect(() => {
        getAvatarSrc("avatars/gentleman.svg").then((url) => setAvatarSrc(url))
    }, [])
	return (
		<Wrapper>
			<PartnerInfo>
				<PartnerImage>
					<img className="w-full rounded-full" src={avatarSrc} />
				</PartnerImage>
				<PartnerName>Альберт Абрамян</PartnerName>
			</PartnerInfo>
			<HeaderButtons>
				<MdMoreHoriz />
			</HeaderButtons>
		</Wrapper>
	);
}
