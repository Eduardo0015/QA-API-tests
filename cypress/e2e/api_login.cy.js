describe('API Login - DummyJSON', () => {

  it('Login válido', () => {
    cy.request({
      method: 'POST',
      url: 'https://dummyjson.com/auth/login',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        username: 'emilys',
        password: 'emilyspass'
      }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.accessToken).to.exist
      expect(res.body.username).to.eq('emilys')
    })
  })

  it('Login sem senha', () => {
    cy.request({
      method: 'POST',
      url: 'https://dummyjson.com/auth/login',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        username: 'emilys',
      }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.accessToken).to.exist
      expect(res.body.username).to.eq('emilys')
    })
  })

  it('Acesso com Body vazio', () => {
    cy.request({
      method: 'POST',
      url: 'https://dummyjson.com/auth/login',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
      }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.accessToken).to.exist
      expect(res.body.username).to.eq('emilys')
    })
  })
})