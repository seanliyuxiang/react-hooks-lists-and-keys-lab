import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElements = links.map(singleLink => {
    return <a key={singleLink} href={`#${singleLink}`}>{singleLink}</a>;
  });

  return (
    <nav>
      {linkElements}
    </nav>
  );
}

export default NavBar;
