describe ('Deletar dispositivos', () =>{

    const body = {
        "name": "Apple MacBook Pro 16",
        "data": {
           "year": 2019,
           "price": 1849.99,
           "CPU model": "Intel Core i9",
           "Hard disk size": "1 TB"
        }
     }

    it ('Deletar um dispositivo', () =>{

        cy.request({
            method: 'POST',
            url: '/objects',
            failOnStatusCode: false,
            body: body
           }).as('postDeviceResult')
        
           cy.get('@postDeviceResult').then((response) =>{
        expect(response.status).eq(200)
  
           

        cy.request({
            method: 'DELETE',
            url: `https://api.restful-api.dev/objects/${response.body.id}`,
            failOnStatusCode: false
       
      }).as('deleteDeviceResult')

      cy.get('@deleteDeviceResult').then ((response_del)=>{
        expect(response_del.status).eq(200)
      })
  
               
            })
    })

    it ('Deletar um dispositivo não existente', () =>{

        const id_inexistente = 'Vitor'

            cy.request ({
                method: 'DELETE',
                url: `/objects/${id_inexistente}`,
                failOnStatusCode: false
            }).as('deleteDeviceResult') 

            //validações do delete
            cy.get('@deleteDeviceResult').then((response_del) =>{
                expect(response_del.status).eq(404)
                expect(response_del.body.error).
                eq(`Object with id = ${id_inexistente} doesn't exist.`)

            })
               })
               
               

    })

