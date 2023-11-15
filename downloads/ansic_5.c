#include <stdio.h>

int main() {
    int j, sum = 0;

    printf("前10個自然數是：\n");

    for (j = 1; j <= 10; j++) {
        sum = sum + j;
        printf("%d ", j);
    }

    printf("\n總和為：%d\n", sum);

    return 0;
}
