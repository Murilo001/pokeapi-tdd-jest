const minhaFunc = (o) => (o);

describe("Meu primeiro teste", () => {
  it("Teste a primeira funcionalidade", () => {
    const meuResultado = minhaFunc('oi');
    expect(meuResultado).toBe('oi');
  })
})