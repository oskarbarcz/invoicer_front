const data = {
  documentNumber: "17/2022",
  seller: {
    name: "Imię nazwisko",
    taxIdNumber: "0000000000",
    addressFirstLine: "Al. Jerozolimskie 1/1",
    addressSecondLine: "00-001 Warszawa",
  },
  buyer: {
    name: "Acme Spółka z ograniczoną odpowiedzialnością",
    taxIdNumber: "1111111111",
    addressFirstLine: "Al. Jerozolimskie 1/1",
    addressSecondLine: "00-001 Warszawa",
  },
  products: [
    {
      order: "1",
      name: "Usługa programowania",
      unit: "szt.",
      quantity: 1,
      unitPrice: "24 000,00",
      netAmount: "24 000,00",
      vatRate: "23%",
      vatAmount: "5 220,00",
      grossAmount: "29 520,00"
    },
    {
      order: "2",
      name: "Usługi doradcze",
      unit: "szt.",
      quantity: 2,
      unitPrice: "500,00",
      netAmount: "1 000,00",
      vatRate: "23%",
      vatAmount: "230,00",
      grossAmount: "1 230,00"
    }
  ]
};

export default data;