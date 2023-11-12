export interface ColorPalette {
    id: string; 
    title: string; 
    color_1: string; 
    color_2: string; 
    color_3: string;
    color_4: string; 
}

export type ColorRequest = Pick<ColorPalette, "title" | "color_1" | "color_2" | "color_3" | "color_4">