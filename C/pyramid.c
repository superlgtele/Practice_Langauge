#include <stdio.h>

int main(void)
{
    int num, a;

    printf("put number: ");
    scanf("%d", &num);

    for (a = 0; a < num; a++)
    {
        int star = 2 * (a + 1) - 1;
        int blank = (num - 1) - a;
        // if num = 5층일 때 star = 1, 3, 5, 7, 9
        // blank(공백) = 4, 3, 2, 1, 0

        for (int p = 0; p < blank; p++)
        {
            printf(" ");
        }

        for (int q = 0; q < star; q++)
        {
            printf("*");
        }
        printf("\n");
    }
}