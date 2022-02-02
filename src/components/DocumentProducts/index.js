import './style.sass'

function DocumentProducts({products}) {

  const productList = products.map((product)=>{return (
    <tr key={product.order} className="document-products__table-row">
      <td className="document-products__table-field">{product.order}</td>
      <td className="document-products__table-field">{product.name}</td>
      <td className="document-products__table-field">{product.unit}</td>
      <td className="document-products__table-field">{product.quantity}</td>
      <td className="document-products__table-field">{product.unitPrice}</td>
      <td className="document-products__table-field">{product.netAmount}</td>
      <td className="document-products__table-field">{product.vatRate}</td>
      <td className="document-products__table-field">{product.vatAmount}</td>
      <td className="document-products__table-field">{product.grossAmount}</td>
    </tr>
  );
  });

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
          {productList}
        </tbody>
      </table>
    </div>
  );
}

export default DocumentProducts;