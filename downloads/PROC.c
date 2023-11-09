#include <gd.h>
#include <stdio.h>
#include <math.h>

const double PI = 3.1415926;

gdImagePtr image;
int red, yellow;

typedef struct {
    int x;
    int y;
    int size;
    int angle; // 添加角度字段
} Star;

void DrawRectangle(int x, int y, int height, int width) {
    gdImageFilledRectangle(image, x, y, x + width, y + height, red);
}

void DrawFiveStar(int x, int y, int size, int angle) {
    double cos36 = cos(36 * PI / 180);
    int cx = x + size / 2;
    int cy = y + size / 2;
    double distance = 2 * size * cos36;

    gdPoint points[10];

    for (int i = 0; i < 5; i++) {
        double current_angle = i * 72 + angle;
        int x1 = cx + (int)(size * cos(current_angle * PI / 180));
        int y1 = cy + (int)(size * sin(current_angle * PI / 180));
        points[i * 2].x = x1;
        points[i * 2].y = y1;

        current_angle += 36;
        int x2 = cx + (int)(distance * cos(current_angle * PI / 180));
        int y2 = cy + (int)(distance * sin(current_angle * PI / 180));
        points[i * 2 + 1].x = x2;
        points[i * 2 + 1].y = y2;
    }

    gdImageFilledPolygon(image, points, 10, yellow);
}

int main() {
    int width = 1200;  // 设置画布宽度
    int height = 800; // 设置画布高度

    image = gdImageCreateTrueColor(width, height);
    red = gdImageColorAllocate(image, 255, 0, 0); // 红色
    yellow = gdImageColorAllocate(image, 255, 255, 0); // 黄色

    // 绘制红色矩形
    DrawRectangle(0, 0, height, width);

    // 创建星星数组，每颗星星的位置、大小和角度
    Star stars[] = {
        {400, 80, 20, 30},
        {480, 160, 20, 0},
        {480, 280, 20, 15},
        {400, 360, 20, 30},
        {200, 200, 60, 17},
        // 可以继续添加更多星星
    };

    // 绘制多颗黄色五角星
    for (int i = 0; i < sizeof(stars) / sizeof(stars[0]); i++) {
        DrawFiveStar(stars[i].x, stars[i].y, stars[i].size, stars[i].angle);
    }

    FILE *output_file = fopen("chinese_flag.png", "wb");
    gdImagePng(image, output_file);
    fclose(output_file);

    gdImageDestroy(image);
    return 0;
}
