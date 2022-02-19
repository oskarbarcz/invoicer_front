import './style.sass'
import DocumentParty from "../DocumentParty";

function DocumentParties({buyer, seller}) {
  return (
    <div className="document-parties">
      <DocumentParty party={seller} seller/>
      <DocumentParty party={buyer} buyer/>
    </div>
  )
}

export default DocumentParties;