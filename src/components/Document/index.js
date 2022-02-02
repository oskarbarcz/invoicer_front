import './style.sass'
import DocumentIssueDetails from "../DocumentIssueDetails";
import DocumentTitle from "../DocumentTitle";
import DocumentParties from "../DocumentParties";
import DocumentProducts from "../DocumentProducts";
import DocumentSignatures from "../DocumentSignatures";

function Document() {

  const invoiceDetails = {
    documentNumber: "17/2022",
    seller: {
      name: "Imię nazwisko",
      taxIdNumber: "0000000000",
      addressFirstLine: "Al. Jerozolimskie 1/1",
      addressSecondLine: "00-001 Warszawa",
    },
    buyer: {
      name: "Acme Spółka z ograniczoną odpowiedzialnością",
      taxIdNumber: "1111111111",
      addressFirstLine: "Al. Jerozolimskie 1/1",
      addressSecondLine: "00-001 Warszawa",
    }
  };

  return (
    <div className="document">
      <DocumentIssueDetails/>
      <DocumentTitle invoiceNumber={invoiceDetails.documentNumber}/>
      <DocumentParties seller={invoiceDetails.seller} buyer={invoiceDetails.buyer}/>
      <DocumentProducts/>
      <DocumentSignatures/>
    </div>
  )
}

export default Document;