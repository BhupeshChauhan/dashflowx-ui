import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar"

interface iDfxAvatar {
    imageSrc: string;
    imageAlt: string;
}

export const DfxAvatar = ({imageSrc, imageAlt}: iDfxAvatar) => {
  return (
    <Avatar>
      <AvatarImage src={imageSrc} alt={imageAlt} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
