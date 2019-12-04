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
R: En el front se utilizó Nuxt.js con Vue.js, Bulma.io como framework para el Front End Y para el Back End con Node.js estándar. 

En caso de que no este disponible el servicio de conekta ¿Qué harías para no perder la solicitud realizada por el usuario y aún así generar el cobro?
R: Guardar los request en una tabla y correr un CRON job para validar cuales están pendientes, enviarlos y cambiar estatus a enviado.

Implementación de la base de datos:

CREATE TABLE customer_conekta(
   id INTEGER PRIMARY KEY,
   firstname VARCHAR (50) NULL,
   lastname VARCHAR (50) NULL,
   email VARCHAR (250) NULL,
   phone VARCHAR (250) NULL,
   created_on TIMESTAMP NOT NULL
);

CREATE TABLE payment_card(
    id INTEGER PRIMARY KEY,
    payment_token VARCHAR (200) NOT NULL,
    payment_type VARCHAR (15) NOT NULL,
    payment_card_brand VARCHAR (25) NOT NULL,
    payment_card_last4 VARCHAR (10) NOT NULL,
    payment_card_exp_month VARCHAR (10) NOT NULL,
    payment_card_exp_year VARCHAR (10) NOT NULL,
    payment_card_user_name VARCHAR (40) NOT NULL,
    customer_conekta_id INTEGER,
    default_payment BOOLEAN,
    FOREIGN KEY (customer_conekta_id) REFERENCES customer_conekta (id),
    created_on TIMESTAMP NOT NULL
);

CREATE TABLE logs_conekta(
   id INTEGER PRIMARY KEY,
   event_id VARCHAR (255) NULL,
   type VARCHAR (255) NULL,
   ignored BOOLEAN,
   content VARCHAR (255) NULL,
   raw TEXT NULL,
   alarm BOOLEAN,
   created_on TIMESTAMP NOT NULL
);

CREATE TABLE conekta_webhook_event(
    id INTEGER PRIMARY KEY,
    event_type VARCHAR (255) NULL,
    date_received VARCHAR (50) NULL,
    date_created VARCHAR (250) NULL,
    processed BOOLEAN,
    event_id VARCHAR (255) NULL,
    payload TEXT NULL,
    customer_conekta_id INTEGER NOT NULL,
    FOREIGN KEY (customer_conekta_id) REFERENCES customer_conekta (id),
    created_on TIMESTAMP NOT NULL
);

CREATE TABLE payment_direction(
    id INTEGER PRIMARY KEY,
    shipping_email VARCHAR (200) NOT NULL,
    shipping_phone VARCHAR (200) NOT NULL,
    shipping_receiver_name VARCHAR (100) NULL,
    shipping_address_street VARCHAR (200) NOT NULL,
    shipping_address_internal_number VARCHAR (20) NULL,
    shipping_address_external_number VARCHAR (20) NOT NULL,
    shipping_address_country VARCHAR (100) NULL,
    shipping_address_state VARCHAR (180) NULL,
    shipping_address_city VARCHAR (180) NULL,
    shipping_address_asent VARCHAR (200) NULL,
    shipping_address_postalcode VARCHAR (10) NULL,
    customer_conekta_id INTEGER NOT NULL,
    FOREIGN KEY (customer_conekta_id) REFERENCES customer_conekta (id),
    created_on TIMESTAMP NOT NULL
);
