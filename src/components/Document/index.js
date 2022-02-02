import './style.sass'
import DocumentIssueDetails from "../DocumentIssueDetails";
import DocumentTitle from "../DocumentTitle";
import DocumentParties from "../DocumentParties";
import DocumentProducts from "../DocumentProducts";
import DocumentSignatures from "../DocumentSignatures";

function Document () {

    return (
        <div className="document">
            <DocumentIssueDetails/>
            <DocumentTitle invoiceNumber={'17/2022'}/>
            <DocumentParties/>
            <DocumentProducts/>
            <DocumentSignatures/>
        </div>
    )
}

export default Document;