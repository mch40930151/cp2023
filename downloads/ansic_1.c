#include <stdio.h>

float temp_f;  /* 華氏度 */
float temp_c;  /* 攝氏度 */
char line_text[50]; /* 一行輸入 */

int main() {
    printf("輸入溫度（攝氏度）：");

    if (fgets(line_text, sizeof(line_text), stdin) == NULL) {
        // 處理錯誤（例如，打印錯誤消息或退出程序）。
        fprintf(stderr, "讀取輸入時發生錯誤。\n");
        return 1; // 返回非零值表示錯誤。
    }

    if (sscanf(line_text, "%f", &temp_c) != 1) {
        // 處理錯誤（例如，打印錯誤消息或退出程序）。
        fprintf(stderr, "將輸入轉換為浮點數時發生錯誤。\n");
        return 1; // 返回非零值表示錯誤。
    }

    temp_f = ((9.0 / 5.0) * temp_c) + 32.0;
    printf("%f 度華氏。\n", temp_f);

    return 0;
}
