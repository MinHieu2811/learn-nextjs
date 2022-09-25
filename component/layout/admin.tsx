import * as React from 'react';
import { LayoutProps } from '@/models/index';
import Link from 'next/link';

export function AdminLayout ({ children}: LayoutProps) {
  return (
    <div>
      <h1>
        Admin Layout
      </h1>
      <div>Sidebar</div>

      <Link passHref href="/">
            <a>Home</a>
        </Link>

        <Link passHref href="/about">
            <a>About</a>
        </Link>

        <>
            {children}
        </>
    </div>
  );
}
