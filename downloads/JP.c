#include <gd.h>
#include <stdio.h>

int main() {
    const int width = 600;
    const int height = 400;

    gdImagePtr image;
    FILE *output_file;

    image = gdImageCreateTrueColor(width, height);
    output_file = fopen("japan_flag.png", "wb");

    // 定義顏色
    int white = gdImageColorAllocate(image, 255, 255, 255);
    int red = gdImageColorAllocate(image, 255, 0, 0);

    // 繪製白色背景
    gdImageFilledRectangle(image, 0, 0, width, height, white);

    // 繪製紅色圓圈（日本國旗）
    int circle_center_x = width / 2;
    int circle_center_y = height / 2;
    int circle_radius = 110;

    gdImageFilledEllipse(image, circle_center_x, circle_center_y, circle_radius * 2, circle_radius * 2, red);

    // 保存圖像文件
    gdImagePng(image, output_file);
    fclose(output_file);
    gdImageDestroy(image);

    return 0;
}
