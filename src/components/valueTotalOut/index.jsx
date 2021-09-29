const ValueTotalOut = ({ outers }) => {
  const totalValue = outers.reduce((valor1, valor2) => {
    return valor1 + valor2.price;
  }, 0);

  return <div>{`Preço total da saída R$ ${totalValue}`}</div>;
};

export default ValueTotalOut;
