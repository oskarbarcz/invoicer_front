import './style.sass'

function DocumentParty({party: {name, taxIdNumber, addressFirstLine, addressSecondLine}, seller}) {
  const role = (seller === true) ? "Sprzedawca" : "Nabywca";

  return (
    <div className="document-party">
      <h2 className="document-party__title">{role}</h2>
      <span className="document-party__text document-party__text--name">{name}</span>
      <span className="document-party__text document-party__text--tax-id">NIP: {taxIdNumber}</span>
      <span className="document-party__text">{addressFirstLine}</span>
      <span className="document-party__text">{addressSecondLine}</span>
    </div>
  )
}

export default DocumentParty;