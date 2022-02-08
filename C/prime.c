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
        // i % j = 0 하지 않도록 주의하기
        if (sum == 1)
        {
            printf("%d ", i);
        }
        // j = 2 로 계속 초기화되고 i는 i++ 되어서 i % j == 0 상황을 찾음
        // 4와 같은 수가 나오면 4의 약수인 2,4에 의해 sum + 1 이 두번 실행되어 sum == 2가 되어버림
    }
    printf("\n");
}