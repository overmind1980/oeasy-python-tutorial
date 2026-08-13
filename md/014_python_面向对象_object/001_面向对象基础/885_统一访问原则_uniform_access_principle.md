- 实际上只存一个生日变量
- 年龄变量是根据生日变量得到的

- https://martinfowler.com/bliki/UniformAccessPrinciple.html


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221226-1672050348857)

Python

Python properties may be used to allow a method to be invoked with the same syntax as accessing an attribute. Whereas Meyer's UAP would have a single notation for both attribute access and method invocation (method invocation syntax), a language with support for properties still supports separate notations for attribute and method access. Properties allow the attribute notation to be used, but to hide the fact that a method is being invoked instead of simply retrieving or setting a value.

As such, Python leaves the option of adherence to UAP up to the individual programmer. The built-in @property function provides a simple way to decorate any given method in attribute access syntax, thus abstracting away the syntactical difference between method invocations and attribute accesses.[3]

In Python, we may have code that access an Egg object that could be defined such that weight![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221226-1672050287191) and color are simple attributes as in the following

'''
>>> egg = Egg(4.0, "white")
>>> egg.color = "green"
>>> print(egg)
Egg(4.0, green)
'''

class Egg:
    def __init__(self, weight, color) -> None:
        self.weight = weight
        self.color = color
    def __str__(self) -> str:
        return f'{__class__.__name__}({self.weight}, {self.color})'

Or the Egg object could use properties, and invoke getter and setter methods instead

# ...(snip)...
class Egg:
    def __init__(self, weight_oz: float, color_name: float) -> None:
        self.weight = weight_oz
        self.color = color_name
        
    @property
    def color(self) -> str:
        '''Color of the Egg'''
        return to_color_str(self._color_rgb)

    @color.setter
    def color(self, color_name: str) -> None:
        self._color_rgb = to_rgb(color_name)   

    @property
    def weight(self) -> float:
        '''Weight in Ounces'''
        return self._weight_gram / 29.3

    @weight.setter
    def weight(self, weight_oz: float) -> None:
        self._weight_gram = 29.3 * weight_oz

    # ...(snip)...

Snipped codes are as following:

import webcolors

# class Egg:

def to_color_str(rgb: webcolors.IntegerRGB) -> str:
    try:
        return webcolors.rgb_to_name(rgb)
    except ValueError:
        return webcolors.rgb_to_hex(rgb)
    
def to_rgb(color_name: str) -> webcolors.IntegerRGB:
    try:
        return webcolors.name_to_rgb(color_name)
    except ValueError:
        return webcolors.hex_to_rgb(color_name)


if __name__ == "__main__":
    import doctest
    doctest.testmod()

Regardless of which way Egg is defined, the calling code can remain the same. The implementation of Egg can switch from one form to the other without affecting code that uses the Egg class. Languages which implement the UAP have this property as well. 