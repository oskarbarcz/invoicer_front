import './style.sass'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";

function SidebarSection() {
  const [expanded, setExpanded] = useState(true);

  const onHideOrShow = function (){
    setExpanded(!expanded);
  }
  let body = null;

  if(expanded){
    body = (
      <div className="sidebar_section__body">
      Section body
    </div>
    );
  }

  return (
    <div className="sidebar_section">
      <button className="sidebar_section__header" onClick={onHideOrShow}>
        <span className="sidebar_section__header-icon">
          <FontAwesomeIcon icon={faCoffee} fixedWidth/>
        </span>
        <h2 className="sidebar_section__title">Some name</h2>
        <span className="sidebar_section__header-click">
          <FontAwesomeIcon icon={faChevronDown} fixedWidth/>
        </span>
      </button>
      {body}
    </div>
  );
}

export default SidebarSection;