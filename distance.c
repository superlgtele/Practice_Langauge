#include <stdio.h>
#include <math.h>

int main(void)
{
    int x1, y1, x2, y2;
    double distance;

    printf("first coordinate: ");
    scanf("%d %d", &x1, &y1);

    printf("second coordinate: ");
    scanf("%d %d", &x2, &y2);

    distance = sqrt(pow((x2 - x1), 2) + pow((y2 - y1), 2));
    printf("distance is %.2f\n", distance);
}