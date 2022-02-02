import './style.sass'

function DocumentTitle({invoiceNumber}) {
  return (
    <div className="document-title">
      <h1 className="">
        <span className="document-title__text">Faktura VAT nr </span>
        <span className="document-title__text document-title__text--bold">{invoiceNumber}</span>
      </h1>

    </div>
  );
}

export default DocumentTitle;