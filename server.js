const express = require("express");
const { faker } = require("@faker-js/faker");

const port = 3001;

let users = [];
let company = [];

function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phoneNumber: faker.phone.number(),
  };
}

function createRandomEmpresa() {
  return {
    empresaId: faker.string.uuid(),
    empresaNombre: faker.company.name(),
    direccion: {
      calle: faker.location.street(),
      ciudad: faker.location.city(),
      estado: faker.location.state(),
      codigoPostal: faker.location.zipCode(),
      pais: faker.location.country(),
    },
  };
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/users/new", (req, res) => {
  users = createRandomUser();
  
  res.status(200).json({ users});
});

app.get("/api/company/new", (req, res) => {
  company = createRandomEmpresa();
  
  res.status(200).json({ company});
});

app.get("/api/user/company", (req, res) => {
  users = createRandomUser();
  company = createRandomEmpresa();
  
  res.status(200).json({ company, users});
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
