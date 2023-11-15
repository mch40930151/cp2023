#include <time.h>
#include <stdio.h>  
#include <stdlib.h>

int main(void)
{
    time_t cur_time;     // 定義時間變數
    char* cur_t_string;  // 定義時間字串指標

    cur_time = time(NULL);  // 獲取當前時間
    if (cur_time == ((time_t)-1))
    {
        (void) fprintf(stderr, "無法獲取當前日期和時間。\n");
        exit(EXIT_FAILURE);
    }

    cur_t_string = ctime(&cur_time); // 將時間轉換為本地時間格式
    if (cur_t_string == NULL)
    {
        (void) fprintf(stderr, "無法轉換當前日期和時間。\n");
        exit(EXIT_FAILURE);
    }

    (void) printf("\n 現在的時間是：%s \n", cur_t_string);
    exit(EXIT_SUCCESS);
}
