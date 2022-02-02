import './style.sass'
import DocumentParty from "../DocumentParty";

function DocumentParties ({buyer, seller}) {
    return (
        <div className="document-parties">
            <DocumentParty seller={seller} />
            <DocumentParty buyer={buyer} />
        </div>
    )
}

export default DocumentParties;