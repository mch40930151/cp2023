var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite  \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'w5', 'text': '// 包含標準輸出入程式庫的標頭文件\n// https://blog.csdn.net/weixin_38468077/article/details/101069365\n// http://www.gnuplot.info/demo/\n// https://github.com/sysprog21/rv32emu\n// https://github.com/sysprog21/semu \n// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3\n// https://cs61c.org/fa23/\n// https://greenteapress.com/wp/think-python-2e/\n// https://github.com/ecalvadi/c99-examples\n// https://github.com/gouravthakur39/beginners-C-program-examples\n// https://github.com/ergenekonyigit/Numerical-Analysis-Examples\n// https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf\n// https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf\n// https://jsommers.github.io/cbook/cbook.pdf\n// https://jsommers.github.io/cbook/index.html\n// http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf\n// http://cslibrary.stanford.edu/101/EssentialC.pdf\n// https://publications.gbdirect.co.uk/c_book/\n// https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf\n// ***** execute on replit \n// cd downloads\n// cc gnuplot_ex1.c -o gnuplot_ex1\n// ./gnuplot_ex1\n#include <stdio.h>\n\n// 主函式\nint main() {\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n\n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal png font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/gnuplot_ex1.png\'\\n");\n    fprintf(gnuplotPipe, "plot sin(x)");\n    // Close popen\n    pclose(gnuplotPipe);\n\n    return 0;\n} \n \n clear\xa0 \n cd downloads \n cc gnuplot ex1.c \n ./a.out \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue);\n\nint main() {\n// width 3: height 2\nint width = 1200;\nint height = (int)(width*2.0 / 3.0);\n\ngdImagePtr img = gdImageCreateTrueColor(width, height);\ngdImageAlphaBlending(img, 0);\n\ndraw_roc_flag(img);\n\nFILE *outputFile = fopen("./roc_flag.png", "wb");\nif (outputFile == NULL) {\nfprintf(stderr, "Error opening the output file.\\n");\nreturn 1;\n}\ngdImagePngEx(img, outputFile, 9);\nfclose(outputFile);\ngdImageDestroy(img);\nreturn 0;\n}\n\nvoid draw_roc_flag(gdImagePtr img) {\nint width = gdImageSX(img);\nint height = gdImageSY(img);\nint red, white, blue;\nint center_x = (int)(width/4);\nint center_y = (int)(height/4);\nint sun_radius = (int)(width/8);\n\n// Colors for the flag\nred = gdImageColorAllocate(img, 242, 0, 0); // Red color\nwhite = gdImageColorAllocate(img, 255, 255, 255); // White stripes\nblue = gdImageColorAllocate(img, 0, 41, 204); // Blue\n\n// 繪製紅色矩形區域\ngdImageFilledRectangle(img, 0, 0, width, height, red);\n\n// 繪製藍色矩形區域\ngdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n\n// 繪製太陽\ndraw_white_sun(img, center_x, center_y, sun_radius, white, red, blue);\n}\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue) {\nfloat angle = 0;\nint numRays = 12; // 光芒的數量\n\ngdPoint points[3]; // 三個頂點的陣列\n\nfor (int i = 0; i < numRays; i++) {\nangle = i * (2 * M_PI / numRays);\nfloat x1 = center_x + cos(angle) * sun_radius;\nfloat y1 = center_y + sin(angle) * sun_radius;\n\n// 調整兩個底邊頂點的位置\nfloat x2 = center_x + cos(angle + 0.35) * (sun_radius * 0.5);\nfloat y2 = center_y + sin(angle + 0.35) * (sun_radius * 0.5);\nfloat x3 = center_x + cos(angle - 0.35) * (sun_radius * 0.5);\nfloat y3 = center_y + sin(angle - 0.35) * (sun_radius * 0.5);\n\n// 設定多邊形的三個頂點\npoints[0].x = (int)x1;\npoints[0].y = (int)y1;\npoints[1].x = (int)x2;\npoints[1].y = (int)y2;\npoints[2].x = (int)x3;\npoints[2].y = (int)y3;\n\ngdImageFilledPolygon(img, points, 3, white);\n}\n//外圈\ngdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.2, sun_radius * 1.2, blue);\n\n// 繪製太陽內部\ngdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.1, sun_radius * 1.1, white);\n} \n \n \n // https://en.wikipedia.org/wiki/Flag_of_the_United_States\n// https://www.britannica.com/topic/flag-of-the-United-States-of-America\n// 以下為幾乎要繪製完成的美國國旗, 請修改下列原始碼, 令其繪出正確的美國國旗\n#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_usa_flag(gdImagePtr img);\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\n    int width = 800;\n    int height = (int)(width / 1.9);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_usa_flag(img);\n\n    FILE *outputFile = fopen("./../images/usa_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n\n    return 0;\n}\n\nvoid draw_usa_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // Colors for the flag\n    red = gdImageColorAllocate(img, 178, 34, 52); // Red stripes\n    white = gdImageColorAllocate(img, 255, 255, 255); // White stripes\n    blue = gdImageColorAllocate(img, 60, 59, 110); // Blue field\n\n    int stripe_height = height / 13;\n    int stripe_width = width;\n    int star_size = (int)(0.0308 * height); // Corrected star size (half the original size)\n\n    for (int y = 0; y < height; y += stripe_height) {\n        if (y / stripe_height % 2 == 0) {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n        } else {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n        }\n    }\n\n    gdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);\n\n    int star_spacing_x = (int)(0.126 * height); // Horizontal spacing between stars\n    int star_spacing_y = (int)(0.054 * height); // Vertical spacing between stars\n    int star_start_x = (int)(0.122 * height); // Starting X position for stars\n    int star_start_y = (int)(0.0485 * height); // Starting Y position for stars\n\n    for (int row = 0; row < 9; row++) {\n        int starsPerRow = (row % 2 == 0) ? 6 : 5;\n        int space_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;\n        for (int star = 0; star < starsPerRow; star++) {\n            int x = star_start_x + star * star_spacing_x+space_x;\n            int y = star_start_y + row * star_spacing_y;\n            draw_star(img, x, y, star_size, white);\n        }\n    }\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color) {\n    gdPoint points[10];\n\n    for (int i = 0; i < 10; i++) {\n        double angle = M_PI / 2 + i * 2 * M_PI / 10+M_PI;\n        int radius = (i % 2 == 0) ? size : size / 2;\n        points[i].x = x + radius * cos(angle);\n        points[i].y = y + radius * sin(angle);\n    }\n\n    // Fill the star with white color\n    gdImageFilledPolygon(img, points, 10, color);\n}\n \n \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue);\n\nint main() {\n// width 3: height 2\nint width = 1200;\nint height = (int)(width*2.0 / 3.0);\n\ngdImagePtr img = gdImageCreateTrueColor(width, height);\ngdImageAlphaBlending(img, 0);\n\ndraw_roc_flag(img);\n\nFILE *outputFile = fopen("./roc_flag.png", "wb");\nif (outputFile == NULL) {\nfprintf(stderr, "Error opening the output file.\\n");\nreturn 1;\n}\ngdImagePngEx(img, outputFile, 9);\nfclose(outputFile);\ngdImageDestroy(img);\nreturn 0;\n}\n\nvoid draw_roc_flag(gdImagePtr img) {\nint width = gdImageSX(img);\nint height = gdImageSY(img);\nint red, white, blue;\nint center_x = (int)(width/4);\nint center_y = (int)(height/4);\nint sun_radius = (int)(width/8);\n\n// Colors for the flag\nred = gdImageColorAllocate(img, 242, 0, 0); // Red color\nwhite = gdImageColorAllocate(img, 255, 255, 255); // White stripes\nblue = gdImageColorAllocate(img, 0, 41, 204); // Blue\n\n// 繪製紅色矩形區域\ngdImageFilledRectangle(img, 0, 0, width, height, red);\n\n// 繪製藍色矩形區域\ngdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n\n// 繪製太陽\ndraw_white_sun(img, center_x, center_y, sun_radius, white, red, blue);\n}\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue) {\nfloat angle = 0;\nint numRays = 12; // 光芒的數量\n\ngdPoint points[3]; // 三個頂點的陣列\n\nfor (int i = 0; i < numRays; i++) {\nangle = i * (2 * M_PI / numRays);\nfloat x1 = center_x + cos(angle) * sun_radius;\nfloat y1 = center_y + sin(angle) * sun_radius;\n\n// 調整兩個底邊頂點的位置\nfloat x2 = center_x + cos(angle + 0.35) * (sun_radius * 0.5);\nfloat y2 = center_y + sin(angle + 0.35) * (sun_radius * 0.5);\nfloat x3 = center_x + cos(angle - 0.35) * (sun_radius * 0.5);\nfloat y3 = center_y + sin(angle - 0.35) * (sun_radius * 0.5);\n\n// 設定多邊形的三個頂點\npoints[0].x = (int)x1;\npoints[0].y = (int)y1;\npoints[1].x = (int)x2;\npoints[1].y = (int)y2;\npoints[2].x = (int)x3;\npoints[2].y = (int)y3;\n\ngdImageFilledPolygon(img, points, 3, white);\n}\n//外圈\ngdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.2, sun_radius * 1.2, blue);\n\n// 繪製太陽內部\ngdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.1, sun_radius * 1.1, white);\n} \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '\n \n \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'ANSIC', 'text': '1. \n include <stdio.h>\n\nfloat temp_f;  /* 華氏度 */\nfloat temp_c;  /* 攝氏度 */\nchar line_text[50]; /* 一行輸入 */\n\nint main() {\n    printf("輸入溫度（攝氏度）：");\n\n    if (fgets(line_text, sizeof(line_text), stdin) == NULL) {\n        // 處理錯誤（例如，打印錯誤消息或退出程序）。\n        fprintf(stderr, "讀取輸入時發生錯誤。\\n");\n        return 1; // 返回非零值表示錯誤。\n    }\n\n    if (sscanf(line_text, "%f", &temp_c) != 1) {\n        // 處理錯誤（例如，打印錯誤消息或退出程序）。\n        fprintf(stderr, "將輸入轉換為浮點數時發生錯誤。\\n");\n        return 1; // 返回非零值表示錯誤。\n    }\n\n    temp_f = ((9.0 / 5.0) * temp_c) + 32.0;\n    printf("%f 度華氏。\\n", temp_f);\n\n    return 0;\n}\n \n \n 2. \n #include <stdio.h>\n\nint main() {\n    float rec_width;         /* 宣告變數 \'rec_width\' 以儲存矩形的寬度 */\n    float rec_height;        /* 宣告變數 \'rec_height\' 以儲存矩形的高度 */\n    float rec_perimeter;     /* 宣告變數 \'rec_perimeter\' 以儲存周長（將要計算的值） */\n\n    // 提示使用者輸入矩形的高度。\n    printf("輸入矩形的高度：");\n    int heightScanResult = scanf("%f", &rec_height);  // 從使用者處讀取 \'rec_height\' 的值。\n\n    // 提示使用者輸入矩形的寬度。\n    printf("輸入矩形的寬度：");\n    int widthScanResult = scanf("%f", &rec_width);  // 從使用者處讀取 \'rec_width\' 的值。\n\n    // 使用公式計算矩形的周長：周長 = 2 * (寬度 + 高度)\n    rec_perimeter = 2.0 * (rec_height + rec_width);\n\n    // 印出計算得到的矩形周長。\n    printf("矩形的周長為：%f\\n", rec_perimeter);\n\n    return 0;  // 表示程式執行成功。\n}\n \n \n 3. \n #include <stdio.h>\n\nint main() {\n    int chk_year;\n\n    printf("輸入一個年份：");\n    if (scanf("%d", &chk_year) != 1) {\n        fprintf(stderr, "錯誤：輸入無效。請輸入有效的年份。\\n");\n        return 1; // 表示錯誤\n    }\n\n    if ((chk_year % 400) == 0)\n        printf("%d年是閏年。\\n", chk_year);\n    else if ((chk_year % 100) == 0)\n        printf("%d年不是閏年。\\n", chk_year);\n    else if ((chk_year % 4) == 0)\n        printf("%d年是閏年。\\n", chk_year);\n    else\n        printf("%d年不是閏年。\\n", chk_year);\n\n    return 0; // 表示成功執行\n}\n \n \n \n 4. \n #include <stdio.h>\n\nint main() {\n    int num1, rem1;\n\n    printf("輸入一個整數：");\n\n    // 使用 scanf 函數讀取整數，同時檢查返回值確保成功讀取\n    if (scanf("%d", &num1) != 1) {\n        fprintf(stderr, "錯誤：輸入無效。請輸入有效的整數。\\n");\n        return 1; // 表示錯誤\n    }\n\n    // 計算整數除以2的餘數\n    rem1 = num1 % 2;\n\n    // 根據餘數判斷奇偶性並輸出結果\n    if (rem1 == 0)\n        printf("%d 是偶數。\\n", num1);\n    else\n        printf("%d 是奇數。\\n", num1);\n\n    return 0; // 表示成功執行\n}\n \n \n 5. \n #include <stdio.h>\n\nint main() {\n    int j, sum = 0;\n\n    printf("前10個自然數是：\\n");\n\n    for (j = 1; j <= 10; j++) {\n        sum = sum + j;\n        printf("%d ", j);\n    }\n\n    printf("\\n總和為：%d\\n", sum);\n\n    return 0;\n}\n \n \n \n 6. \n #include <stdio.h>\n\nint main() {\n    int j, i, n;\n\n    printf("輸入要生成的乘法表的數字範圍（從1開始）：");\n\n    // 使用scanf函數讀取用戶輸入，同時檢查返回值確保成功讀取\n    if (scanf("%d", &n) != 1) {\n        fprintf(stderr, "錯誤：輸入無效。請輸入一個有效的數字。\\n");\n        return 1; // 表示錯誤\n    }\n\n    printf("從1到%d的乘法表\\n", n);\n\n    for (i = 1; i <= 10; i++) {\n        for (j = 1; j <= n; j++) {\n            printf("%dx%d = %d, ", j, i, i*j);\n        }\n        printf("\\n");\n    }\n\n    return 0; // 表示成功執行\n}\n \n \n \n 7. \n #include <stdio.h>\n\n// 函數：計算一個數字的平方\ndouble square(double num) {\n    return (num * num);\n}\n\nint main() {\n    int num;\n    double n;\n\n    printf("\\n\\n 函數：找出任意數字的平方：\\n");\n    printf("------------------------------------------------\\n");\n\n    printf("輸入任意數字以求平方：");\n\n    // 使用scanf函數讀取用戶輸入，同時檢查返回值確保成功讀取\n    if (scanf("%d", &num) != 1) {\n        fprintf(stderr, "錯誤：輸入無效。請輸入一個有效的數字。\\n");\n        return 1; // 表示錯誤\n    }\n\n    n = square(num);\n\n    printf("%d的平方是：%.2f\\n", num, n); \n\n    return 0; // 表示成功執行\n}\n \n \n 8. \n #include<stdio.h>\n\n// 函數：交換兩個數字\nvoid swap(int *p, int *q) {\n    int tmp;\n    tmp = *p;   // tmp儲存n1的值\n    *p = *q;    // *p儲存*q的值，即n2的值\n    *q = tmp;   // *q儲存tmp的值，即n1的值\n}\n\nint main() {\n    int n1, n2;\n\n    printf("\\n\\n 函數：使用函數交換兩個數字：\\n");\n    printf("------------------------------------------------\\n");\n\n    printf("輸入第一個數字：");\n    // 使用scanf函數讀取用戶輸入，同時檢查返回值確保成功讀取\n    if (scanf("%d", &n1) != 1) {\n        fprintf(stderr, "錯誤：輸入無效。請輸入一個有效的數字。\\n");\n        return 1; // 表示錯誤\n    }\n\n    printf("輸入第二個數字：");\n    // 使用scanf函數讀取用戶輸入，同時檢查返回值確保成功讀取\n    if (scanf("%d", &n2) != 1) {\n        fprintf(stderr, "錯誤：輸入無效。請輸入一個有效的數字。\\n");\n        return 1; // 表示錯誤\n    }\n\n    printf("在交換之前：n1 = %d, n2 = %d ", n1, n2);\n    // 將兩個變數的地址傳遞給函數。\n    swap(&n1, &n2);\n    printf("\\n在交換之後：n1 = %d, n2 = %d \\n\\n", n1, n2);\n\n    return 0;\n}\n \n \n 9. \n #include <time.h>\n#include <stdio.h>  \n#include <stdlib.h>\n\nint main(void)\n{\n    time_t cur_time;     // 定義時間變數\n    char* cur_t_string;  // 定義時間字串指標\n\n    cur_time = time(NULL);  // 獲取當前時間\n    if (cur_time == ((time_t)-1))\n    {\n        (void) fprintf(stderr, "無法獲取當前日期和時間。\\n");\n        exit(EXIT_FAILURE);\n    }\n\n    cur_t_string = ctime(&cur_time); // 將時間轉換為本地時間格式\n    if (cur_t_string == NULL)\n    {\n        (void) fprintf(stderr, "無法轉換當前日期和時間。\\n");\n        exit(EXIT_FAILURE);\n    }\n\n    (void) printf("\\n 現在的時間是：%s \\n", cur_t_string);\n    exit(EXIT_SUCCESS);\n}\n \n \n 10. \n #include <stdio.h>\n#include <time.h>\n\nint main(void)\n{\n    time_t now;\n    time(&now); // 獲取當前時間\n\n    struct tm beg_month;\n    beg_month = *localtime(&now); // 獲取本地時間結構體\n    beg_month.tm_hour = 0;        // 將小時、分鐘、秒設置為0\n    beg_month.tm_min = 0;\n    beg_month.tm_sec = 0;\n    beg_month.tm_mday = 1;         // 將日設置為1，即本月初\n\n    double seconds = difftime(now, mktime(&beg_month)); // 計算兩個時間之間的秒數差\n    printf("\\n 距離本月初已經過了 %.f 秒。\\n\\n", seconds);\n    return 0;\n}\n \n', 'tags': '', 'url': 'ANSIC.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};