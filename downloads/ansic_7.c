#include <stdio.h>

// 函數：計算一個數字的平方
double square(double num) {
    return (num * num);
}

int main() {
    int num;
    double n;

    printf("\n\n 函數：找出任意數字的平方：\n");
    printf("------------------------------------------------\n");

    printf("輸入任意數字以求平方：");

    // 使用scanf函數讀取用戶輸入，同時檢查返回值確保成功讀取
    if (scanf("%d", &num) != 1) {
        fprintf(stderr, "錯誤：輸入無效。請輸入一個有效的數字。\n");
        return 1; // 表示錯誤
    }

    n = square(num);

    printf("%d的平方是：%.2f\n", num, n); 

    return 0; // 表示成功執行
}
