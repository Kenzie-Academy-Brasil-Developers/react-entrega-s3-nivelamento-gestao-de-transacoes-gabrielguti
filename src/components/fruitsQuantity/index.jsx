const FruitsQuantity = ({ outers, entries }) => {
  const quantityOut = outers.reduce((valor1, valor2) => {
    return valor1 + valor2.quantity;
  }, 0);

  const quantityEntrie = entries.reduce((valor1, valor2) => {
    return valor1 + valor2.quantity;
  }, 0);
  console.log(outers);
  return (
    <div>
      <div>{`Quantidade de saídas: ${quantityOut}`}</div>
      <div>{`Quantidade de entradas: ${quantityEntrie}`}</div>
    </div>
  );
};

export default FruitsQuantity;
