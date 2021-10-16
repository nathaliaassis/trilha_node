import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase"

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);

  })
  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      "name": "Carro 1 ",
      "description": "Car description",
      "daily_rate": 100.00,
      "license_plate": "ABC-1234",
      "fine_amount": 600,
      "brand": "Audi",
      "category_id": "c4f64132-9a1c-4a55-87fd-aeb5883f791b"
    });
    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });
  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      "name": "Carro 3 ",
      "description": "Car description",
      "daily_rate": 100.00,
      "license_plate": "ABC-1234",
      "fine_amount": 600,
      "brand": "car_brand_test",
      "category_id": "c4f64132-9a1c-4a55-87fd-aeb5883f791b"
    });
    const cars = await listAvailableCarsUseCase.execute({
      brand: "car_brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category_id", async () => {
    const car = await carsRepositoryInMemory.create({
      "name": "Carro 3 ",
      "description": "Car description",
      "daily_rate": 100.00,
      "license_plate": "ABC-1234",
      "fine_amount": 600,
      "brand": "car_brand_test",
      "category_id": "123"
    });
    const cars = await listAvailableCarsUseCase.execute({
      category_id: "123",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by  name", async () => {
    const car = await carsRepositoryInMemory.create({
      "name": "car_name_test",
      "description": "Car description",
      "daily_rate": 100.00,
      "license_plate": "ABC-1234",
      "fine_amount": 600,
      "brand": "car_brand_test",
      "category_id": "123"
    });
    const cars = await listAvailableCarsUseCase.execute({
      name: "car_name_test",
    });

    expect(cars).toEqual([car]);
  });

})