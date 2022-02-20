import './style.sass'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";

function SidebarSection({defaultExpanded = true, children}) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const onHideOrShow = function (){
    setExpanded(!expanded);
  }

  return (
    <div className="sidebar_section">
      <button className="sidebar_section__header" onClick={onHideOrShow}>
        <span className="sidebar_section__header-icon">
          <FontAwesomeIcon icon={faCoffee} fixedWidth/>
        </span>
        <h2 className="sidebar_section__title">Some name</h2>
        <span className="sidebar_section__header-click">
          <FontAwesomeIcon icon={expanded ? faChevronDown: faChevronUp} fixedWidth/>
        </span>
      </button>
      {expanded ? children : null}
    </div>
  );
}

export default SidebarSection;