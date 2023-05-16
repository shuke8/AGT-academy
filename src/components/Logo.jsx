import ATGlogo from '../images/ATG logo/newLogo.svg'
import Image from 'next/image'

export function Logo(props) {
  return <Image src={ATGlogo} {...props} />
}
