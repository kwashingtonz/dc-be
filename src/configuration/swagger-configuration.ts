import swaggerJsDoc from 'swagger-jsdoc';

const options = {
    swaggerDefinition: {
        openapi: '3.0.1',
        info: {
            title: 'DC-BE API Documentation',
            version: '1.0.0',
        },
        servers: [
            {
                url: "http://localhost:4000"
            }
            // ,
            // {
            //     url: "https://wstat.com"
            // }
        ],
    components: {
        securitySchemes: {
          // bearerAuth: {
          //   type: 'http',
          //   scheme: 'bearer',
          //   bearerFormat: 'JWT',
          // }
          apiKeyAuth: {
            type: 'apiKey',
            in: 'header',
            name: 'x-api-key',
            description: 'Default API Key HC0#5ylVKHSdjn#GhRK@a'
          }
        }
      },
    },
    apis: ['./src/routes/*.ts'],
};

const openapiSpecification = swaggerJsDoc(options);

export default openapiSpecification;