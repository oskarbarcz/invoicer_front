import './style.sass'
import SidebarSection from "../SidebarSection";


function Sidebar() {

  return (
    <div className="sidebar">
      <h1 className="sidebar__title">Invoicer</h1>
      <SidebarSection/>
      <SidebarSection/>
      <SidebarSection/>
      <SidebarSection/>
    </div>
  );
}

export default Sidebar;