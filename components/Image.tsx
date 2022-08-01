import NextImage, { ImageProps } from 'next/image'
import { FC, useState } from 'react'

interface ImgProps extends ImageProps {
  noLoadBg?: boolean
}
const Image: FC<ImgProps> = ({ src, alt, noLoadBg = false }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <NextImage
      src={src}
      alt={alt}
      layout={'fill'}
      objectFit={'cover'}
      className={
        noLoadBg
          ? ''
          : `bg-brown transform transition-opacity opacity-0 duration-700 ${
              isLoaded && 'opacity-100'
            }`
      }
      onLoadingComplete={() => {
        setIsLoaded(true)
      }}
    />
  )
}

export default Image
