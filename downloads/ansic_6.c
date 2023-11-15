#include <stdio.h>

int main() {
    int j, i, n;

    printf("輸入要生成的乘法表的數字範圍（從1開始）：");

    // 使用scanf函數讀取用戶輸入，同時檢查返回值確保成功讀取
    if (scanf("%d", &n) != 1) {
        fprintf(stderr, "錯誤：輸入無效。請輸入一個有效的數字。\n");
        return 1; // 表示錯誤
    }

    printf("從1到%d的乘法表\n", n);

    for (i = 1; i <= 10; i++) {
        for (j = 1; j <= n; j++) {
            printf("%dx%d = %d, ", j, i, i*j);
        }
        printf("\n");
    }

    return 0; // 表示成功執行
}
