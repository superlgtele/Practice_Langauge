#include <stdio.h>

int main(void)
{
    int num, i = 0;
    int sum = 0;
    int Even = 0;
    int Odd = 0;
    // Even=짝수합, Odd=홀수합
    int fact = 1;

    printf("put number: ");
    scanf("%d", &num);

    for (i = 1; i <= num; i++)
    {
        sum += i;
    }

    printf("sum 1~%d: %d\n", num, sum);

    for (i = 2; i <= num; i += 2)
    {
        Even += i;
    }

    for (i = 1; i <= num; i += 2)
    {
        Odd += i;
    }

    printf("Evensum 1~%d: %d\n", num, Even);
    printf("Oddsum 1~%d: %d\n", num, Odd);

    i = 0;
    while (i < num)
    {
        i++;
        fact *= i;
    }
    printf("%d!: %d", num, fact);
}