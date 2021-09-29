import "./App.css";
import { useState } from "react";
import Input from "./components/input";
import Display from "./components/display";
import FruitsQuantity from "./components/fruitsQuantity";
import ValueTotalOut from "./components/valueTotalOut";
function App() {
  const [products, setProducts] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);
  const [control, setControl] = useState(true);

  const entries = products.filter((item) => {
    return item.quantity > 0;
  });

  const outers = products.filter((item) => {
    return item.quantity < 0;
  });

  return (
    <div className="App">
      <div className="App-header">
        <FruitsQuantity outers={outers} entries={entries} />
        <ValueTotalOut outers={outers} />
        <Input products={products} setProducts={setProducts} />
        <Display
          entries={entries}
          outers={outers}
          products={products}
          control={control}
          setControl={setControl}
        />
      </div>
    </div>
  );
}

export default App;
