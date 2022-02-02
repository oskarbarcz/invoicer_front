import './style.sass'

function DocumentSignature({buyer, seller}) {
  const description = (seller === true) ? "Sprzedawca" : "Nabywca";

  return (
    <div className="document-signature">
      <hr className="document-signature__line"/>
      <h2 className="document-signature__role">{description}</h2>
    </div>
  )
}

export default DocumentSignature;