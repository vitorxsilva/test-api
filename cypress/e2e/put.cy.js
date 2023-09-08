describe ('Alterar dispositivos', () =>{

    it ('Alterar um dispositivo', () =>{

        const body_cadastro = {
            "name": "Celular Vitor",
            "createdAt": "2023-08-31T14:49:14.401+00:00",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        }

        const body_update =
        {
            "name": "Celular Vitor vitaoo",
            "createdAt": "2023-08-31T14:49:14.401+00:00",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        }
        
        const dataAtual = new Date().toISOString().slice(0,10)
        
           cy.request({
            method: 'POST',
            url: '/objects',
            failOnStatusCode: false,
            body: body_cadastro
           }).as('postDeviceResult')

           //pegando o result do cadastro
           //para pegar o id
           cy.get('@postDeviceResult').then((response_post) =>{
            expect(response_post.status).eq(200)
            expect(response_post.body.name).eq(body_cadastro.name)

            // FAZER O PUT
            cy.request ({
                method: 'PUT',
                url: `/objects/${response_post.body.id}`,
                failOnStatusCode: false,
                body: body_update
            }).as('putDeviceResult')

            //validações do put
            cy.get('@putDeviceResult').then((response_put) =>{
                expect(response_put.status).eq(200)
                expect(response_put.body.name).eq(body_update.name)

            })
               })

    })
})