# conekta_payment

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

¿Qué tecnologías utilizarías? y ¿Cómo lo implementarias? 
R: Personalmente he utilizado SendGrid para el envío de email, es sencillo y rápido.

¿Cuales tecnologías utilizaste para implementar el frontend y el backend de la aplicación? 
R: En el front se utilizó Nuxt.js con Vue.js, Bulma.io. Y para el Back End con Node.js estándar. 

En caso de que no este disponible el servicio de conekta ¿Qué harías para no perder la solicitud realizada por el usuario y aún así generar el cobro?
R: Guardar los request en una tabla y correr un CRON job para validar cuales están pendientes.

Implementación de la base de datos: (Pendiente)

