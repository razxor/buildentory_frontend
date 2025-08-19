import { faker } from "@faker-js/faker";
import { PrismaClient, PropertyType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const cities = ["Dhaka", "Chattogram", "Khulna", "Sylhet"];
  const types: PropertyType[] = [
    PropertyType.HOUSE,
    PropertyType.APARTMENT,
    PropertyType.CONDO,
    PropertyType.TOWNHOUSE,
  ];

  for (let i = 0; i < 10; i++) {
    await prisma.property.create({
      data: {
        title: faker.location.streetAddress(),
        description: faker.lorem.sentences(3),
        price: faker.number.int({ min: 20000, max: 500000 }),
        address: faker.location.streetAddress(),
        city: faker.helpers.arrayElement(cities),
        state: "",
        country: "Bangladesh",
        postalCode: faker.location.zipCode(),
        lat: Number(faker.location.latitude({ min: 20.5, max: 26.6 })),
        lng: Number(faker.location.longitude({ min: 88.0, max: 92.7 })),
        beds: faker.number.int({ min: 1, max: 6 }),
        baths: faker.number.int({ min: 1, max: 4 }),
        sqft: faker.number.int({ min: 300, max: 3500 }),
        propertyType: faker.helpers.arrayElement(types),
        images: {
          create: [
            { url: faker.image.urlLoremFlickr({ category: "house" }) },
            { url: faker.image.urlLoremFlickr({ category: "apartment" }) },
          ],
        },
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
