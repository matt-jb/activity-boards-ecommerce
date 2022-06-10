import Link from 'next/link';
import { IFooterLink } from '../../utils/types';

export default function FooterLink({ text, url }: IFooterLink) {
  return (
    <Link href={url} passHref><li>{text}</li></Link>
  )
}
