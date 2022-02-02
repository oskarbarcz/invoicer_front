import './style.sass'
import DocumentIssueDetails from "../DocumentIssueDetails";
import DocumentTitle from "../DocumentTitle";
import DocumentParties from "../DocumentParties";
import DocumentProducts from "../DocumentProducts";
import DocumentSignatures from "../DocumentSignatures";

function Document () {

    const invoiceDetails = {
      documentNumber: '17/2022'
    };

    return (
        <div className="document">
            <DocumentIssueDetails/>
            <DocumentTitle invoiceNumber={invoiceDetails.documentNumber}/>
            <DocumentParties/>
            <DocumentProducts/>
            <DocumentSignatures/>
        </div>
    )
}

export default Document;