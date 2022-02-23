import { useState, useEffect } from "react"
import { getAvatarSrc } from "../lib/getAvatarSrc"

export default function useAvatarInCloudFirebase() {
    const [avatarSrc, setAvatarSrc] = useState(null)
    useEffect(() => {
        getAvatarSrc().then((url) => setAvatarSrc(url))
    }, [])
    return avatarSrc
}
