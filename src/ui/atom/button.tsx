import React, { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  children: ReactNode;
  clickHandler?: MouseEventHandler<HTMLButtonElement>; 
}

export default function Button({ children, clickHandler }: ButtonProps) {
  return (
    <button
      onClick={clickHandler}
      className="rounded-sm border border-[var(--main)] text-[var(--main)] py-1 px-3"
    >
      {children}
    </button>
  );
}