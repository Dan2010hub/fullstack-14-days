class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def calculate_gain(self):
        gain = self.price * 1.2
        return gain

    def display(self):
        print(f"--- Item Details ---")
        print(f"Product Name:  {self.name}")
        print(f"Cost Price:    ${self.price}")
        print(f"Selling Price: ${self.calculate_gain()}")

rice = Product("Rice", 5000)
beans = Product("Beans", 3000)


rice.display()
print()
beans.display()

