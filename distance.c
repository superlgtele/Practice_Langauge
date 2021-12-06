#include <stdio.h>
#include <math.h>

// sqrt(루트 씌워주기), pow(A, B) = A의 B제곱
// 이 두 함수는 <math.h> 에서 가져옴

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