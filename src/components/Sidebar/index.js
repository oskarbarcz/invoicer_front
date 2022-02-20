import './style.sass'
import SidebarSection from "../SidebarSection";


function Sidebar() {

  return (
    <div className="sidebar">
      <h1 className="sidebar__title">Invoicer</h1>
      <SidebarSection>
        <div className="sidebar_section__body">
          Section body
        </div>
      </SidebarSection>
      <SidebarSection>
        <div className="sidebar_section__body">
          Section body
        </div>
      </SidebarSection>
      <SidebarSection>
        <div className="sidebar_section__body">
          Section body
        </div>
      </SidebarSection>
    </div>
  );
}

export default Sidebar;