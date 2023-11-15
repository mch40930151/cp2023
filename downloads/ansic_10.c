#include <stdio.h>
#include <time.h>

int main(void)
{
    time_t now;
    time(&now); // 獲取當前時間

    struct tm beg_month;
    beg_month = *localtime(&now); // 獲取本地時間結構體
    beg_month.tm_hour = 0;        // 將小時、分鐘、秒設置為0
    beg_month.tm_min = 0;
    beg_month.tm_sec = 0;
    beg_month.tm_mday = 1;         // 將日設置為1，即本月初

    double seconds = difftime(now, mktime(&beg_month)); // 計算兩個時間之間的秒數差
    printf("\n 距離本月初已經過了 %.f 秒。\n\n", seconds);
    return 0;
}
