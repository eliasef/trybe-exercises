### **GET** _`/chocolates`_ 

- Objetivo: Retornar uma lista com todos os chocolates cadastrados.
- Código HTTP: `200 - OK`;
- Body (exemplo):
```json
  [
    { "id": 1, "name": "Mint Intense", "brandId": 1 },
    { "id": 2, "name": "White Coconut", "brandId": 1 },
    { "id": 3, "name": "Mon Chéri", "brandId": 2 },
    { "id": 4, "name": "Mounds", "brandId": 3 }
  ]
```

### **GET** _`/chocolates/:id`_ 

- Objetivo: Buscar um chocolate específico pelo ID.
- Código HTTP: `200 - OK`;
- Body (exemplo):
```json
  [        
    {
      "id": 4,
      "name": "Mounds",
      "brandId": 3
    }
  ]
```

### **GET** _`/chocolates/brand/:brandId`_ 

- Objetivo: Buscar uma lista de chocolates pelo ID (brandId) da marca.
- Código HTTP: `200 - OK`;
- Body (exemplo):
```json
[
  {
      "id": 1,
      "name": "Mint Intense",
      "brandId": 1
  },
  {
      "id": 2,
      "name": "White Coconut",
      "brandId": 1
  }
]
```

### **POST** _`/chocolates`_ 

- Objetivo: Criar um novo chocolate.
- Código HTTP: `201 - CREATED`;
- Body de resposta (exemplo):
```json
  {
      "id": 8,
      "name": "Trybe choco",
      "brandId": 1
  }
```
- Body de requisição (do usuário):
```json
  {
      "name": "Trybe choco",
      "brandId": 1
  }
```

### **DELETE** _`/chocolates/:id`_ 

- Objetivo: Deletar um chocolate existente.
- Código HTTP: `204 - NO CONTENT`;

- Chocolate do ID enviado não existe
- Código HTTP: `404 - NOT FOUND`;
- Body de resposta (exemplo):
```json
  {
      "message": "o chocolate do id 1 não existe",
  }
```