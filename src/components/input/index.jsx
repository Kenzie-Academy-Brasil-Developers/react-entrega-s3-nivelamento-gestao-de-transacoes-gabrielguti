import { useState } from "react";

const Input = ({ products, setProducts }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const fruitData = (name, quantity, price) => {
    const newFruit = {
      name: name,
      quantity: Number(quantity),
      price: Number(price),
    };
    setProducts([...products, newFruit]);
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantidade"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Preço"
      />
      <button onClick={() => fruitData(name, quantity, price)}>
        Cadastrar fruta
      </button>
    </div>
  );
};

export default Input;
