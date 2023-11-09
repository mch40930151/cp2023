#include <gd.h>
#include <stdio.h>

int main() {
    const int width = 1920;
    const int height = 960;

    gdImagePtr image;
    FILE *output_file;

    image = gdImageCreateTrueColor(width, height);
    output_file = fopen("uk_flag.png", "wb");

    // 定義顏色
    int white = gdImageColorAllocate(image, 255, 255, 255);
    int red = gdImageColorAllocate(image, 205, 32, 38);
    int blue = gdImageColorAllocate(image, 0, 51, 153);

    // 繪製藍色背景（藍色矩形）
    gdImageFilledRectangle(image, 0, 0, width, height, blue);

    // 繪製白色米字樣
    gdPoint whiteCross[28] = {
        {0, 0}, {214, 0}, {800, 293}, {800, 0}, {1120, 0}, {1120, 293}, {1704, 0}, {1920, 0},
        {1920, 106}, {1496, 320}, {1920, 320}, {1920, 640}, {1496, 640}, {1920, 854}, {1920, 960},
        {1704, 960}, {1120, 668}, {1120, 960}, {800, 960}, {800, 668}, {214, 960}, {0, 960},
        {0, 854}, {424, 640}, {0, 640}, {0, 320}, {424, 320}, {0, 106}
    };

    gdImageFilledPolygon(image, whiteCross, 28, white);

    // 繪製紅色大十字和四條斜線
    gdPoint redCross[12] = {
        {1056, 0}, {1056, 386}, {1920, 386}, {1920, 576},
        {1056, 576}, {1056, 960}, {864, 960}, {864, 576},
        {0, 576}, {0, 386}, {864, 386}, {864, 0}
    };

    gdImageFilledPolygon(image, redCross, 12, red);

    // 繪製四條紅色斜線
    gdPoint redSlash1[5] = {{0, 0}, {640, 320}, {496, 320}, {0, 72}, {0, 0}};
    gdPoint redSlash2[5] = {{1774, 0}, {1920, 0}, {1280, 320}, {1136, 320}, {1774, 0}};
    gdPoint redSlash3[5] = {{1920, 960}, {1280, 640}, {1424, 640}, {1920, 888}, {1920, 960}};
    gdPoint redSlash4[5] = {{0, 960}, {640, 640}, {782, 640}, {142, 960}, {0, 960}};

    gdImageFilledPolygon(image, redSlash1, 5, red);
    gdImageFilledPolygon(image, redSlash2, 5, red);
    gdImageFilledPolygon(image, redSlash3, 5, red);
    gdImageFilledPolygon(image, redSlash4, 5, red);

    // 保存圖像文件
    gdImagePng(image, output_file);
    fclose(output_file);
    gdImageDestroy(image);

    return 0;
}
