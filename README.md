## KATAS DE EXPRESS

​
-1. Inicializa un proyecto de node.js 0. crea un boilerplate de express donde definir las siguientes rutas:

1. GET /currentDate -> return la fecha actual en cualquier formato
1. GET /greet -> return "Hello World"
1. GET /greet/María -> return "Hello María"
1. GET /checkEvenNumber/3 -> return code 400 Si no es par y 200 si es par
1. En la ruta anterior devuelve 400 (bad request) si el input no es número
1. GET /add/2/7 -> return la suma de 2+7 (9)
1. POST /number/1 -> Guarda un numero en un array declarado en el scope global con cada request y return todos los números guardados.
   - POST /number/1 -> [1]
   - POST /number/2 -> [1,2]
   - POST /number/5 -> [1,2,5]
1. DELETE /number/1 -> ahora elimina un número de un array y devuelve todos
   - DELETE /number/1 -> [2,5]
   - DELETE /number/2 → [5]
1. PUT /number/5/10 => cambia el número en el array => [5]
1. POST /countFields => Cuenta el numero de campos de un objeto JSON enviado por req.body
   - POST /countFields BODY {“a”:1,”b”:2,”c”:3} -> 3
   - POST /countFields BODY {“a”:1,”b”:2,”c”:3,”d”:5} -> 4
1. POST /createUser => Acepta un objeto JSON en el cuerpo del request, por ejemplo: {"name": "John", "email": "[john@example.com](mailto:john@example.com)"}). Almacena el usuario en una lista de usuarios y devuelve el usuario recién. Añade desde el servidor un id cada usuario en el momento de crearlos.
1. GET /users => return una lista html (ul) con los emails de los usuarios
1. GET /user/:userId => return un html con un h1 con el nombre y un parrafo con el email.
1. PUT /user/:userId => acepta un json con cambios en nombre y email y return objeto del usuario actualizado.
1. DELETE /user/:userId => Elimina al usuario de la lista por su id
