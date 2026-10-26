# Day08 -  (Product Class)

built with Python OOP.

### What the code does
I created a `Product` class to handle items in my shop like Rice and Beans.

### Files
- `product.py` - Main file with Product class

### Code Breakdown

**1. `class Product:`**
This is like a template or mould for creating any product in the code.

**2. `def __init__(self, name, price):`**
- This is the constructor - it runs when we create a new product.
- `__init__` has TWO underscores front and back.
- `self.name = name` means "save this name inside this product".
- `self` means "this particular product".

**3. `def calculate_gain(self):`**
- Calculates selling price with 20% profit.
- `gain = self.price * 1.2` (1.2 = 100% + 20% gain)
- `return gain` sends the value back.

**4. `def display(self):`**
- Shows product details neatly.
- Uses `f-string` like `f"Name: {self.name}"`
- The `f` means "fill the value inside { }"

**5. Testing outside the class**
```python
rice = Product("Rice", 5000)
beans = Product("Beans", 3000)

rice.display()
beans.display()

# Errors We Faced Today & How We Fixed Them

### 1. `__init__` spelled with one underscore
**Error:** `TypeError: Product() takes no arguments`  
**Cause:** I wrote `_init_` or `_init__` instead of `__init__`  
**Fix:** Use TWO underscores front and back: `__init__`

### 2. `NameError: name 'Product' is not defined`
**Cause:** `rice = Product("Rice", 5000)` was still indented inside the class. Python thought I was trying to create Rice while Product was still being built.  
**Fix:** Press `Shift + Tab` to move `rice = ...` and `beans = ...` to the very left, outside the class.

### 3. Typo `benas` instead of `beans`
**Error:** `NameError: name 'benas' is not defined` or wrong output  
**Fix:** Check spelling - `beans = Product("Beans", 3000)`

### 4. `print(f` not working / display incomplete
**Cause:** I forgot `f` means "fill value". Without `f`, `{self.name}` prints as text. Also forgot to add Selling Price line in `display()`  
**Fix:** Add `print(f"Selling Price: ${self.calculate_gain()}")`

### 5. Code shows only Beans, no Rice
**Cause 1:** `rice.display()` had `#` in front (commented out)  
**Cause 2:** Did not press `Ctrl + S` to save before running `python3 product.py`  
**Fix:** Remove `#` and always Save before Run