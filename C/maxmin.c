#include <stdio.h>

int main(void)
{
    int a, b, c;
    int min, max;

    printf("put three number: ");
    scanf("%d %d %d", &a, &b, &c);

    if (a >= b)
    {
        max = a;
        min = b;
    }

    else
    {
        max = b;
        min = a;
    }

    if (c > max)
    {
        max = c;
    }

    if (c < min)
    {
        min = c;
    }

    printf("max number:%d\n", max);
    printf("min number:%d\n", min);
}