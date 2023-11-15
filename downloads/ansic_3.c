#include <stdio.h>

int main() {
    int chk_year;

    printf("輸入一個年份：");
    if (scanf("%d", &chk_year) != 1) {
        fprintf(stderr, "錯誤：輸入無效。請輸入有效的年份。\n");
        return 1; // 表示錯誤
    }

    if ((chk_year % 400) == 0)
        printf("%d年是閏年。\n", chk_year);
    else if ((chk_year % 100) == 0)
        printf("%d年不是閏年。\n", chk_year);
    else if ((chk_year % 4) == 0)
        printf("%d年是閏年。\n", chk_year);
    else
        printf("%d年不是閏年。\n", chk_year);

    return 0; // 表示成功執行
}
