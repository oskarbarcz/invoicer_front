import './style.sass'

function DocumentTitle ({invoiceNumber}) {
    return (<div className="document-title">Invoice no. {invoiceNumber}</div>)
}

export default DocumentTitle;