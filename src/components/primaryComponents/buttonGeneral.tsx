import React from 'react';

interface ButtonGeneralProps {
  value: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; 
  className?: string;
}

export default function ButtonGeneral(props: ButtonGeneralProps): JSX.Element {
  const { value, onClick, className } = props;

  return (
    <button type="button" onClick={onClick} className={className}>
      {value}
    </button>
  );
}