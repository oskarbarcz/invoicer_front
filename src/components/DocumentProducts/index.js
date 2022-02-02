import './style.sass'

function DocumentProducts() {
  return (
    <div className="document-products">
      <table className="document-products__table">
        <thead>
          <tr  className="document-products__table-header">
            <td className="document-products__table-header-field">L.p.</td>
            <td className="document-products__table-header-field document-products__table-header-field--name">Nazwa towaru lub usługi</td>
            <td className="document-products__table-header-field">J.m.</td>
            <td className="document-products__table-header-field">Ilość</td>
            <td className="document-products__table-header-field">Cena netto</td>
            <td className="document-products__table-header-field">Wartość netto</td>
            <td className="document-products__table-header-field">Stawka VAT</td>
            <td className="document-products__table-header-field">Kwota VAT</td>
            <td className="document-products__table-header-field">Wartość brutto</td>
          </tr>
        </thead>
        <tbody>
          <tr className="document-products__table-row">
            <td className="document-products__table-field">1</td>
            <td className="document-products__table-field">Usługa programowania</td>
            <td className="document-products__table-field">szt.</td>
            <td className="document-products__table-field">1</td>
            <td className="document-products__table-field">24 000,00</td>
            <td className="document-products__table-field">24 000,00</td>
            <td className="document-products__table-field">23%</td>
            <td className="document-products__table-field">5 220,00</td>
            <td className="document-products__table-field">29 520,00</td>
          </tr>
          <tr className="document-products__table-row">
            <td className="document-products__table-field">2</td>
            <td className="document-products__table-field">Usługi doradcze</td>
            <td className="document-products__table-field">szt.</td>
            <td className="document-products__table-field">2</td>
            <td className="document-products__table-field">1 000,00</td>
            <td className="document-products__table-field">2 000,00</td>
            <td className="document-products__table-field">23%</td>
            <td className="document-products__table-field">460,00</td>
            <td className="document-products__table-field">2 460,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DocumentProducts;