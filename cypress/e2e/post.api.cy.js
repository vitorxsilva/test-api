describe ('Cadastrar dispositivos', () =>{

   const payload_cadastro_device = require('../fixtures/cadastrar_device_sucesso.json')
it ('Cadastro de dispositivos', () =>{

const dataAtual = new Date().toISOString().slice(0,10)

   cy.cadastrarDevice(payload_cadastro_device).then((response) =>{
expect(response.status).eq(200)
expect(response.body.id).not.empty
expect(response.body.createdAt).not.empty
expect(response.body.createdAt.slice(0,10)).eq(dataAtual)
expect(response.body.name).eq('Celular Vitor')
   })
    })

    it ('Cadastro um dispositivo sem mandar dados', () =>{

 
        const dataAtual = new Date().toISOString().slice(0,10)
        
        cy.cadastrarDevice('').as('postDeviceResult')
        
        
        
           cy.get('@postDeviceResult').then((response) =>{
        expect(response.status).eq(400)
        expect(response.body.error).eq('400 Bad Request. If you are trying to create or update the data, potential issue is that you are sending incorrect body json or it is missing at all.')

           })
            })
})