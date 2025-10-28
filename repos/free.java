import java.util.*;
public class free {
    public static void main(String[]args){
        Random random = new Random();
        int counter = 0;
        while (true){
            int smth = random.nextInt(11)+2;
            counter ++;

            if (smth ==12){
                break;
            }
        }
            System.out.println(counter);
    }
        
}




