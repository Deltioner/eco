import ProductItem from "./ProductItem";

function Productslist({ productslist }) {
  return (
    <div>
      {productslist.map(item=>(
        <div key={item.id}><ProductItem product={item}/></div>
      ))}
    </div>

    )}
  
export default Productslist;
