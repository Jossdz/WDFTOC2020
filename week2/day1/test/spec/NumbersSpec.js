describe('Test para numbers', () => {
  it('existe una variable llamada numbers', () => {
    expect(numbers).toBeDefined()
  })
  it('existe una funcion de suma', () => {
    expect(typeof sum).toBe('function')
  })
  it('la suma funciona corrrectamente', () => {
    expect(sum(1,2)).toBe(3)
  })
  it('existe una funcion de resta', () => {
    expect(typeof sub).toBe('function')
  })

  it('la resta funciona correctamente',  () => {
    expect(sub(2,1)).toBe(1)
  })
})