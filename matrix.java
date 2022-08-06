//This is a class used to test the for loops in checkWinner()
public class matrix{
    public static void main (String args []){
        int matrix [][] = new int [7][7];
        System.out.print("\fHorizontal\n");
        for(int i = 0; i<7; i++){
            for(int j = 0; j<4; j++){
                System.out.print(i + "," + j + "\t");
                System.out.print(i + "," + (j+1) + "\t");
                System.out.print(i + "," + (j+2) + "\t");
                System.out.print(i + "," + (j+3) + "\n");
            }
        }
        System.out.print("\n\n\nVertical\n");
        for(int i = 0; i<4; i++){
            for(int j = 0; j<7; j++){
                System.out.print(i + "," + j + "\t");
                System.out.print((i+1) + "," + j + "\t");
                System.out.print((i+2) + "," + j + "\t");
                System.out.print((i+3) + "," + j + "\n");
            }
        }
        System.out.print("\n\n\nDiagonal\n");
        for(int i = 0; i<4; i++){
            for(int j = 0; j<4; j++){
                System.out.print(i + "," + j + "\t");
                System.out.print((i+1) + "," + (j+1) + "\t");
                System.out.print((i+2) + "," + (j+2) + "\t");
                System.out.print((i+3) + "," + (j+3) + "\n");
            }
        }
        for(int i = 6; i>2; i--){
            for(int j = 0; j<4; j++){
                System.out.print("\n");
                System.out.print(i + "," + j + "\t");
                System.out.print((i-1) + "," + (j+1) + "\t");
                System.out.print((i-2) + "," + (j+2) + "\t");
                System.out.print((i-3) + "," + (j+3) + "\n");
            }
        }
    }
}