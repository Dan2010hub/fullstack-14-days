import time
from datetime import datetime
now = datetime.now()

class Product: 
    def __init__(self, name, price):
        self.name = name
        self.price = price


products_list = [
    Product("laptop", 1000),
    Product("sneakers", 3000),
    Product("mouse", 500),
    Product("Game-pad", 4000)
]



def timer(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        start_datetime = datetime.now()
        print(f"Started at: {start_datetime.strftime('%Y-%m-%d %H:%M:%S')}")
        
        result = func(*args, **kwargs)
        
        end_time = time.time()
        execution_time = end_time - start_time
        
        print(f"Finished. Time elapsed: {execution_time:.6f} seconds")
        
        return result
        
    return wrapper
@timer
def display_products ():
    highest_product = products_list[0]

    for product in products_list:

        if product.price > highest_product.price:
            print(f" New highest found! {product.name} {product.price} replaces {highest_product.name}")
            highest_product = product

        else:
            print(f"{product.name} (${product.price}) is not higher than our current record (${highest_product.price})")


display_products()
            
   

  