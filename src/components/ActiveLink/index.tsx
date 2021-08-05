import { useRouter } from 'next/dist/client/router';
import Link, { LinkProps } from 'next/link';
import { ReactElement, cloneElement } from 'react';

interface ActiveLinkProps extends LinkProps{
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({children, activeClassName, ...rest}: ActiveLinkProps){
  // esse asPath consegue buscar o caminho da url por exemplo: '/' ou '/posts'
  const { asPath } = useRouter();
  const className = asPath === rest.href ? activeClassName : ''

  return (
    <Link {...rest}>
    {cloneElement(children, {
      className,
    })}
    </Link>
  );
}