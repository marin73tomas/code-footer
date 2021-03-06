import React from "react";
import Menu from "./MenuCollapse";
import NavigationCollapse from "./NavigationCollapse";
import SocialLinks from "../../SocialLinks";

const MobileFooter = ({ navLinkGroups, legalText, socialLinks }) => {
  return (
    <div className="MobileFooter md:hidden">
        <div className="container">
        {/* generates every menu item */}
        <NavigationCollapse navLinkGroups={navLinkGroups} />

        <div className="rrssMobile mt-[44px]">
          <SocialLinks socialLinks={socialLinks} />
        </div>

        {/* legaltext is null if not defined  */}
        <div className="copyrightMobile text-white text-center pt-[33px] pb-[57px]">
          {legalText.map((text,idx) => (
            <p key={`${idx}${text}`}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
