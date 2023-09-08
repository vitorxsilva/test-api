describe ('Buscar dispositivos', () =>{

    it ('Buscar um dispositivo específico', () =>{
        const device_id = '7'
    cy.buscarDeviceEspecifico(device_id).as('getDeviceResult')

cy.get('@getDeviceResult')
.then((response) =>{
 expect(response.status).eq(200)
 expect(response.body).not.empty
 expect(response.body.id).eq(device_id)
 expect(response.body.name).eq('Apple MacBook Pro 16')
 expect(response.body.data).not.empty
 expect(response.body.data.year).not.string
 expect(response.body.data.price).not.string
 expect(response.body.data['CPU model']).not.empty

 expect(response.body.data['CPU model']).eq('Intel Core i9')
})

    })

    it ('Buscar um dispositivo inexistente', () =>{
        const device_id = 'xpto'
        cy.buscarDeviceEspecifico(device_id).then((response) =>{
     expect(response.status).eq(404)
     expect(response.body.error).eq(`Oject with id=${device_id} was not found.`)

    })
    
        })
})