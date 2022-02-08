#include <stdio.h>

int main(void)
{
    int arr[5] = {5, 10, 15, 20, 25};
    int i, get;
    int *p = arr;
    // &arr은 arr의 주솟값, p= &arr

    for (i = 0; i < 2; i++)
    {
        get = p[4 - i];
        p[4 - i] = p[i];
        p[i] = get;
    }

    for (i = 0; i < 5; i++)
    {
        printf("%d\n", p[i]);
    }
}