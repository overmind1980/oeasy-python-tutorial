('The complex number {0} is formed from the real part {0.real} '

 'and the imaginary part {0.imag}.').format(c)
'The complex number (3-5j) is formed from the real part 3.0 and the imaginary part -5.0.'

class Point:

    def __init__(self, x, y):

        self.x, self.y = x, y

    def __str__(self):

        return 'Point({self.x}, {self.y})'.format(self=self)


str(Point(4, 2))
'Point(4, 2)'
