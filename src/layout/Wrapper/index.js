import Document from '../../components/Document'
import './style.sass'
import Sidebar from "../../components/Sidebar";

function Wrapper() {

  return (
    <div className="wrapper">
      <div className="wrapper__sidebar">
        <Sidebar/>
      </div>
      <div className="wrapper__document-space">
        <Document/>
      </div>
    </div>
  )
}

export default Wrapper;