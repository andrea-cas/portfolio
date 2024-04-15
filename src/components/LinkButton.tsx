import React from 'react'

import { Button } from './ui/button'
import { cn } from '@/lib/utils';

interface LinkButtonProps {
  url: string;
  type: "code" | "demo";
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ type, url, children }) => {
  return (
    <Button variant={type === "code" ? "default" : "secondary"} className={cn(!url && "pointer-events-none cursor-not-allowed",'w-full')} size="lg" disabled={!!url} asChild={!!url}>
      {!!url ? (
        <a href={url} target='_blank' rel="noreferrer">
          {children}
        </a>
      ) : children}
    </Button>
  )
}

export default LinkButton