const Display = ({ entries, outers, products, control, setControl }) => {
  return (
    <div>
      <div>
        <p>todas as movimentações</p>
        <ul>
          {products.map((item, index) => (
            <li key={index}>
              {" "}
              {item.name}, qnt:{item.quantity}, R${item.price}{" "}
            </li>
          ))}
        </ul>
      </div>
      <div>
        {control ? (
          <>
            <button onClick={() => setControl(!control)}>Mostrar saídas</button>
            {entries.map((item, index) => (
              <li key={index}>
                {item.name}, {item.quantity}
              </li>
            ))}
          </>
        ) : (
          <>
            <button onClick={() => setControl(!control)}>
              Mostrar entradas
            </button>

            {outers.map((item, index) => (
              <li key={index}>
                {item.name},{item.quantity}
              </li>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Display;
