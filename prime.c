#include <stdio.h>
int main(void)
{
    int i, j;

    for (i = 2; i <= 100; i++)
    {
        int sum = 0;
        for (j = 2; j <= i; j++)
        {
            if (i % j == 0)
            {
                sum += 1;
            }
        }
        if (sum == 1)
        {
            printf("%d ", i);
        }
    }
    printf("\n");
}