#include <stdio.h>

int main(void)
{
    int num, a;

    printf("피라미드 층수를 입력: ");
    scanf("%d", &num);

    for (a = 0; a < num; a++)
    {
        int star = 2 * (a + 1) - 1;
        int blank = (num - 1) - a;

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