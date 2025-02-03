# Implement the Car class appropriately
class Car:
    def __init__(self, color, max_speed, acceleration, tyre_friction):
        self.color=color
        self.max_speed=max_speed
        self.acceleration=acceleration
        self.tyre_friction=tyre_friction
        self.is_engine_started=False
        self.current_speed=0
        

    def start_engine(self):
        self.is_engine_started=True

    def stop_engine(self):
        self.is_engine_started=False

    def accelerate(self):
        if self.is_engine_started:
            if self.current_speed<self.max_speed:
                self.current_speed+=self.acceleration
        else:
            print("Car has not started yet")


# You need not change any code below.
# Do not call this function anywhere. It will automatically be called internally during tests.
def default_test():
    car = Car(color="Red", max_speed=50, acceleration=10, tyre_friction=3)
    car.accelerate()  # Calling the accelerate method when the is_engine_started is False
    # The above line will print "Car has not started yet"
    print(car.current_speed)
    car.start_engine()  # Starting the car engine
    print(car.current_speed)  # Car engine is started but not yet accelerated => 0
    car.accelerate()  # Calling the accelerate method when the is_engine_started is True
    print(car.current_speed)  # current_speed value has increased by acceleration value (0 + 10 => 10)
    car.accelerate()
    print(car.current_speed)  # current_speed value is 10 and increasing again by acceleration value (10 + 10 => 20)
    car.accelerate()
    car.accelerate()
    car.accelerate()
    print(car.current_speed)
    car.accelerate()  # Accelerating the car more than its max_speed
    print(car.current_speed)  # Any car cannot accelerate more than its max_speed => 50
