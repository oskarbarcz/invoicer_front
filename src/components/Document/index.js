import './style.sass'
import DocumentIssueDetails from "../DocumentIssueDetails";
import DocumentTitle from "../DocumentTitle";
import DocumentParties from "../DocumentParties";
import DocumentProducts from "../DocumentProducts";
import DocumentSignatures from "../DocumentSignatures";
import invoiceDetails from '../../mocks/invoiceMock.js';

function Document() {
  return (
    <div className="document">
      <DocumentIssueDetails/>
      <DocumentTitle invoiceNumber={invoiceDetails.documentNumber}/>
      <DocumentParties seller={invoiceDetails.seller} buyer={invoiceDetails.buyer}/>
      <DocumentProducts products={invoiceDetails.products}/>
      <DocumentSignatures/>
    </div>
  )
}

export default Document;