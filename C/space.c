#include <stdio.h>
void space_delete(char *str);

void main()
{
    char str[100];

    printf("write please: ");
    gets(str);
    space_delete(str);
}

void space_delete(char *str)
{
    int i = 0;
    while (str[i] != 0)
    {
        if (str[i] != ' ')
            printf("%c", str[i]);
        i++;
    }
}