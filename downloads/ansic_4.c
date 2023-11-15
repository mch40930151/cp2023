#include <stdio.h>

int main() {
    int num1, rem1;

    printf("輸入一個整數：");

    // 使用 scanf 函數讀取整數，同時檢查返回值確保成功讀取
    if (scanf("%d", &num1) != 1) {
        fprintf(stderr, "錯誤：輸入無效。請輸入有效的整數。\n");
        return 1; // 表示錯誤
    }

    // 計算整數除以2的餘數
    rem1 = num1 % 2;

    // 根據餘數判斷奇偶性並輸出結果
    if (rem1 == 0)
        printf("%d 是偶數。\n", num1);
    else
        printf("%d 是奇數。\n", num1);

    return 0; // 表示成功執行
}
