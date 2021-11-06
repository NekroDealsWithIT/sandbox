
import java.util.Scanner;

/**
 *
 * @author Mauricio Niemand <Mauricio.Niemand at your.org>
 */
public class main {
    public static void main(String[] args) {
        String descripcion="Crear un programa en java en el cual se pida al usuario ingresar su nombre, apellido, edad, hobbie, editor de código preferido, sistema operativo que utiliza, luego deberá mostrarse por consola los datos ingresados.\nEl programa deber ser subido a un repositorio de GitHub, \npegar el link del ejercicio resuelto en el siguiente recuadro.";
        /*
        ingresar su nombre, 
        apellido, 
        edad, 
        hobbie, 
        editor de código preferido, 
        sistema operativo que utiliza, 
        luego deberá mostrarse por consola los datos ingresados
        */
        System.out.println(descripcion);
        
        Scanner scan = new Scanner(System.in);
        System.out.println("ingresar su nombre: ");
        String userName = scan.nextLine();
        
        System.out.println("apellido: ");
        String userSurname = scan.nextLine();

        System.out.println("edad: ");
        String userAge = scan.nextLine();

        System.out.println("hobbie: ");
        String userHobbie = scan.nextLine(); 

        System.out.println("Editor de codigo: ");
        String userCodeEditor = scan.nextLine(); 
        
        System.out.println("Sistema operativo: ");
        System.out.println(System.getProperty("os.name"));

        System.out.println(
                "Nombre: "+userName
                +"\nApellido: "+userSurname
                +"\nEdad: "+userAge
                +"\nHobbie: "+userHobbie
                +"\nEditor de codigo: "+userCodeEditor
                +"\nSistema operativo: "+System.getProperty("os.name")
            );
    }
}
