import './style.sass'
import DocumentSignature from "../DocumentSignature";

function DocumentSignatures() {
  return (
    <div className="document-signatures">
      <DocumentSignature seller/>
      <DocumentSignature buyer/>
    </div>
  )
}

export default DocumentSignatures;