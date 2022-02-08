#include <stdio.h>
#include <string.h>
#include <ctype.h>

// gets 함수부분에 오류있음. 수정필요!!

int main(void)
{
    char str[216] = {0};
    int t = 0;

    printf("문장 입력: \n");
    gets(str);

    for (t = 0; t < (int)strlen(str); t++)
    {
        if (str[t] == tolower(str[t]))
        {
            str[t] = toupper(str[t]);
        }
        else if (str[t] == toupper(str[t]))
        {
            str[t] = tolower(str[t]);
        }
    }
    printf("대소문자 변환\n");
    printf("%s\n", str);

    return 0;
}