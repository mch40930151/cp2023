#include<stdio.h>

// 函數：交換兩個數字
void swap(int *p, int *q) {
    int tmp;
    tmp = *p;   // tmp儲存n1的值
    *p = *q;    // *p儲存*q的值，即n2的值
    *q = tmp;   // *q儲存tmp的值，即n1的值
}

int main() {
    int n1, n2;

    printf("\n\n 函數：使用函數交換兩個數字：\n");
    printf("------------------------------------------------\n");

    printf("輸入第一個數字：");
    // 使用scanf函數讀取用戶輸入，同時檢查返回值確保成功讀取
    if (scanf("%d", &n1) != 1) {
        fprintf(stderr, "錯誤：輸入無效。請輸入一個有效的數字。\n");
        return 1; // 表示錯誤
    }

    printf("輸入第二個數字：");
    // 使用scanf函數讀取用戶輸入，同時檢查返回值確保成功讀取
    if (scanf("%d", &n2) != 1) {
        fprintf(stderr, "錯誤：輸入無效。請輸入一個有效的數字。\n");
        return 1; // 表示錯誤
    }

    printf("在交換之前：n1 = %d, n2 = %d ", n1, n2);
    // 將兩個變數的地址傳遞給函數。
    swap(&n1, &n2);
    printf("\n在交換之後：n1 = %d, n2 = %d \n\n", n1, n2);

    return 0;
}
