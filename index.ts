// Интерфейс
interface IEngine {
    model: string;
    capacity: number;
    // Тип метода
    startEngine: (time: Date) => string;
}

// Абстрактный класс
abstract class AbstractVehicle {
    model: string | undefined;
    capacity: number | undefined;
   abstract startEngine: (time: Date) => string;
   // Готовый метод
   stopEngine(time: Date): string {
    this.startEngine(new Date())
    return "Engine stopped"
   }
}

// У абстрактных классов нельзя создавать экземпляры 
new AbstractVehicle()

// Наследуем методы/свойства класса AbstractVehicle
class Vehicle extends AbstractVehicle {
    // не передаём свойств с абстрактного класса тк они уже содержатся в нем и наследуются
    startEngine: (time: Date) => {
        // Возвращаем строку
        return "Started";
    };
}

new Vehicle().
