#include <stdio.h>
#include <gd.h>

int main() {
    int width = 255;
    int height = 170;

    gdImagePtr im;
    FILE *output;

    /* Create a new GD image with white background */
    im = gdImageCreateTrueColor(width, height);
    int white = gdImageColorAllocate(im, 255, 255, 255);
    gdImageFill(im, 0, 0, white);

    /* Draw the red circle */
    int red = gdImageColorAllocate(im, 206, 42, 55);
    gdImageFilledArc(im, width / 2, height / 2, 85, 85, 45, 225, red, GD_ARC);

    /* Draw the blue circle */
    int blue = gdImageColorAllocate(im, 0, 69, 161);
    gdImageFilledArc(im, width / 2, height / 2, 85, 85, 45, 225, blue, GD_ARC | GD_EDGED);

    /* Draw the black rectangles */
    int black = gdImageColorAllocate(im, 0, 0, 0);
    gdImageFilledRectangle(im, 59, 128, 65, 124, black);
    gdImageFilledRectangle(im, 181, 118, 206, 135, black);
    gdImageFilledRectangle(im, 197, 38, 205, 33, black);
    gdImageFilledRectangle(im, 185, 45, 178, 50, black);

    /* Save the image to a file */
    output = fopen("korean_flag.png", "wb");
    gdImagePng(im, output);
    fclose(output);

    /* Free GD image */
    gdImageDestroy(im);

    return 0;
}
