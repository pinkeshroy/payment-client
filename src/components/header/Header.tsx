import './Header.scss';
import React from 'react';

interface HeaderProps {
    heading?: string;
    headingPosition?: "left" | "center" | "right";
    subTitle?: string;
    compOnLeft?: React.ReactNode;
    onLeftCompClick?: () => void;
    compOnRight?: React.ReactNode;
    onRightCompClick?: () => void;
  }

const Header: React.FC<HeaderProps> = ({
  heading ,
  headingPosition ,
  subTitle,
  compOnLeft,
  onLeftCompClick,
  compOnRight,
  onRightCompClick
}) => {
  return (
    <div className="header-container">
        {compOnLeft && (
      <div className="header-left" onClick={onLeftCompClick}>
        {compOnLeft}</div>
        )
    }
     <div className={`header-center header-position-${headingPosition}`}>
  <div className={headingPosition !== "left" ? 'header-heading' : 'header-username'}>
    {heading}
  </div >
  {subTitle && <div className='header-subtitle'>{subTitle}</div>}
</div>
{compOnRight && (
  <div className="header-right" onClick={onRightCompClick}>
    {compOnRight}
  </div>
)}

    </div>
  );
};

export default Header;
