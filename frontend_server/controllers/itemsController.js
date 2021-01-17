const api = require('../config/apiConfig');

exports.getSearch = async (req, res) => {
    try {   
        let apiResponse = await api.getSearchByQuery(req.query.q);
        let items = [];
        let categories = [];
        apiResponse.data.filters[0] 
        ? apiResponse.data.filters[0].values[0].path_from_root.map(category => {
            categories.push(category.name);
        })
        : null;
        apiResponse.data.results.map(res => {
            items.push(
                {
                    id: res.id,
                    title: res.title,
                    price: {
                        currency: res.currency_id ,
                        amount: res.price,
                        decimals: 0
                    },
                    picture: res.thumbnail,
                    condition: res.condition,
                    free_shipping: res.shipping.free_shipping,
                    location: res.address.state_name
                }
            );
        });
        const response = {
            author: {
                name:'Nicolás',
                lastname:'Suárez'
            },
            categories: categories,
            items: items.slice(0,4)
        }
    
        return res.status(200).json(response);
    } catch(error){
        return res.status(404).json({'msg':`No se pudo obtener datos de la consulta ${error}`});
    }
}

exports.getItemById = async (req,res) => {
    try {
        const apiResponse = await api.getItemById(req.params.id);
        const apiDescriptionResponse = await api.getItemDescription(req.params.id);
    
        let response = {
            author: {
                name: 'Nicolás',
                lastname: 'Suárez'
            },
            item: {
                id: apiResponse.data.id,
                title: apiResponse.data.title,
                price: {
                    currency: apiResponse.data.currency_id? apiResponse.data.currency_id:'',
                    amount: apiResponse.data.price,
                    decimals: 0 
                },
                picture: apiResponse.data.pictures[0].url,
                condition: apiResponse.data.condition,
                free_shipping: apiResponse.data.shipping.free_shipping,
                sold_quantity: apiResponse.data.sold_quantity,
                description: apiDescriptionResponse.data.plain_text
            }
        };
    
        return res.status(200).json(response);
        
    } catch (error) {
        return res.status(404).json({'msg':`No se pudo obtener datos de la consulta ${error}`});
    }
}