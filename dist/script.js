import java.util.Scanner;

public class NumerologyCalculator {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Ingresar la fecha de nacimiento en formato dd/mm/yyyy
        System.out.print("Ingresa la fecha de nacimiento (dd/mm/yyyy): ");
        String fechaNacimiento = scanner.nextLine();

        // Ingresar la hora de nacimiento en formato hh:mm
        System.out.print("Ingresa la hora de nacimiento (hh:mm): ");
        String horaNacimiento = scanner.nextLine();

        // Calcular la numerología
        int numerologia = calcularNumerologia(fechaNacimiento, horaNacimiento);

        // Mostrar el resultado
        System.out.println("El número de numerología es: " + numerologia);

        scanner.close();
    }

    private static int calcularNumerologia(String fechaNacimiento, String horaNacimiento) {
        // Sumar los dígitos de la fecha de nacimiento
        int sumaFecha = sumarDigitos(fechaNacimiento);

        // Sumar los dígitos de la hora de nacimiento
        int sumaHora = sumarDigitos(horaNacimiento);

        // Sumar los resultados parciales
        return sumaFecha + sumaHora;
    }

    private static int sumarDigitos(String cadena) {
        int suma = 0;
        for (char digito : cadena.toCharArray()) {
            if (Character.isDigit(digito)) {
                suma += Character.getNumericValue(digito);
            }
        }
        return suma;
    }
}