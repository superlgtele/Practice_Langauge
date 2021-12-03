#include <stdio.h>

int main(void)
{
    int arr[3];
    int i, sum = 0;

    for (i = 0; i < 3; i++)
    {
        printf("%d number student score: ", i + 1);
        scanf("%d", &arr[i]);

        sum += arr[i];
    }
    printf("sum: %d and average: %.2f\n", sum, (float)sum / 3);
}