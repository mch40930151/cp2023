#include <stdio.h>

int main() {
    float rec_width;         /* 宣告變數 'rec_width' 以儲存矩形的寬度 */
    float rec_height;        /* 宣告變數 'rec_height' 以儲存矩形的高度 */
    float rec_perimeter;     /* 宣告變數 'rec_perimeter' 以儲存周長（將要計算的值） */

    // 提示使用者輸入矩形的高度。
    printf("輸入矩形的高度：");
    int heightScanResult = scanf("%f", &rec_height);  // 從使用者處讀取 'rec_height' 的值。

    // 提示使用者輸入矩形的寬度。
    printf("輸入矩形的寬度：");
    int widthScanResult = scanf("%f", &rec_width);  // 從使用者處讀取 'rec_width' 的值。

    // 使用公式計算矩形的周長：周長 = 2 * (寬度 + 高度)
    rec_perimeter = 2.0 * (rec_height + rec_width);

    // 印出計算得到的矩形周長。
    printf("矩形的周長為：%f\n", rec_perimeter);

    return 0;  // 表示程式執行成功。
}
